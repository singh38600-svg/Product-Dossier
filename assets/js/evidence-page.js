
(() => {
  const container = document.querySelector('[data-evidence-grid]');
  if (!container || !window.EVIDENCE_DATA) return;

  const searchInput = document.querySelector('[data-evidence-search]');
  const filterButtons = [...document.querySelectorAll('[data-filter]')];
  const count = document.querySelector('[data-evidence-count]');
  let activeCategory = 'All';

  const confidenceClass = value => {
    if (value === 'High') return 'high';
    if (value === 'Medium') return 'medium';
    return 'low';
  };

  const statusClass = value => value === 'Rejected' ? 'rejected' : confidenceClass(
    value === 'Verified' ? 'High' : value === 'Signal' || value === 'Hypothesis' ? 'Medium' : 'Low'
  );

  const escapeHtml = value => String(value).replace(/[&<>"']/g, char => ({
    '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#039;'
  })[char]);

  function render() {
    const query = (searchInput?.value || '').trim().toLowerCase();
    const rows = window.EVIDENCE_DATA.filter(item => {
      const categoryMatch = activeCategory === 'All' || item.category === activeCategory;
      const haystack = `${item.id} ${item.category} ${item.claim} ${item.summary} ${item.status}`.toLowerCase();
      return categoryMatch && haystack.includes(query);
    });

    if (count) count.textContent = `${rows.length} evidence item${rows.length === 1 ? '' : 's'} shown`;

    if (!rows.length) {
      container.innerHTML = `<div class="empty-state">No evidence matches the current filters.</div>`;
      return;
    }

    container.innerHTML = rows.map(item => `
      <article class="evidence-card">
        <button class="evidence-summary" aria-expanded="false">
          <span class="evidence-id">${escapeHtml(item.id)}</span>
          <span>
            <span class="evidence-category">${escapeHtml(item.category)}</span>
            <h3>${escapeHtml(item.claim)}</h3>
          </span>
          <span class="tag ${statusClass(item.status)}">${escapeHtml(item.status)}</span>
          <span class="chevron" aria-hidden="true">＋</span>
        </button>
        <div class="evidence-detail">
          <div class="detail-block">
            <strong>What the evidence says</strong>
            <p>${escapeHtml(item.summary)}</p>
          </div>
          <div class="detail-block">
            <strong>Counter-evidence or limitation</strong>
            <p>${escapeHtml(item.counter)}</p>
          </div>
          <div class="detail-block">
            <strong>Decision implication</strong>
            <p>${escapeHtml(item.implication)}</p>
          </div>
          <div class="detail-block">
            <strong>Source and confidence</strong>
            <p><a href="${escapeHtml(item.url)}" target="_blank" rel="noreferrer">${escapeHtml(item.source)}</a><br>
            Confidence: ${escapeHtml(item.confidence)} · Reviewed ${escapeHtml(item.updated)}</p>
          </div>
        </div>
      </article>
    `).join('');

    container.querySelectorAll('.evidence-summary').forEach(button => {
      button.addEventListener('click', () => {
        const card = button.closest('.evidence-card');
        const open = card.classList.toggle('open');
        button.setAttribute('aria-expanded', String(open));
      });
    });
  }

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      activeCategory = button.dataset.filter;
      filterButtons.forEach(item => item.classList.toggle('active', item === button));
      render();
    });
  });
  searchInput?.addEventListener('input', render);
  render();
})();
