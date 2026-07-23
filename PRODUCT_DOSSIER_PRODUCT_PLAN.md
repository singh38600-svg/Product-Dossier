# The Product Dossier — Complete Product Management Plan

> Combined product-management documentation for the Research Publishing System.

> This master file contains the product strategy, requirements, research workflow, AI safeguards, architecture, data model, roadmap, risks, backlog, QA criteria, and implementation handoff.

---

<!-- SOURCE FILE: 00_INDEX.md -->

---
product: The Product Dossier
initiative: Multi-edition research publishing platform
owner: Rohit Singh
status: Draft for review
version: 0.1
last_updated: 2026-07-20
---

# Product Management Documentation Index

This folder is the pre-build product-management pack for evolving **The Product Dossier** from a single static edition into a scalable, evidence-first research publication.

The current public website and Edition 001 must remain unchanged until the new workflow is proven. These documents define the product before engineering begins.

## Product in one sentence

A private research workspace where Rohit can upload PDFs or paste text, use AI to extract and organise evidence, review every claim, generate a structured edition draft, and publish approved content to The Product Dossier without manually rebuilding the website.

## Core architectural rule

> Code controls the workflow. Supabase stores the source of truth. OpenRouter assists with understanding and drafting. Rohit approves and publishes.

## Documents

| File | Purpose |
|---|---|
| `01_PRODUCT_BRIEF.md` | Executive summary of the product, audience, problem, and proposed solution |
| `02_VISION_STRATEGY.md` | Long-term vision, strategic positioning, moat, and sequencing |
| `03_PROBLEM_OPPORTUNITY.md` | Problem framing, opportunity size, current-state gaps, and hypotheses |
| `04_USER_PERSONAS_JTBD.md` | Personas, jobs-to-be-done, pains, gains, and user priorities |
| `05_PRODUCT_PRINCIPLES.md` | Non-negotiable product and editorial principles |
| `06_PRD.md` | Main product requirements document for the MVP |
| `07_SCOPE_REQUIREMENTS.md` | Functional, non-functional, and out-of-scope requirements |
| `08_USER_FLOWS.md` | End-to-end flows for research ingestion, review, drafting, and publishing |
| `09_INFORMATION_ARCHITECTURE.md` | Admin and public information architecture |
| `10_CONTENT_EDITORIAL_MODEL.md` | Edition, evidence, citation, and editorial workflow model |
| `11_AI_RESEARCH_BRAIN.md` | AI responsibilities, guardrails, prompts, RAG, and evaluation plan |
| `12_DATA_MODEL.md` | Proposed Supabase entities, relationships, statuses, and lifecycle |
| `13_TECHNICAL_ARCHITECTURE.md` | System components, processing pipeline, environments, and integration boundaries |
| `14_SECURITY_PRIVACY.md` | Authentication, RLS, upload security, secrets, and data-handling requirements |
| `15_METRICS_ANALYTICS.md` | North-star metric, funnel, quality metrics, and event taxonomy |
| `16_ROADMAP_RELEASES.md` | Phased roadmap, milestones, dependencies, and release plan |
| `17_RISKS_MITIGATIONS.md` | Product, research, AI, technical, legal, and operational risks |
| `18_ACCEPTANCE_CRITERIA_QA.md` | Definition of done and test scenarios |
| `19_BACKLOG.md` | Prioritised epics, stories, and future ideas |
| `20_DECISION_LOG.md` | Decisions made, rationale, and consequences |
| `21_ASSUMPTIONS_OPEN_QUESTIONS.md` | Assumptions to validate and unresolved questions |
| `22_RESEARCH_OPERATIONS.md` | Repeatable operating procedure for producing each edition |
| `23_GLOSSARY.md` | Shared definitions for product, editorial, data, and AI concepts |
| `24_AGENT_HANDOFF.md` | Instructions for any developer or AI coding agent working on the repository |

## Recommended reading order

1. Product Brief
2. Vision and Strategy
3. Problem and Opportunity
4. Personas and JTBD
5. Product Principles
6. PRD
7. Scope and Requirements
8. User Flows
9. Content and Editorial Model
10. AI Research Brain
11. Data Model
12. Technical Architecture
13. Security and Privacy
14. Metrics
15. Roadmap
16. Risks
17. Acceptance Criteria

## Current product decisions already reflected

- The public site is a publication brand, not a personal portfolio.
- Rohit Singh is visibly credited with a small professional image and author profile.
- The goal is to impress product owners and stakeholders with useful, original insights.
- Edition 001 is Delta Exchange and remains the reference edition.
- Only Rohit is an admin initially.
- Supabase is the proposed database, storage, and authentication layer.
- OpenRouter is the proposed model gateway.
- PDF and pasted-text research inputs are required.
- AI produces suggestions and drafts, never automatic publication.
- Human approval is mandatory before any content becomes public.
- Exact citations and source traceability are core product requirements.
- The current website must not be changed until the ingestion and publishing flow works reliably.

---

<!-- SOURCE FILE: 01_PRODUCT_BRIEF.md -->

---
product: The Product Dossier
initiative: Multi-edition research publishing platform
owner: Rohit Singh
status: Draft for review
version: 0.1
last_updated: 2026-07-20
---

# Product Brief

## Working product name

**The Product Dossier — Research Publishing System**

## Background

The Product Dossier currently exists as a premium static publication. Edition 001 investigates Delta Exchange and presents a working thesis, findings, evidence, opportunities, experiments, limitations, and downloadable research assets.

The current system proves the editorial concept but does not scale. Every new edition would require manual editing of HTML, JavaScript data files, links, assets, and download references. There is no private research workspace, no database, no reusable editorial workflow, and no safe way to transform raw research into a new edition.

## Problem

Rohit needs to create future product investigations without rebuilding the site manually. Raw research will often arrive as PDFs, pasted text, screenshots, notes, and source links. Turning that material into a credible edition requires significant work:

- extracting and cleaning source content;
- identifying claims and contradictions;
- separating evidence from interpretation;
- preserving page-level citations;
- finding counter-evidence and limitations;
- writing findings and opportunities;
- formatting the edition consistently;
- reviewing every statement before publication.

A code-only CMS would organise content but would not meaningfully understand research. A fully autonomous AI publisher would be fast but unsafe and inconsistent with the publication’s evidence-first positioning.

## Proposed solution

Build a private admin and research workspace that combines deterministic software with a controlled AI layer.

The system will allow Rohit to:

1. Create a new edition workspace.
2. Upload PDFs or paste research text.
3. Store original sources in Supabase.
4. Extract text and preserve source locations.
5. Use OpenRouter models to generate structured candidate claims, summaries, contradictions, limitations, findings, and opportunities.
6. Review, edit, accept, reject, or merge AI suggestions.
7. Generate an edition draft from approved evidence only.
8. Preview the edition privately.
9. Publish deliberately.
10. Update or restore versions without losing history.

## Primary user

Rohit Singh, owner, researcher, editor, and publisher.

## Secondary users

Public readers, especially:

- product founders;
- product owners;
- senior stakeholders;
- product managers;
- strategy teams;
- designers;
- researchers;
- investors and operators.

## Value proposition

### For Rohit

Produce rigorous product investigations faster, with less manual formatting and stronger traceability.

### For product stakeholders

Receive useful, credible, evidence-linked insights that may reveal overlooked product opportunities.

### For readers

Understand a product through a transparent chain from source evidence to interpretation and recommendation.

## Differentiation

The Product Dossier is not:

- a generic AI blog;
- a review site;
- a product-news feed;
- an automated content farm;
- a résumé disguised as research;
- a collection of unsupported product opinions.

It is a repeatable, evidence-first product-intelligence publication where uncertainty, rejected claims, and counterarguments remain visible.

## MVP outcome

Rohit can create Edition 002 by uploading a small research pack, reviewing AI-generated structured evidence, assembling a draft, previewing it, and publishing it without manually editing the site’s HTML.

## Non-negotiable constraint

The current live website and Edition 001 must remain operational and unchanged until the new system passes acceptance testing.

---

<!-- SOURCE FILE: 02_VISION_STRATEGY.md -->

---
product: The Product Dossier
initiative: Multi-edition research publishing platform
owner: Rohit Singh
status: Draft for review
version: 0.1
last_updated: 2026-07-20
---

# Vision and Product Strategy

## Vision

Build the most credible independent product-intelligence publication created by a solo researcher with AI leverage, where every important conclusion is traceable and every recommendation is useful enough to reach the people building the product.

## Mission

Study products deeply, expose overlooked problems and opportunities, and turn public evidence into testable strategic proposals for product owners and stakeholders.

## Strategic ambition

The Product Dossier should become known for three things:

1. **Evidence discipline** — readers can inspect the source, limitation, confidence, and reasoning behind a claim.
2. **Original product thinking** — editions move beyond surface-level feature suggestions.
3. **Editorial quality** — the work feels considered, premium, and worth forwarding internally.

## Strategic problem to solve first

The limiting factor is not website design. It is the repeatability of producing a credible new edition.

Therefore the first strategic investment is a research-to-publication operating system, not a visual redesign.

## Strategic pillars

### 1. Source-grounded intelligence

Every edition must begin with stored, inspectable source material. AI may assist interpretation but cannot become the source of record.

### 2. Human editorial authority

Rohit remains responsible for claims, framing, and publication. AI output is always provisional.

### 3. Structured reuse

Findings, evidence, opportunities, citations, media, and downloads should be reusable data objects rather than hard-coded page content.

### 4. Progressive automation

Automate repetitive work first:

- extraction;
- chunking;
- classification;
- source summaries;
- citation suggestions;
- consistency checks;
- draft assembly.

Do not automate final judgment or publication.

### 5. Public trust as the moat

The moat is not access to an LLM. The moat is the publication’s research process, source ledger, editorial judgment, accumulated evidence graph, and reputation with product stakeholders.

## Positioning statement

For product leaders and curious operators who want more than surface commentary, The Product Dossier is an independent product-intelligence publication that turns public-source research into evidence-linked findings and testable opportunities. Unlike generic AI content, every edition exposes confidence, limitations, counter-evidence, and rejected claims.

## Strategic sequencing

### Stage 1 — Repeatable solo publication

- One admin.
- Uploaded PDFs and pasted text.
- Human-reviewed evidence.
- Draft generation.
- Private preview.
- Manual publish.

### Stage 2 — Stronger research intelligence

- Semantic research chat.
- Contradiction detection.
- Missing-evidence prompts.
- Source URL ingestion.
- Better evaluation and cost controls.

### Stage 3 — Distribution and reputation

- Newsletter.
- product and topic pages;
- analytics;
- social assets;
- private stakeholder links;
- corrections and update workflows.

### Stage 4 — Collaborative publication

Only if traffic and output justify it:

- researchers;
- editors;
- role-based permissions;
- review assignments;
- contributor bylines.

## Moat development

Over time, defensibility can come from:

- a proprietary evidence and citation graph;
- a consistent editorial scoring model;
- accumulated product teardowns;
- stakeholder relationships;
- high-quality update history;
- repeatable research operations;
- a trusted public archive of rejected and revised claims.

## Strategic trade-offs

| Decision | Chosen direction | Trade-off |
|---|---|---|
| Speed vs trust | Trust first | Slower publication, higher credibility |
| Full autonomy vs control | Human approval | More review work, lower reputational risk |
| Design vs workflow | Workflow first | Visual upgrades are delayed |
| Single model vs gateway | OpenRouter gateway | More integration complexity, less provider lock-in |
| Static content vs database | Supabase source of truth | Migration and schema work required |
| Broad input support vs focused MVP | PDF and text first | URLs, OCR-heavy images, and spreadsheets may follow |

## Five-year possibility

The platform could evolve into an independent product-intelligence brand covering multiple industries, with invited researchers and stakeholder-facing research services. This is a direction, not an MVP requirement.

---

<!-- SOURCE FILE: 03_PROBLEM_OPPORTUNITY.md -->

---
product: The Product Dossier
initiative: Multi-edition research publishing platform
owner: Rohit Singh
status: Draft for review
version: 0.1
last_updated: 2026-07-20
---

# Problem and Opportunity Definition

## Current state

Edition 001 is a manually assembled static publication. Its quality is high, but its production model is not repeatable for a growing archive.

A new edition currently requires the creator to manually:

- collect research across files and links;
- read and summarise every source;
- maintain source references separately;
- decide which statements are evidence, signals, hypotheses, or rejected claims;
- write the edition;
- update multiple HTML files;
- update the evidence JavaScript dataset;
- prepare downloads and media;
- verify links and mobile presentation;
- deploy the updated site.

## Primary problem statement

Rohit cannot efficiently create and maintain multiple evidence-first product investigations because the research process and publication are disconnected, manual, and encoded directly into static files.

## Secondary problem statements

### Research fragmentation

Research lives in PDFs, notes, screenshots, and browser tabs without a structured relationship to claims or final conclusions.

### Traceability burden

A generated insight is only credible if the exact source, page, limitation, and reasoning are preserved. Manually maintaining this chain is difficult.

### AI reliability risk

AI can accelerate reading and drafting but may:

- hallucinate sources;
- overstate confidence;
- combine unrelated facts;
- lose page references;
- present interpretation as fact;
- ignore contradictory evidence.

### Publishing friction

Even after the research is complete, turning it into a consistent edition requires technical editing.

### Update difficulty

When a product changes, the edition has no structured update workflow, source re-review process, or version history.

## Opportunity statement

Create a controlled research-to-publication system that reduces repetitive work while increasing evidence quality, traceability, and editorial consistency.

## Why now

- Modern models can extract structured information from long documents.
- Structured output schemas make AI responses more predictable.
- Supabase provides a practical solo-builder stack for database, authentication, storage, and row-level security.
- OpenRouter provides access to multiple models without committing the product to one provider.
- The existing Delta Exchange edition gives a real content model and migration reference.

## User outcome hypothesis

If Rohit can upload research and receive page-linked candidate evidence, then review and approve it before generating an edition, he will be able to publish more frequently without lowering credibility.

## Business and reputation hypothesis

If each edition delivers original, well-supported insights, product owners and stakeholders will be more likely to read, share, respond, or engage with Rohit professionally.

## Key uncertainties

- How accurate will PDF text extraction be across different documents?
- What model and prompt combination best preserves citations?
- How much human review time remains after AI assistance?
- What is the acceptable cost per edition?
- Will a structured editor feel faster than direct document writing?
- How should the existing static site consume published data without being destabilised?
- How often will published editions require updates?

## Opportunity boundaries

The initial opportunity is not to build a fully autonomous research agent or broad web crawler. It is to make a high-integrity solo publication repeatable.

## Evidence needed before scaling

Before adding collaborators or automatic web research, validate:

- extraction accuracy;
- claim acceptance rate;
- citation correctness;
- time saved per edition;
- cost per processed source;
- number of manual corrections;
- publication quality compared with Edition 001.

---

<!-- SOURCE FILE: 04_USER_PERSONAS_JTBD.md -->

---
product: The Product Dossier
initiative: Multi-edition research publishing platform
owner: Rohit Singh
status: Draft for review
version: 0.1
last_updated: 2026-07-20
---

# Personas and Jobs to Be Done

## Persona 1 — Rohit, owner-researcher-publisher

### Profile

- Sole admin initially.
- Product thinker and researcher.
- Wants to produce world-class product investigations.
- May operate from a phone or limited hardware.
- Wants AI leverage without sacrificing control.
- Is not expected to edit databases or code for every edition.

### Primary job to be done

> When I have collected research about a product, help me convert it into a credible, evidence-linked edition so I can publish useful insights without manually rebuilding the website.

### Functional jobs

- Create and organise an edition workspace.
- Upload research files and paste text.
- Track source metadata.
- Extract claims and evidence.
- Inspect exact citations.
- Accept, reject, edit, and merge AI suggestions.
- Build findings and opportunities.
- Generate a structured draft.
- Preview the final edition.
- Publish and update safely.

### Emotional jobs

- Feel confident that published claims can withstand scrutiny.
- Avoid embarrassment from AI hallucinations.
- Feel that the work represents genuine thinking, not generic AI output.
- Maintain creative ownership and authorship.

### Social jobs

- Impress product owners and stakeholders.
- Be perceived as thoughtful, useful, and rigorous.
- Create work that is forwarded internally.
- Build professional credibility without direct self-promotion.

### Pains

- Manual formatting.
- Losing track of sources.
- Re-reading the same documents.
- Weak AI summaries.
- Citation errors.
- Technical publishing steps.
- Uncertainty about whether an insight is genuinely original.

### Desired gains

- Faster edition production.
- Clear source-to-claim traceability.
- Stronger counterarguments.
- Consistent editorial presentation.
- Safe private previews.
- Reusable research data.

## Persona 2 — Product owner or senior stakeholder

### Primary job to be done

> When I receive an unsolicited external analysis of my product, help me quickly determine whether it contains credible, useful, and non-obvious insights worth discussing.

### Needs

- A strong executive summary.
- Respectful and informed language.
- Clear differentiation between evidence and hypothesis.
- Direct source links.
- Realistic opportunities and experiments.
- Visible limitations.
- A concise path to deeper detail.

### Concerns

- Generic recommendations.
- Incorrect product understanding.
- Unfair allegations.
- Outdated information.
- AI-generated filler.
- Hidden job-seeking intent.

## Persona 3 — General product reader

### Primary job to be done

> Help me understand how a product works, where its strategic opportunities may be, and how the conclusions were reached.

### Needs

- Searchable editions.
- Readable narrative.
- Evidence detail on demand.
- Definitions and context.
- Mobile-friendly presentation.

## Persona 4 — Future editor or researcher

Not in MVP, but the architecture should not prevent this role.

### Future job to be done

> Help me contribute research and drafts while preserving editorial accountability and approval boundaries.

## Persona priority

1. Rohit as admin and researcher.
2. Product owners and stakeholders as the most important public audience.
3. General readers.
4. Future collaborators.

## Experience principles by persona

### Admin

Clarity, control, recoverability, traceability.

### Stakeholder reader

Speed to insight, credibility, relevance, restraint.

### General reader

Comprehension, exploration, transparency.

---

<!-- SOURCE FILE: 05_PRODUCT_PRINCIPLES.md -->

---
product: The Product Dossier
initiative: Multi-edition research publishing platform
owner: Rohit Singh
status: Draft for review
version: 0.1
last_updated: 2026-07-20
---

# Product and Editorial Principles

These principles are decision rules. When requirements conflict, choose the option that best preserves them.

## 1. Evidence before elegance

A beautiful claim without traceable support is a product failure.

## 2. AI proposes; the admin decides

AI can extract, classify, challenge, and draft. It cannot approve or publish.

## 3. Original sources remain immutable

Uploaded files and original extracted text must be retained. AI summaries never replace the source.

## 4. Every important claim should be reconstructable

A reader or editor should be able to move from conclusion to citation to source location.

## 5. Uncertainty is a feature

Confidence, limitations, alternative explanations, and rejected claims should remain visible.

## 6. The public site reads only published data

Drafts, private notes, AI runs, and scheduled content must never leak to public users.

## 7. No silent automation

The system must show what happened, which model was used, what changed, and what requires review.

## 8. Preserve the current working product

Do not modify or replace the current website until the new workflow works end to end and can be rolled back safely.

## 9. Build for one expert operator first

Optimise the MVP for Rohit. Do not burden the interface with premature team features.

## 10. Structured where integrity matters, flexible where storytelling matters

Evidence, source metadata, status, confidence, and citations should be structured. Narrative sections should allow editorial flexibility.

## 11. Automation must save review time, not create cleanup work

A feature is not successful merely because it generates output. It must reduce total time to an approved edition.

## 12. Product stakeholders are respected, not attacked

Use public evidence carefully. Frame severe concerns with appropriate uncertainty. Avoid sensational language.

## 13. Mobile is a primary environment

Admin workflows and public reading must remain usable on small Android screens.

## 14. Cost and model choice must be observable

Every AI run should record model, tokens, latency, cost, prompt version, and output status.

## 15. Reversibility over cleverness

Publishing, editing, AI processing, and migrations must support recovery and version restoration.

---

<!-- SOURCE FILE: 06_PRD.md -->

---
product: The Product Dossier
initiative: Multi-edition research publishing platform
owner: Rohit Singh
status: Draft for review
version: 0.1
last_updated: 2026-07-20
---

# Product Requirements Document

## 1. Product name

The Product Dossier — Research Publishing System

## 2. Product owner

Rohit Singh

## 3. Objective

Enable a solo admin to transform uploaded PDFs and pasted research text into a reviewed, evidence-linked product edition and publish it without editing static website code.

## 4. Background

The current site is a static publication containing Edition 001 on Delta Exchange. It validates the editorial concept but cannot efficiently support future editions. The new system must create a reusable research and publishing workflow while preserving the existing site until the workflow is stable.

## 5. MVP success statement

The MVP is successful when Rohit can produce and privately preview a complete Edition 002 from uploaded research, with approved evidence and exact citations, and publish it through an explicit admin action.

## 6. Primary user story

> As the owner and researcher, I want to upload research, receive structured AI-assisted analysis, review every candidate claim, and publish an edition so that I can create high-quality product dossiers repeatedly without modifying code.

## 7. MVP scope

### Edition management

- Create an edition workspace.
- Save product, company, industry, objective, audience, working thesis, and status.
- Use statuses: Researching, Draft, In Review, Ready, Published, Archived.
- Edit metadata.
- Duplicate an edition structure.
- Archive without deletion.

### Research source ingestion

- Upload text-based PDFs.
- Paste plain text.
- Add source metadata.
- Store original files.
- Extract text.
- Preserve page references where available.
- Show processing status and errors.
- Retry failed processing.

### AI-assisted analysis

- Generate a source summary.
- Extract candidate claims.
- Identify possible contradictions.
- Suggest limitations and alternative explanations.
- Suggest evidence categories and confidence.
- Suggest findings, opportunity areas, and questions needing internal data.
- Return validated structured output.
- Record model, prompt version, cost, and processing metadata.

### Human review

- Review every candidate item.
- Accept, edit, reject, or merge.
- Link claims to source passages.
- Change confidence and status.
- Mark an item as requiring stronger evidence.
- Add manual evidence without AI.
- Preserve rejected items and reasons.

### Edition composition

- Generate a draft from approved evidence only.
- Support standard sections:
  - cover;
  - executive snapshot;
  - working thesis;
  - findings;
  - contradictions;
  - opportunities;
  - flagship proposal;
  - experiments;
  - risks;
  - limitations;
  - evidence references;
  - author byline;
  - downloads.
- Edit narrative content manually.
- Reorder and hide sections.
- Insert evidence citations.

### Preview and publication

- Preview privately before publication.
- Validate required fields and citations.
- Publish only through an explicit confirmation.
- Public site reads published edition data.
- Preserve previous versions.
- Record publication timestamp and admin.

### Authentication and permissions

- Private admin login.
- No public registration.
- Only owner role active initially.
- Row Level Security protects drafts and internal records.

## 8. Out of MVP

- Automatic live-web research.
- Fully autonomous agents.
- Automatic publishing.
- Public comments.
- Multiple active editors.
- Complex workflow assignments.
- AI-generated images.
- Automatic PPTX, XLSX, and long PDF generation.
- Full redesign and world-class scroll animations.
- Continuous monitoring of every source.
- Native mobile application.

## 9. Core workflow

1. Admin signs in.
2. Admin creates an edition.
3. Admin uploads PDF or pastes text.
4. System stores source.
5. System extracts text and page references.
6. AI creates structured candidate records.
7. Admin reviews candidates.
8. Admin approves evidence.
9. Admin generates a draft.
10. Admin edits and validates.
11. Admin previews privately.
12. Admin publishes.
13. Public site displays only the published version.

## 10. Functional requirements

Detailed functional requirements are defined in `07_SCOPE_REQUIREMENTS.md`.

## 11. Non-functional requirements

- Mobile-responsive admin.
- No data loss when browser closes.
- Recoverable processing jobs.
- Secure secret handling.
- Auditability.
- Fast public pages.
- Accessible forms and dialogs.
- Exact source-location preservation.
- Graceful failure when AI provider is unavailable.

## 12. Dependencies

- Supabase project.
- Supabase Auth, Postgres, Storage, and RLS.
- OpenRouter API key stored server-side.
- PDF extraction service or library.
- Background job mechanism.
- Public-site data adapter or generated static output.

## 13. Risks

See `17_RISKS_MITIGATIONS.md`.

## 14. Metrics

See `15_METRICS_ANALYTICS.md`.

## 15. Release gate

No public-site migration or visual redesign begins until:

- one complete test edition is processed;
- citation accuracy meets the acceptance threshold;
- drafts remain private;
- publishing is reversible;
- the existing site has a rollback path.

---

<!-- SOURCE FILE: 07_SCOPE_REQUIREMENTS.md -->

---
product: The Product Dossier
initiative: Multi-edition research publishing platform
owner: Rohit Singh
status: Draft for review
version: 0.1
last_updated: 2026-07-20
---

# Scope and Requirements

## Requirement notation

- **P0** — mandatory for MVP.
- **P1** — important after core flow is stable.
- **P2** — future enhancement.

## Functional requirements

### Authentication

- **P0** Admin can sign in securely.
- **P0** Public registration is disabled.
- **P0** Unauthenticated users cannot access `/admin` data.
- **P0** Session expiry and sign-out work correctly.
- **P1** Magic-link or password reset flow.
- **P2** Additional editorial roles.

### Edition management

- **P0** Create, edit, archive, and view editions.
- **P0** Store product, company, industry, slug, objective, audience, and thesis.
- **P0** Track edition status.
- **P0** Save drafts without publication.
- **P1** Duplicate an edition template.
- **P1** Schedule publication.
- **P1** Compare and restore versions.

### Source management

- **P0** Upload PDF.
- **P0** Paste text.
- **P0** Store original content and metadata.
- **P0** Display file size and processing status.
- **P0** Delete or archive a source before publication.
- **P0** Preserve page numbers for extracted PDF text.
- **P1** Add URLs.
- **P1** Upload DOCX and spreadsheets.
- **P1** OCR scanned PDFs.
- **P2** Browser extension or email ingestion.

### Processing pipeline

- **P0** Queue extraction and AI processing.
- **P0** Show progress states: Uploaded, Extracting, Ready for AI, Analysing, Review Ready, Failed.
- **P0** Retry failed jobs without duplicate records.
- **P0** Store processing logs.
- **P0** Prevent the same source from being processed twice accidentally.
- **P1** Cancel processing.
- **P1** Reprocess with a different model.

### AI outputs

- **P0** Source summary.
- **P0** Candidate claims.
- **P0** Candidate limitations.
- **P0** Candidate counter-evidence or alternative explanation.
- **P0** Suggested category, confidence, and status.
- **P0** Suggested findings and opportunities.
- **P0** Structured JSON validation.
- **P0** No invented source URL or citation.
- **P1** Contradiction clustering across sources.
- **P1** Semantic research chat.
- **P1** Missing-evidence analysis.
- **P2** Live web research.

### Review workflow

- **P0** Accept candidate.
- **P0** Edit candidate before acceptance.
- **P0** Reject candidate with optional reason.
- **P0** Merge duplicates.
- **P0** Attach evidence to findings and opportunities.
- **P0** View exact source passage.
- **P0** Manually create evidence.
- **P1** Bulk review.
- **P1** Side-by-side source comparison.

### Edition editor

- **P0** Structured metadata editor.
- **P0** Rich-text narrative editor.
- **P0** Standard reusable section types.
- **P0** Reorder and hide sections.
- **P0** Insert evidence citations.
- **P0** Autosave.
- **P0** Manual save indicator.
- **P0** Restore unsaved draft after accidental refresh where practical.
- **P1** Drag-and-drop block builder.
- **P1** Multiple visual layouts.

### Validation

- **P0** Identify missing required metadata.
- **P0** Identify claims without evidence.
- **P0** Identify broken source links where applicable.
- **P0** Warn about unreviewed evidence.
- **P0** Warn about missing limitations.
- **P0** Allow publication only after explicit confirmation.
- **P1** AI-assisted consistency review.

### Preview and publishing

- **P0** Private preview.
- **P0** Public published view.
- **P0** Drafts never appear publicly.
- **P0** Record publication version and timestamp.
- **P0** Roll back to a previous published version.
- **P1** Secret share link with expiry.
- **P1** Scheduled publication.

## Non-functional requirements

### Security

- All protected tables use RLS.
- Service-role secrets never enter client code.
- Uploaded files are private until publication.
- File types and sizes are validated.
- Rich text is sanitised.

### Reliability

- Processing jobs are idempotent.
- Failed jobs can retry.
- Original uploads are not lost if AI processing fails.
- Publication is transactional where practical.

### Performance

- Public edition pages should load quickly on mobile networks.
- Admin can display long research packs without freezing.
- Large documents are processed asynchronously.

### Accessibility

- Keyboard navigation.
- Proper labels.
- Visible focus states.
- Accessible status messages.
- Touch-friendly mobile controls.

### Observability

- Record errors, model calls, cost, latency, and job state.
- Admin can distinguish provider failure from extraction failure.

## Explicit non-goals for first implementation

- Replacing the current public design.
- Adding advanced animation.
- Building a general-purpose CMS.
- Building a research tool for external customers.
- Supporting arbitrary team organisations.
- Automating stakeholder outreach.

---

<!-- SOURCE FILE: 08_USER_FLOWS.md -->

---
product: The Product Dossier
initiative: Multi-edition research publishing platform
owner: Rohit Singh
status: Draft for review
version: 0.1
last_updated: 2026-07-20
---

# User Flows

## Flow 1 — Create a new edition

1. Admin signs in.
2. Admin selects **New Edition**.
3. Admin enters product name, company, industry, research objective, target audience, and initial thesis.
4. System creates an edition in `Researching` state.
5. Admin lands in the edition workspace.

### Success condition

A persistent edition workspace exists and can accept sources.

## Flow 2 — Upload and process a PDF

1. Admin opens **Sources**.
2. Admin uploads a PDF.
3. System validates type and size.
4. System stores original file privately.
5. Admin completes or confirms source metadata.
6. System creates a processing job.
7. Text is extracted by page.
8. Extraction quality is assessed.
9. If usable, source becomes `Ready for AI`.
10. AI analysis runs in chunks.
11. Structured candidate records are validated.
12. Source becomes `Review Ready`.
13. Admin receives a visible status update.

### Failure paths

- Invalid file: reject with explanation.
- Extraction failure: retain file and offer retry or manual text paste.
- AI timeout: retain extraction and retry AI step only.
- Invalid structured output: retry with repair prompt or alternate model.

## Flow 3 — Paste research text

1. Admin selects **Paste Text**.
2. Admin enters source title and metadata.
3. Admin pastes text.
4. System stores original text.
5. System chunks and analyses it.
6. Candidate records become available for review.

## Flow 4 — Review candidate evidence

1. Admin opens **Review Queue**.
2. Admin sees a candidate claim with source passage and page reference.
3. Admin chooses one action:
   - Accept;
   - Edit and accept;
   - Reject;
   - Merge duplicate;
   - Needs stronger evidence.
4. Accepted item becomes an approved evidence record.
5. Rejected item remains in audit history.
6. Admin moves to the next candidate.

## Flow 5 — Build a finding

1. Admin opens **Findings**.
2. Admin creates or accepts a suggested finding.
3. Admin links approved evidence.
4. Admin adds interpretation, confidence, counterargument, and implication.
5. System warns if no evidence is linked.
6. Admin marks the finding approved.

## Flow 6 — Build an opportunity

1. Admin opens **Opportunities**.
2. Admin creates or accepts a suggested opportunity.
3. Admin connects supporting findings.
4. Admin defines target user, problem, proposed change, expected impact, experiment, risks, and unknowns.
5. Admin prioritises the opportunity.

## Flow 7 — Generate edition draft

1. Admin selects **Generate Draft**.
2. System confirms which approved records will be used.
3. AI receives only approved evidence and editorial instructions.
4. AI returns structured section drafts with citations.
5. System validates all citation references.
6. A new draft version is created.
7. Admin edits the draft manually.

## Flow 8 — Validate edition

1. Admin selects **Run Checks**.
2. System checks required metadata, citations, evidence status, links, section completeness, media, and disclaimer.
3. System returns errors and warnings.
4. Errors must be fixed.
5. Warnings can be acknowledged with a reason.

## Flow 9 — Private preview

1. Admin selects **Preview**.
2. System renders the edition using the public template but private draft data.
3. Admin tests mobile and desktop views.
4. Admin returns to edit or marks the edition ready.

## Flow 10 — Publish

1. Admin selects **Publish**.
2. System displays edition version and validation summary.
3. Admin explicitly confirms.
4. System saves immutable publication version.
5. Edition status changes to `Published`.
6. Public site begins serving the published version.
7. Audit event is recorded.

## Flow 11 — Update a published edition

1. Admin opens a published edition.
2. Admin creates a new draft version.
3. Existing public version remains live.
4. Admin edits, validates, and previews.
5. Admin publishes the update with a change note.
6. Previous version remains restorable.

## Flow 12 — Roll back

1. Admin opens version history.
2. Admin selects a previous published version.
3. System shows differences.
4. Admin confirms rollback.
5. Selected version becomes current public version.
6. Rollback event is recorded.

---

<!-- SOURCE FILE: 09_INFORMATION_ARCHITECTURE.md -->

---
product: The Product Dossier
initiative: Multi-edition research publishing platform
owner: Rohit Singh
status: Draft for review
version: 0.1
last_updated: 2026-07-20
---

# Information Architecture

## Principle

Separate the private research workspace from the public publication. The admin structure should follow the work of producing an edition; the public structure should follow the reader’s path to insight.

## Admin routes

### `/admin`

Dashboard:

- active editions;
- sources awaiting review;
- failed processing jobs;
- draft readiness;
- recent activity;
- AI cost summary.

### `/admin/editions`

- all editions;
- status filters;
- create edition;
- archived editions.

### `/admin/editions/[id]`

Edition workspace with tabs:

1. Overview
2. Sources
3. Review Queue
4. Evidence
5. Findings
6. Opportunities
7. Draft
8. Media and Downloads
9. Validation
10. Preview
11. Versions
12. Settings

### `/admin/sources/[id]`

- metadata;
- original file;
- extracted pages;
- processing log;
- AI runs;
- candidate records.

### `/admin/media`

Future shared media library.

### `/admin/settings`

- publication settings;
- author profile;
- AI model preferences;
- cost limits;
- default editorial rules.

## Public routes for future database-backed site

### `/`

Publication homepage.

### `/editions`

All published editions.

### `/editions/[slug]`

Main edition narrative.

### `/editions/[slug]/evidence`

Edition evidence library.

### `/evidence`

Global evidence explorer, future phase.

### `/methodology`

Research and editorial method.

### `/about`

Publication and Rohit Singh profile.

### `/contact`

Professional contact and corrections.

## Edition workspace hierarchy

```text
Edition
├── Metadata
├── Sources
│   ├── Original upload
│   ├── Extracted text
│   ├── Chunks
│   └── Processing runs
├── Candidate records
│   ├── Claims
│   ├── Contradictions
│   ├── Limitations
│   └── Opportunities
├── Approved research
│   ├── Evidence
│   ├── Findings
│   ├── Opportunities
│   └── Experiments
├── Editorial draft
│   ├── Sections
│   ├── Blocks
│   └── Citations
└── Publication
    ├── Validation
    ├── Preview
    ├── Versions
    └── Published snapshot
```

## Mobile admin navigation

Use a compact top bar and bottom navigation for the highest-frequency areas:

- Overview
- Sources
- Review
- Draft
- More

Avoid desktop-only sidebars that become unusable on a phone.

## Navigation states

Every major object should display:

- current status;
- last saved time;
- processing state;
- unresolved warnings;
- next recommended action.

---

<!-- SOURCE FILE: 10_CONTENT_EDITORIAL_MODEL.md -->

---
product: The Product Dossier
initiative: Multi-edition research publishing platform
owner: Rohit Singh
status: Draft for review
version: 0.1
last_updated: 2026-07-20
---

# Content and Editorial Model

## Editorial unit hierarchy

### Publication

The Product Dossier brand and global settings.

### Edition

A complete investigation of one product or company.

### Source

An original research input: PDF, pasted text, URL, screenshot, dataset, or note.

### Evidence item

A reviewed, structured claim grounded in one or more source passages.

### Finding

An editorial conclusion supported by approved evidence.

### Opportunity

A product proposal derived from findings and framed as a testable intervention.

### Experiment

A bounded test intended to reduce uncertainty before major investment.

### Edition section

A narrative area of the public edition.

### Citation

A relationship connecting a statement or section block to an evidence item and source location.

## Required edition metadata

- Edition number
- Title
- Slug
- Product name
- Company name
- Industry
- Product category
- Short summary
- Opening hook
- Working thesis
- Research objective
- Intended audience
- Author
- Status
- Version
- Publication date
- Last reviewed date
- Disclaimer
- Research limitations

## Default edition structure

1. Cover and opening hook
2. Product and market context
3. Working thesis
4. Executive snapshot
5. What surprised us
6. Key findings
7. Contradictions and trust gaps
8. Opportunity portfolio
9. Flagship proposal
10. Product experience or system flow
11. Experiments
12. Metrics and guardrails
13. Risks and counterarguments
14. Questions requiring internal data
15. Limitations
16. Evidence and downloads
17. Author byline and update history

The admin may reorder, hide, or add custom sections.

## Evidence status taxonomy

### Verified

The specific public claim is directly supported by a traceable source.

### Signal

Useful discovery evidence that requires further validation and does not establish prevalence.

### Hypothesis

A reasoned proposition that should be tested.

### Rejected

A claim deliberately excluded because evidence is insufficient, contradictory, or not comparable.

## Confidence taxonomy

### High

Direct and current support with few plausible alternative explanations.

### Medium

Useful support exists, but important gaps or alternatives remain.

### Low

Limited direct evidence; retained as a question or hypothesis.

## Required evidence fields

- Evidence ID
- Claim
- Summary
- Category
- Status
- Confidence
- Source title
- Source organisation
- Source type
- Source URL or file
- Page or passage reference
- Date published
- Date accessed
- Counter-evidence or limitation
- Alternative explanation
- Decision implication
- Related findings
- Related opportunities
- Reviewer status

## Citation rules

- AI cannot create a citation to an unknown evidence ID.
- Every generated citation must resolve to an approved evidence item.
- PDF citations should retain page number and extracted passage.
- If page numbering is ambiguous, the UI must show that ambiguity.
- A finding may cite multiple evidence items.
- Evidence items should show backlinks to all findings and sections using them.

## Editorial workflow states

### Source

Uploaded → Extracting → Ready for AI → Analysing → Review Ready → Reviewed → Archived

### Candidate item

Pending → Accepted → Edited and Accepted → Rejected → Merged → Needs Evidence

### Edition

Researching → Draft → In Review → Ready → Published → Archived

## Editorial quality checklist

Before publication:

- Does each major conclusion have direct evidence?
- Does the wording match the strength of evidence?
- Are user reviews treated as signals rather than prevalence estimates?
- Are contradictory sources represented fairly?
- Are internal-data gaps visible?
- Is the flagship proposal testable?
- Is the language respectful and useful to the product team?
- Is every important source current enough for the claim?
- Are rejected claims preserved?

---

<!-- SOURCE FILE: 11_AI_RESEARCH_BRAIN.md -->

---
product: The Product Dossier
initiative: Multi-edition research publishing platform
owner: Rohit Singh
status: Draft for review
version: 0.1
last_updated: 2026-07-20
---

# AI Research Brain Specification

## Purpose

The AI research brain accelerates document understanding and editorial preparation. It does not own research truth, make final judgments, or publish.

## Provider strategy

Use OpenRouter as the model gateway so the system can select different models for extraction, reasoning, drafting, and fallback without redesigning the application.

The OpenRouter key must remain server-side.

## AI responsibilities

### Allowed

- Summarise a source.
- Extract candidate claims.
- Classify source type and topic.
- Suggest confidence and evidence status.
- Detect possible contradictions.
- Suggest limitations and alternative explanations.
- Cluster related claims.
- Suggest findings and opportunities.
- Identify questions requiring internal data.
- Draft edition sections from approved evidence.
- Check consistency and unsupported language.

### Prohibited

- Creating a source that was not uploaded or retrieved.
- Fabricating a quotation or page number.
- Marking its own output approved.
- Publishing.
- Deleting original evidence.
- Converting a weak signal into a verified fact without review.
- Making legal, financial, or reputational allegations without explicit editorial controls.

## Research pipeline

```text
Original source
→ extraction
→ page-aware chunks
→ embeddings
→ source summary
→ candidate records
→ human review
→ approved evidence graph
→ draft generation
→ validation
→ human publication
```

## Retrieval-augmented generation

For research chat and draft generation:

1. Query only the current edition by default.
2. Retrieve relevant source chunks and approved evidence.
3. Include source IDs and locations in model context.
4. Require output citations to those IDs.
5. Reject or flag any citation that cannot be resolved.
6. Store the retrieval set with the AI run for auditability.

## Structured outputs

All machine-generated records should conform to versioned schemas.

Example candidate claim schema:

```json
{
  "claim": "string",
  "source_id": "uuid",
  "page": 12,
  "supporting_passage": "string",
  "category": "string",
  "suggested_status": "Verified|Signal|Hypothesis|Rejected",
  "suggested_confidence": "High|Medium|Low",
  "limitation": "string",
  "alternative_explanation": "string",
  "reasoning_note": "string"
}
```

## Prompt layers

### System rules

Stable publication principles, citation rules, and safety constraints.

### Task prompt

Specific instruction such as extracting claims or drafting findings.

### Edition context

Product, company, audience, research objective, and thesis.

### Retrieved evidence

Only source passages needed for the task.

### Output schema

Strict machine-readable contract.

## Human review interface requirements

For every AI suggestion, show:

- generated content;
- source passage;
- page number;
- model;
- prompt version;
- confidence suggestion;
- reason for classification;
- Accept, Edit, Reject, Merge, Needs Evidence actions.

## Model routing concept

Use task-based routing rather than one model for everything.

- Lower-cost model: basic classification and metadata extraction.
- Strong reasoning model: contradiction analysis and opportunity synthesis.
- Long-context or document-capable model: difficult PDFs.
- Fallback model: provider or schema failure.

Model names should be configurable, not hard-coded into editorial records.

## Cost controls

- Display estimated cost before large processing runs.
- Limit maximum chunks per run.
- Cache source-level summaries.
- Avoid reprocessing unchanged text.
- Track token use and cost by edition and source.
- Allow manual model override.
- Define a soft and hard budget per edition.

## Evaluation framework

Create a small gold-standard dataset from Edition 001.

Measure:

- citation accuracy;
- claim faithfulness;
- page-reference accuracy;
- duplicate rate;
- unsupported-claim rate;
- human acceptance rate;
- edit distance before approval;
- time saved;
- cost per accepted evidence item.

## Release threshold for AI extraction

Before relying on the system for a live edition:

- zero invented citations in the test set;
- at least 95% correct source linkage for accepted candidates;
- clear flagging of uncertain page references;
- all outputs pass schema validation;
- failures preserve original source and allow retry.

## Prompt-injection protection

Uploaded documents may contain instructions. Treat all source content as untrusted data, not commands. The model prompt must explicitly state that instructions inside documents are content to analyse and must not override system rules.

---

<!-- SOURCE FILE: 12_DATA_MODEL.md -->

---
product: The Product Dossier
initiative: Multi-edition research publishing platform
owner: Rohit Singh
status: Draft for review
version: 0.1
last_updated: 2026-07-20
---

# Proposed Data Model

## Design goals

- Preserve original research.
- Separate candidate AI output from approved editorial records.
- Separate drafts from published snapshots.
- Support citations and backlinks.
- Prepare for future roles without complicating the MVP.
- Enable Row Level Security.

## Core entities

### `profiles`

User profile linked to Supabase Auth.

Key fields:

- `id`
- `display_name`
- `email`
- `avatar_url`
- `bio`
- `linkedin_url`
- `created_at`

### `user_roles`

- `user_id`
- `role`: owner, admin, editor, researcher, viewer

Only owner is active in MVP.

### `editions`

Mutable working record.

- `id`
- `edition_number`
- `title`
- `slug`
- `product_name`
- `company_name`
- `industry`
- `product_category`
- `research_objective`
- `target_audience`
- `working_thesis`
- `status`
- `current_draft_version_id`
- `current_published_version_id`
- `created_by`
- `created_at`
- `updated_at`

### `edition_versions`

Immutable or append-oriented edition snapshots.

- `id`
- `edition_id`
- `version_number`
- `version_type`: draft, published, rollback
- `change_note`
- `created_by`
- `created_at`
- `published_at`

### `edition_sections`

- `id`
- `edition_version_id`
- `section_type`
- `title`
- `position`
- `is_visible`
- `include_in_toc`
- `layout_key`
- `content_json`

### `research_sources`

- `id`
- `edition_id`
- `source_type`
- `title`
- `organisation`
- `source_url`
- `storage_path`
- `original_text`
- `published_date`
- `accessed_date`
- `status`
- `file_hash`
- `created_by`
- `created_at`

### `source_pages`

- `id`
- `source_id`
- `page_number`
- `printed_page_label`
- `text`
- `extraction_quality`

### `source_chunks`

- `id`
- `source_id`
- `page_start`
- `page_end`
- `chunk_index`
- `text`
- `embedding`
- `token_count`

### `processing_jobs`

- `id`
- `edition_id`
- `source_id`
- `job_type`
- `status`
- `attempt_count`
- `started_at`
- `completed_at`
- `error_code`
- `error_message`

### `ai_runs`

- `id`
- `edition_id`
- `source_id`
- `task_type`
- `provider`
- `model`
- `prompt_version`
- `schema_version`
- `input_tokens`
- `output_tokens`
- `estimated_cost`
- `latency_ms`
- `status`
- `retrieval_context_json`
- `created_at`

### `candidate_items`

Stores unapproved machine suggestions.

- `id`
- `edition_id`
- `source_id`
- `ai_run_id`
- `candidate_type`: claim, limitation, contradiction, finding, opportunity, question
- `content_json`
- `review_status`
- `reviewed_by`
- `reviewed_at`
- `rejection_reason`

### `evidence_items`

Approved evidence.

- `id`
- `edition_id`
- `evidence_code`
- `category`
- `claim`
- `summary`
- `status`
- `confidence`
- `counter_evidence`
- `alternative_explanation`
- `decision_implication`
- `visibility`
- `reviewed_by`
- `reviewed_at`

### `evidence_sources`

Many-to-many evidence-to-source relationship.

- `evidence_id`
- `source_id`
- `page_start`
- `page_end`
- `supporting_passage`
- `support_type`: supports, contradicts, contextualises

### `findings`

- `id`
- `edition_id`
- `title`
- `summary`
- `interpretation`
- `confidence`
- `counterargument`
- `implication`
- `status`

### `finding_evidence`

- `finding_id`
- `evidence_id`
- `relationship_type`

### `opportunities`

- `id`
- `edition_id`
- `title`
- `problem`
- `target_user`
- `proposal`
- `expected_impact`
- `experiment`
- `risks`
- `unknowns`
- `priority_score`
- `status`

### `opportunity_findings`

- `opportunity_id`
- `finding_id`

### `citations`

- `id`
- `edition_section_id`
- `block_key`
- `evidence_id`
- `display_label`
- `position_json`

### `media_assets`

- `id`
- `edition_id`
- `storage_path`
- `media_type`
- `alt_text`
- `caption`
- `credit`
- `source_url`
- `visibility`

### `downloads`

- `id`
- `edition_id`
- `title`
- `file_type`
- `storage_path`
- `visibility`
- `version_label`

### `publication_events`

- `id`
- `edition_id`
- `edition_version_id`
- `event_type`
- `performed_by`
- `metadata_json`
- `created_at`

### `site_settings`

Global publication and author settings.

## Data separation rule

Public queries should access a published view or API that resolves only `current_published_version_id`. They should never query working edition sections directly.

## Deletion policy

Prefer archive or soft deletion for editions, sources, evidence, and AI runs. Original sources used in a published edition should not be permanently deleted without an explicit retention workflow.

---

<!-- SOURCE FILE: 13_TECHNICAL_ARCHITECTURE.md -->

---
product: The Product Dossier
initiative: Multi-edition research publishing platform
owner: Rohit Singh
status: Draft for review
version: 0.1
last_updated: 2026-07-20
---

# Technical Architecture

## Architecture objective

Add a safe research and publishing system without changing the current public site until the new pipeline has been validated.

## Proposed components

### Existing public site

- Current static HTML, CSS, and JavaScript.
- Remains unchanged during initial development.
- Continues serving Edition 001.

### Admin application

A new protected application or route group for:

- authentication;
- edition management;
- uploads;
- review queue;
- editorial drafting;
- preview;
- publication control.

### Supabase

Use for:

- Postgres database;
- Auth;
- private and public Storage buckets;
- Row Level Security;
- pgvector embeddings;
- server-side functions where suitable.

### OpenRouter

Use as a server-side model gateway for structured extraction, reasoning, and drafting.

### Document processing worker

Responsible for:

- PDF extraction;
- page mapping;
- chunking;
- embeddings;
- AI task execution;
- retries;
- progress updates.

Long-running processing should not depend on an open browser tab.

## Logical architecture

```text
Admin browser
   ↓ authenticated requests
Application API / server functions
   ├── Supabase Auth
   ├── Supabase Postgres
   ├── Supabase Storage
   ├── Job queue
   └── OpenRouter API
          ↓
Document processing worker
          ↓
Candidate research records
          ↓
Human review
          ↓
Approved publication data
          ↓
Public renderer
```

## Initial integration strategy

### Phase A — Isolated research backend

Build the admin and backend without changing public pages.

### Phase B — Private edition renderer

Render draft editions from database data on a private route.

### Phase C — Publication adapter

Choose one of two approaches after validation:

#### Option 1: Dynamic public renderer

Public pages read published Supabase data at request or build time.

Advantages:

- direct updates;
- easier versioning;
- no generated files.

Risks:

- larger migration;
- runtime dependency;
- must preserve existing design exactly.

#### Option 2: Static generation/export

Publishing generates static edition files or data assets consumed by the existing site.

Advantages:

- preserves static reliability;
- easier rollback;
- lower runtime dependency.

Risks:

- generation pipeline complexity;
- slower publish step;
- file consistency must be managed.

### Recommended first publication method

Use a private dynamic preview first. Delay the public integration decision until Edition 002 renders correctly and the current design can be reproduced without regressions.

## Processing states

```text
uploaded
→ validating
→ extracting
→ extracted
→ chunking
→ embedding
→ analysing
→ review_ready
→ reviewed
```

## Idempotency

- Hash each original file.
- Avoid duplicate uploads within the same edition unless explicitly allowed.
- Give every job an idempotency key.
- Upsert processing outputs by job and schema version.
- A retry must not duplicate candidate records.

## Environment strategy

- Local/development environment.
- Staging Supabase project or isolated schema.
- Production Supabase project.
- Separate OpenRouter keys or spending limits where possible.

## Secrets

Store securely:

- Supabase service role key;
- OpenRouter API key;
- any OCR or document-processing credentials.

Never place these in browser JavaScript or committed files.

## Observability

Capture:

- extraction errors;
- AI provider errors;
- schema validation failures;
- job retries;
- processing duration;
- token use and cost;
- publication actions.

## Backup and recovery

- Supabase backups enabled.
- Original uploads retained.
- Edition versions retained.
- Publication rollback supported.
- Existing static site remains deployable as fallback during migration.

---

<!-- SOURCE FILE: 14_SECURITY_PRIVACY.md -->

---
product: The Product Dossier
initiative: Multi-edition research publishing platform
owner: Rohit Singh
status: Draft for review
version: 0.1
last_updated: 2026-07-20
---

# Security and Privacy Requirements

## Security objective

Protect unpublished research, private uploads, API keys, admin access, and editorial integrity while exposing only approved published content.

## Authentication

- Use Supabase Auth.
- Disable public sign-up.
- Only allow explicitly approved admin accounts.
- Require verified email.
- Support secure session expiry and sign-out.
- Consider MFA before adding more users or sensitive research.

## Authorisation

Use Row Level Security on every protected table.

### Public access

Public users may read only:

- published editions;
- published edition versions;
- public evidence;
- public media;
- public downloads;
- public author information.

### Owner access

Owner may create, update, review, publish, archive, and restore all records.

### Future roles

Roles must be stored in database policies, not inferred from UI visibility or hard-coded email strings.

## Storage policy

Use separate logical buckets or access rules for:

- private research uploads;
- private draft media;
- published media;
- published downloads.

Files should remain private by default.

## Upload security

- Validate MIME type and extension.
- Enforce configurable size limits.
- Reject executable formats.
- Generate safe storage names.
- Scan or inspect uploads where practical.
- Never execute embedded PDF content.
- Treat document text as untrusted input.

## Prompt-injection security

Uploaded documents may contain malicious instructions. Models must be told:

- document instructions are content, not system commands;
- never reveal secrets;
- never make external calls unless the application explicitly permits them;
- never alter approval or publication status.

## Rich-text security

- Sanitize HTML.
- Block script tags and dangerous URLs.
- Validate external links.
- Escape source content in review interfaces.

## Secret management

- OpenRouter key only in server-side secret storage.
- Supabase service-role key only on trusted server or function environment.
- Use public anon key only with strict RLS.
- Do not commit `.env` files.
- Rotate keys if exposed.

## Audit logging

Record:

- sign-in events where available;
- role changes;
- source deletion or archival;
- evidence approval and rejection;
- publication and rollback;
- settings changes;
- AI task and model used.

## Privacy

Initial research is mainly public-source material, but private notes and unpublished analysis may be sensitive.

Requirements:

- Clearly distinguish public and private records.
- Do not send unnecessary personal data to AI providers.
- Allow deletion of unused private uploads.
- Document provider data-retention settings.
- Avoid storing passwords or secrets in research notes.

## Abuse protection

For future public forms:

- rate limiting;
- bot protection;
- validation;
- spam status;
- safe rendering of submissions.

## Security release gate

Before production:

- RLS tests pass for anonymous and authenticated roles.
- Draft URLs cannot be guessed publicly.
- service-role key is absent from client bundles.
- uploaded private files cannot be fetched anonymously.
- public queries cannot access candidate items, AI runs, or internal notes.

---

<!-- SOURCE FILE: 15_METRICS_ANALYTICS.md -->

---
product: The Product Dossier
initiative: Multi-edition research publishing platform
owner: Rohit Singh
status: Draft for review
version: 0.1
last_updated: 2026-07-20
---

# Success Metrics and Analytics Plan

## North-star metric

**Approved, citation-valid edition output per unit of researcher time.**

For the MVP, measure this operationally as:

> Time from source upload to a publication-ready edition, while maintaining citation and editorial quality thresholds.

## Primary success metrics

### 1. Time to publication-ready draft

Baseline: manual process represented by Edition 001.

Target after stabilisation: reduce total production time by at least 40% without reducing quality.

### 2. Citation accuracy

Percentage of approved citations that correctly resolve to the claimed source passage and location.

Target: at least 95%; no invented citations.

### 3. Candidate acceptance rate

Percentage of AI candidate items accepted with no or minor edits.

Target for a useful system: at least 50% after prompt tuning.

### 4. Human correction burden

Average number and severity of edits required per accepted item.

Goal: trend downward across editions.

### 5. Processing reliability

Percentage of uploaded sources reaching `Review Ready` without manual technical intervention.

Target: at least 90% for supported text-based PDFs and pasted text.

## Guardrail metrics

- Unsupported claim rate.
- Invented citation count.
- Duplicate candidate rate.
- Failed job rate.
- Cost per source.
- Cost per accepted evidence item.
- Average processing latency.
- Draft privacy incidents: target zero.
- Rollback failures: target zero.

## Editorial quality score

Create a pre-publication rubric scored by Rohit:

- Evidence strength
- Originality
- Stakeholder usefulness
- Counterargument quality
- Clarity
- Respectful framing
- Citation completeness
- Mobile readability

Edition 002 should meet or exceed Edition 001’s subjective quality benchmark.

## Admin funnel

```text
Edition created
→ source uploaded
→ source processed
→ candidates reviewed
→ evidence approved
→ draft generated
→ validation passed
→ previewed
→ published
```

Track drop-off and time at each stage.

## Product event taxonomy

### Admin events

- `edition_created`
- `source_uploaded`
- `source_processing_started`
- `source_processing_completed`
- `source_processing_failed`
- `candidate_accepted`
- `candidate_edited_accepted`
- `candidate_rejected`
- `evidence_created_manual`
- `finding_approved`
- `opportunity_approved`
- `draft_generated`
- `validation_run`
- `preview_opened`
- `edition_published`
- `edition_rolled_back`
- `ai_run_completed`

### AI metadata

Attach:

- edition ID;
- source ID;
- task type;
- model;
- prompt version;
- tokens;
- cost;
- latency;
- schema validity.

## Public metrics for later phases

- Unique edition views.
- Reading depth.
- Time engaged.
- Evidence opens.
- Source clicks.
- Download conversions.
- Shares.
- Contact responses from product stakeholders.
- Repeat visitors.

## Most important external outcome

Meaningful stakeholder engagement, such as:

- a product owner replies;
- an edition is shared internally;
- a correction or discussion is initiated;
- a stakeholder validates that an insight was useful or novel.

This should be tracked qualitatively, not reduced only to page views.

---

<!-- SOURCE FILE: 16_ROADMAP_RELEASES.md -->

---
product: The Product Dossier
initiative: Multi-edition research publishing platform
owner: Rohit Singh
status: Draft for review
version: 0.1
last_updated: 2026-07-20
---

# Roadmap and Release Plan

## Roadmap principle

Prove the research workflow before changing the public site.

## Phase 0 — Documentation and baseline

### Goal

Agree on product scope, architecture, editorial model, and quality standards.

### Deliverables

- PM documentation pack.
- Edition 001 baseline dataset.
- Manual process timing baseline.
- Gold-standard evidence examples.
- Decision on initial PDF extraction method.

### Exit criteria

- No critical unanswered architecture question.
- MVP scope approved.
- Edition 001 test cases selected.

## Phase 1 — Supabase foundation

### Goal

Create secure data and file foundations without public-site changes.

### Deliverables

- Supabase project.
- Auth and owner role.
- Core schema.
- RLS policies.
- Private source storage.
- Edition and source CRUD.

### Exit criteria

- Anonymous users cannot access private data.
- Admin can create edition and upload source.
- Original source persists safely.

## Phase 2 — Document ingestion

### Goal

Reliably extract and store page-aware text.

### Deliverables

- PDF upload validation.
- Text-paste flow.
- Extraction jobs.
- Page storage.
- Processing status UI.
- Retry and failure handling.

### Exit criteria

- Supported PDFs extract accurately.
- Browser can close without losing progress.
- Failed extraction does not lose original file.

## Phase 3 — AI candidate extraction

### Goal

Generate useful structured research candidates.

### Deliverables

- OpenRouter integration.
- Versioned prompts and schemas.
- Source summaries.
- Candidate claims and limitations.
- Model and cost logs.
- Review queue.

### Exit criteria

- No invented citations in Edition 001 test set.
- Candidate source linkage meets threshold.
- All outputs pass schema validation or fail visibly.

## Phase 4 — Editorial workspace

### Goal

Turn reviewed evidence into findings and opportunities.

### Deliverables

- Evidence manager.
- Findings editor.
- Opportunity editor.
- Citation links.
- Manual record creation.
- Rejected-item audit.

### Exit criteria

- Rohit can review a complete research pack.
- Findings cannot be marked complete without evidence or an explicit exception.

## Phase 5 — Draft, validation, and private preview

### Goal

Produce a complete Edition 002 candidate without public changes.

### Deliverables

- Draft generation from approved evidence.
- Section editor.
- Validation checklist.
- Private preview renderer.
- Version history.

### Exit criteria

- Edition 002 can be previewed on mobile and desktop.
- All citations resolve.
- Quality score meets Edition 001 baseline.

## Phase 6 — Controlled publication integration

### Goal

Publish a database-backed or generated edition without breaking Edition 001.

### Deliverables

- Selected public integration approach.
- Publish action.
- Rollback.
- route and link testing;
- production deployment.

### Exit criteria

- Edition 001 remains correct.
- Edition 002 publishes through admin.
- Rollback is verified.

## Phase 7 — Enhancements

After the core system proves value:

- URL ingestion.
- OCR for scanned PDFs.
- semantic research chat;
- contradiction maps;
- secret stakeholder preview links;
- newsletter and analytics;
- automated report assets;
- public redesign and advanced scroll animations.

## Release strategy

- Develop on a separate branch or isolated application.
- Use staging data.
- Pin stable checkpoints.
- Release one vertical slice at a time.
- Keep current static deployment available as fallback.

## Suggested first vertical slice

Create Edition → upload one PDF → extract pages → display source text.

Do not integrate AI until this slice is reliable.

---

<!-- SOURCE FILE: 17_RISKS_MITIGATIONS.md -->

---
product: The Product Dossier
initiative: Multi-edition research publishing platform
owner: Rohit Singh
status: Draft for review
version: 0.1
last_updated: 2026-07-20
---

# Risk Register and Mitigations

| ID | Risk | Likelihood | Impact | Mitigation | Owner |
|---|---|---:|---:|---|---|
| R-01 | AI invents citations | Medium | Critical | Strict source IDs, schema validation, citation resolver, human approval | Product/Engineering |
| R-02 | AI overstates weak evidence | High | High | Status and confidence fields, editorial review, prompt rules, validation warnings | Rohit |
| R-03 | PDF extraction loses page mapping | Medium | High | Page-aware parser, quality score, manual fallback, visible uncertainty | Engineering |
| R-04 | Scanned documents fail | High for scans | Medium | Mark unsupported in MVP, add OCR later, allow pasted text | Product |
| R-05 | Draft data becomes public | Low | Critical | RLS, published views, anonymous permission tests, private storage | Engineering |
| R-06 | Existing website breaks during migration | Medium | High | No initial changes, isolated branch/app, staged integration, rollback | Engineering |
| R-07 | AI costs become unpredictable | Medium | Medium | Task routing, budgets, caching, token logs, model controls | Product |
| R-08 | Processing times out | Medium | Medium | Background jobs, chunking, retries, idempotency | Engineering |
| R-09 | Duplicate evidence overwhelms review | High | Medium | Similarity detection, clustering, merge tools | Product/AI |
| R-10 | Admin UI is difficult on phone | Medium | High | Mobile-first testing, simple review actions, avoid dense desktop tables | Design |
| R-11 | Research sounds generic or AI-written | Medium | High | Human rewrite, originality rubric, stakeholder usefulness check | Rohit |
| R-12 | Public claims create reputational or legal issues | Low-Medium | High | Careful wording, source links, limitations, corrections policy, no unsupported allegations | Rohit |
| R-13 | Source changes after publication | High over time | Medium | Last-reviewed date, update triggers, version history, correction notes | Product |
| R-14 | Vendor lock-in | Medium | Medium | OpenRouter abstraction, portable schemas, stored original data | Engineering |
| R-15 | OpenRouter or model outage | Medium | Medium | Retry, fallback models, manual workflow remains usable | Engineering |
| R-16 | Supabase configuration error | Medium | High | migrations, policy tests, separate environments, backups | Engineering |
| R-17 | Too much scope delays Edition 002 | High | High | Strict MVP, postpone animations, collaboration, web crawling, asset generation | Product |
| R-18 | AI output saves no time | Medium | High | Measure total review time, acceptance rate, and correction burden | Product |
| R-19 | Poor source rights or attribution | Medium | Medium | Store credit and usage notes, publish links rather than copied content | Editorial |
| R-20 | Source contains prompt injection | Medium | High | Treat document as untrusted data, isolate instructions, no tool autonomy | Engineering |

## Top five risks to resolve before public integration

1. Citation accuracy.
2. Draft privacy.
3. Extraction quality.
4. Rollback reliability.
5. Total researcher time saved.

## Stop conditions

Pause expansion if:

- invented citations cannot be eliminated;
- review time is greater than manual research time;
- draft data leaks publicly;
- cost per edition is unsustainable;
- the generated edition is materially weaker than Edition 001.

---

<!-- SOURCE FILE: 18_ACCEPTANCE_CRITERIA_QA.md -->

---
product: The Product Dossier
initiative: Multi-edition research publishing platform
owner: Rohit Singh
status: Draft for review
version: 0.1
last_updated: 2026-07-20
---

# Acceptance Criteria and QA Plan

## Definition of done for MVP

The MVP is done only when Rohit can complete the full workflow for a test Edition 002 and the public site remains unaffected until deliberate publication.

## Authentication acceptance criteria

- Owner can sign in and sign out.
- Anonymous user is redirected from admin routes.
- Anonymous database requests cannot read private editions, sources, candidates, AI runs, or draft versions.
- Public registration is unavailable.

## Edition acceptance criteria

- Admin can create an edition with required metadata.
- Edition persists after refresh and new session.
- Edition status can change only through allowed transitions.
- Archived edition is hidden from active workspace but recoverable.

## Source-upload acceptance criteria

- Valid PDF uploads successfully.
- Invalid file type is rejected with a useful message.
- File-size limit is enforced.
- Original file remains downloadable by admin after processing failure.
- Duplicate upload is detected using file hash.
- Pasted text creates a source record.

## Extraction acceptance criteria

- Extracted text is displayed by page.
- Page references match a sample of manually checked PDF pages.
- Empty or image-only pages are marked clearly.
- Failed extraction can be retried.
- Retrying does not duplicate pages or chunks.

## AI-analysis acceptance criteria

- Structured output passes schema validation.
- Candidate claim includes source ID and supporting passage.
- Candidate with unresolved source reference is flagged and cannot be accepted as verified.
- Model, prompt version, tokens, cost, and status are logged.
- A provider failure does not delete source data.
- Document instructions do not override system constraints.

## Review acceptance criteria

- Admin can accept, edit and accept, reject, merge, and mark needs evidence.
- Accepted item becomes an evidence record.
- Rejected item remains in audit history.
- Evidence displays exact source passage.
- Manual evidence creation works without AI.

## Draft acceptance criteria

- Draft generation uses only approved evidence unless admin explicitly includes a hypothesis.
- Every generated citation resolves to an evidence record.
- Draft sections can be edited, reordered, hidden, and saved.
- Autosave status is visible.
- Refresh does not lose the latest saved version.

## Validation acceptance criteria

The system detects:

- missing title or product metadata;
- uncited major findings;
- unresolved citations;
- unreviewed evidence referenced in the draft;
- missing disclaimer;
- failed download references;
- missing source details.

## Preview acceptance criteria

- Draft preview is inaccessible anonymously.
- Preview matches public layout closely enough for editorial review.
- Preview works on small Android mobile, tablet, and desktop.
- Evidence citations open correctly.

## Publishing acceptance criteria

- Publish requires explicit confirmation.
- A published immutable version is created.
- Public users see only the selected published version.
- Draft edits after publication do not alter the public version.
- Previous published version can be restored.
- Publication and rollback are logged.

## Quality acceptance criteria

For the Edition 001 evaluation set:

- zero invented citations;
- at least 95% correct source linkage among approved candidates;
- all uncertain page references are visibly marked;
- no unsupported claim is automatically labelled Verified;
- human reviewer can trace every accepted evidence item to source text.

## Regression criteria

- Existing static homepage loads.
- Existing Edition 001 page loads.
- Existing evidence page works.
- Existing downloads remain accessible.
- Existing mobile navigation remains functional.

## Test data

Use a controlled pack containing:

- one normal text PDF;
- one PDF with complex formatting;
- one image-only or low-quality PDF;
- one pasted text source;
- one duplicate source;
- one source containing contradictory language;
- one source containing prompt-like instructions.

---

<!-- SOURCE FILE: 19_BACKLOG.md -->

---
product: The Product Dossier
initiative: Multi-edition research publishing platform
owner: Rohit Singh
status: Draft for review
version: 0.1
last_updated: 2026-07-20
---

# Prioritised Product Backlog

## Epic 1 — Secure admin foundation

### P0

- As the owner, I can sign in to a private admin area.
- As the owner, I can create an edition.
- As the system, I enforce RLS on private records.
- As the owner, I can edit publication and author settings.

## Epic 2 — Source ingestion

### P0

- Upload PDF.
- Paste text.
- Store source metadata.
- Preserve original file.
- Detect duplicate source.
- Display processing state.

### P1

- URL ingestion.
- DOCX upload.
- Spreadsheet upload.
- OCR.
- Screenshot ingestion.

## Epic 3 — Processing jobs

### P0

- Extract text by page.
- Chunk text.
- Queue AI tasks.
- Retry failed job.
- Avoid duplicate outputs.
- Log errors and timing.

### P1

- Cancel job.
- Reprocess selected pages.
- Model override.
- Batch source processing.

## Epic 4 — AI extraction

### P0

- Source summary.
- Candidate claim extraction.
- Suggested confidence and status.
- Limitation and alternative explanation.
- Structured schema validation.
- Cost and model logging.

### P1

- Cross-source contradiction detection.
- Semantic research chat.
- Missing evidence suggestions.
- Duplicate clustering.

## Epic 5 — Human review

### P0

- Accept.
- Edit and accept.
- Reject.
- Merge.
- Needs evidence.
- View source passage.
- Manual evidence creation.

### P1

- Keyboard review shortcuts.
- Bulk review.
- Side-by-side source comparison.

## Epic 6 — Findings and opportunities

### P0

- Create finding.
- Link evidence.
- Add counterargument.
- Create opportunity.
- Link finding.
- Define experiment and risk.

### P1

- Opportunity scoring.
- Visual opportunity map.
- AI challenge mode.

## Epic 7 — Edition composition

### P0

- Generate draft from approved evidence.
- Edit standard sections.
- Add citation.
- Reorder sections.
- Hide section.
- Autosave.

### P1

- Rich block editor.
- Reusable section templates.
- Table and diagram blocks.
- Multiple visual layouts.

## Epic 8 — Validation and preview

### P0

- Citation validation.
- Required metadata checks.
- Private preview.
- Mobile preview.
- Publication checklist.

### P1

- Secret stakeholder preview link.
- AI consistency checker.
- Broken-link checker.

## Epic 9 — Publishing and versions

### P0

- Explicit publish.
- Immutable published version.
- Rollback.
- Audit log.

### P1

- Schedule publication.
- Public change log.
- Corrections workflow.

## Epic 10 — Public publication expansion

### P1

- Multi-edition index.
- Search.
- Filters.
- Author profile.
- Related editions.

### P2

- Newsletter.
- Global evidence explorer.
- Product and topic pages.
- Advanced analytics.
- World-class scroll animation.
- Automated PDF, PPTX, and XLSX outputs.
- Contributor accounts.

---

<!-- SOURCE FILE: 20_DECISION_LOG.md -->

---
product: The Product Dossier
initiative: Multi-edition research publishing platform
owner: Rohit Singh
status: Draft for review
version: 0.1
last_updated: 2026-07-20
---

# Product Decision Log

## D-001 — Preserve the current website first

**Decision:** Make no initial changes to the working static public site.

**Rationale:** The current site is functional and represents the quality baseline. The research workflow can be developed separately.

**Consequence:** Public redesign and animation work are postponed.

## D-002 — Supabase as system of record

**Decision:** Use Supabase for database, storage, authentication, and row-level security.

**Rationale:** It offers a practical integrated backend for a solo operator and supports future scaling.

**Consequence:** Schema design and RLS become critical launch dependencies.

## D-003 — OpenRouter as model gateway

**Decision:** Use OpenRouter rather than hard-coding one model provider.

**Rationale:** Different tasks may benefit from different models, and provider flexibility reduces lock-in.

**Consequence:** Model routing, cost logging, and fallback behaviour must be designed.

## D-004 — Code plus AI, not code versus AI

**Decision:** Deterministic code controls ingestion, validation, approval, and publication. AI assists analysis and drafting.

**Rationale:** This balances speed with editorial credibility.

**Consequence:** More workflow design is required than a simple AI chat interface.

## D-005 — Human approval is mandatory

**Decision:** No AI output can publish automatically.

**Rationale:** The publication’s reputation depends on source accuracy and judgment.

**Consequence:** The admin review queue is a P0 feature.

## D-006 — PDF and pasted text are initial inputs

**Decision:** Focus the MVP on text-based PDFs and pasted text.

**Rationale:** These cover the core use case while controlling scope.

**Consequence:** URL ingestion, OCR, DOCX, spreadsheets, and screenshots are postponed.

## D-007 — Research and publication data remain separate

**Decision:** Candidate AI records, approved evidence, and published versions use separate data layers.

**Rationale:** An AI or draft error must not alter public content.

**Consequence:** The database model is more structured but safer.

## D-008 — One active admin initially

**Decision:** Optimise the experience for Rohit only.

**Rationale:** Multi-user workflow is premature before traffic and publishing volume increase.

**Consequence:** Roles are prepared in schema but not exposed in the MVP UI.

## D-009 — Product Dossier remains the primary brand

**Decision:** The publication brand leads; Rohit Singh is credited with a byline and small profile image.

**Rationale:** The goal is a credible publication, not a personal portfolio.

**Consequence:** Author settings must be editable, but visual prominence remains restrained.

## D-010 — Goal is stakeholder usefulness

**Decision:** Optimise edition quality for product owners and stakeholders.

**Rationale:** The desired outcome is useful, non-obvious insight that earns attention.

**Consequence:** Metrics include stakeholder responses and internal forwarding, not only traffic.

## D-011 — Exact source traceability is P0

**Decision:** Preserve page-level or passage-level references.

**Rationale:** Evidence-first positioning is not credible without reconstructable claims.

**Consequence:** PDF extraction quality and citation validation are release gates.

## D-012 — Advanced animations come after workflow validation

**Decision:** World-class scroll animations remain a later phase.

**Rationale:** The current bottleneck is edition production, not visual capability.

**Consequence:** No animation work should begin in the first implementation slices.

---

<!-- SOURCE FILE: 21_ASSUMPTIONS_OPEN_QUESTIONS.md -->

---
product: The Product Dossier
initiative: Multi-edition research publishing platform
owner: Rohit Singh
status: Draft for review
version: 0.1
last_updated: 2026-07-20
---

# Assumptions and Open Questions

## Working assumptions

1. Rohit is the only active admin for the first release.
2. The current static site remains live during development.
3. Edition 001 is the quality and content-model reference.
4. Most initial PDFs contain selectable text.
5. Exact page citations are required.
6. AI output requires review.
7. The first complete test will be an unpublished Edition 002.
8. OpenRouter and Supabase costs must remain visible and controllable.
9. Mobile admin use is important.
10. Public web research is not required for MVP.
11. Published editions need version history and rollback.
12. The Product Dossier remains the brand, with Rohit credited.

## Product questions to validate during implementation

### Research volume

- How many sources are expected in a normal edition?
- What is the maximum total file size per edition?
- What is the longest expected PDF?

### Document formats

- How often will PDFs be scanned rather than text-based?
- Are screenshots a frequent source type?
- Will spreadsheets contain important evidence?

### Citation experience

- Is PDF page number sufficient, or is paragraph-level highlighting required?
- Should public readers see the supporting passage directly?
- How should sources with no stable page number be cited?

### AI behaviour

- Which tasks require the strongest model?
- What is the acceptable budget per edition?
- Should model selection be automatic or manually controlled?
- Should AI be allowed to analyse all private notes?

### Editorial workflow

- Is a structured section editor sufficient, or is a full Notion-like block editor required immediately?
- Should rejected AI items be visible forever or archived after a period?
- What fields are mandatory for a finding to be publication-ready?

### Publication integration

- Should public pages eventually read Supabase dynamically or be generated statically?
- Does the current hosting setup support server-side routes?
- Must old `edition.html` and `evidence.html` URLs remain permanently valid?

### Private sharing

- Is an expiring secret preview link required for Edition 002?
- Should product stakeholders be able to leave private feedback on a preview?

### Update operations

- How often should published sources be re-reviewed?
- Should the system notify Rohit when an edition becomes stale?

## Decisions that can wait

- Multi-editor workflow.
- Newsletter provider.
- Public comments.
- Advanced analytics vendor.
- AI-generated visual assets.
- Automated report generation.
- Public design overhaul.
- Scroll-animation library.

## Recommended defaults if unanswered

- Support up to 20 PDFs and 250 MB total per edition initially.
- Text PDFs only in MVP; mark OCR as P1.
- Preserve page and exact extracted passage.
- Use automatic low-cost model for extraction and manual strong-model option for synthesis.
- Use a structured editor with flexible custom sections.
- Use private authenticated preview first; secret links in P1.
- Choose public rendering architecture only after the private preview reproduces Edition 001 quality.

---

<!-- SOURCE FILE: 22_RESEARCH_OPERATIONS.md -->

---
product: The Product Dossier
initiative: Multi-edition research publishing platform
owner: Rohit Singh
status: Draft for review
version: 0.1
last_updated: 2026-07-20
---

# Research Operations Playbook

## Purpose

Define the repeatable operating process for producing each Product Dossier edition.

## Stage 1 — Frame the investigation

Before collecting sources, define:

- product and company;
- intended stakeholder audience;
- decision or strategic question;
- scope boundaries;
- known constraints;
- initial thesis;
- disconfirming questions;
- what internal data would be unavailable.

### Output

Edition workspace in `Researching` state.

## Stage 2 — Build the source map

Collect source categories deliberately:

- official product pages;
- help documentation;
- legal terms;
- regulatory material;
- app-store listings;
- observed product journeys;
- pricing and fee pages;
- competitor material;
- user reviews;
- public interviews;
- credible journalism;
- datasets and research papers.

### Rule

User-generated evidence identifies possible problems; it does not establish prevalence.

## Stage 3 — Ingest and verify sources

For every source:

- save original file or URL;
- record title and organisation;
- record publication and access dates;
- classify source type;
- inspect extraction quality;
- confirm page mapping;
- note geographic or entity limitations.

## Stage 4 — AI-assisted extraction

Run source-level tasks:

- summary;
- claims;
- limitations;
- contradictions;
- product implications;
- unanswered questions.

Do not accept output in bulk without source inspection.

## Stage 5 — Evidence review

For each candidate:

1. Read the supporting passage.
2. Confirm the claim wording.
3. Confirm source location.
4. Set status and confidence.
5. Add limitation or alternative explanation.
6. Accept, edit, reject, merge, or request stronger evidence.

## Stage 6 — Synthesis

Group approved evidence into:

- product-system observations;
- user trust or usability signals;
- strategic contradictions;
- findings;
- opportunities;
- questions requiring internal data.

## Stage 7 — Attack the thesis

Before writing recommendations:

- search for contradictory evidence;
- write at least one alternative explanation per major finding;
- identify what would falsify the conclusion;
- record missing internal metrics;
- reject claims that cannot be defended.

## Stage 8 — Opportunity design

Each opportunity should include:

- target user;
- observed problem;
- supporting findings;
- proposed intervention;
- expected behaviour change;
- smallest test;
- primary metric;
- guardrail metric;
- implementation risks;
- reasons the company may already have rejected it.

## Stage 9 — Draft edition

Generate a first draft only from approved records.

Edit for:

- stakeholder relevance;
- originality;
- clarity;
- restraint;
- evidence wording;
- narrative flow;
- realistic experiments.

## Stage 10 — Editorial review

Run the publication checklist:

- all major claims cited;
- sources current enough;
- confidence language correct;
- limitations visible;
- no internal-data guesses;
- no generic AI phrasing;
- no unsupported market-leadership claims;
- product team treated respectfully.

## Stage 11 — Preview and stakeholder test

Review on mobile and desktop. Optionally share privately with a trusted reader before public publication.

## Stage 12 — Publish and maintain

- publish explicit version;
- record change note;
- monitor corrections;
- update last-reviewed date;
- create new version for substantive changes;
- preserve old version and rejected claims.

## Edition retrospective

After publication, record:

- total time;
- source count;
- AI cost;
- candidate acceptance rate;
- citation errors caught;
- strongest insight;
- stakeholder response;
- process improvement for next edition.

---

<!-- SOURCE FILE: 23_GLOSSARY.md -->

---
product: The Product Dossier
initiative: Multi-edition research publishing platform
owner: Rohit Singh
status: Draft for review
version: 0.1
last_updated: 2026-07-20
---

# Glossary

## Admin

An authenticated user allowed to manage research and publication. Initially Rohit only.

## AI run

A recorded model request with task, prompt version, model, inputs, outputs, tokens, cost, and status.

## Approved evidence

A candidate research item reviewed and accepted by the admin.

## Candidate item

An unapproved machine-generated suggestion such as a claim, limitation, finding, or opportunity.

## Citation

A link from a narrative statement or section to an approved evidence item and source location.

## Confidence

The assessed strength of evidence and reasoning: High, Medium, or Low.

## Dossier / Edition

A complete published investigation of a product or company.

## Evidence item

A structured and reviewed claim with source, limitation, confidence, and implication.

## Finding

An editorial conclusion derived from one or more evidence items.

## Hypothesis

A reasoned proposition that requires testing and is not presented as proven fact.

## Opportunity

A proposed product intervention derived from findings and framed for validation.

## Published snapshot

An immutable version of an edition visible to public users.

## RAG

Retrieval-augmented generation: retrieving relevant source passages before asking a model to answer or draft.

## Rejected claim

A statement deliberately not published as fact because support is insufficient or misleading.

## RLS

Row Level Security, database policies controlling which records each user can access.

## Signal

A useful piece of discovery evidence that does not establish prevalence or certainty.

## Source

Original research material such as a PDF, text, URL, screenshot, or dataset.

## Source chunk

A smaller passage derived from a source for retrieval and AI processing.

## Structured output

Model output constrained to a defined machine-readable schema.

## Verified

A specific public claim directly supported by traceable evidence. It does not mean every interpretation is proven.

## Version

A saved state of an edition. Draft and published versions are distinct.

## Working thesis

The current best explanation or strategic argument guiding the investigation, subject to revision.

---

<!-- SOURCE FILE: 24_AGENT_HANDOFF.md -->

---
product: The Product Dossier
initiative: Multi-edition research publishing platform
owner: Rohit Singh
status: Draft for review
version: 0.1
last_updated: 2026-07-20
---

# Developer and AI Agent Handoff

## Read this before changing the repository

The current Product Dossier website is working. Do not redesign, migrate, or refactor it as part of the initial backend work.

## Product objective

Build a separate, secure research-to-publication workflow that lets Rohit upload PDFs or paste text, review AI-assisted evidence, generate a draft, and deliberately publish future editions.

## Non-negotiable constraints

1. Do not modify existing public HTML, CSS, JavaScript, data files, or downloads in the first implementation slice.
2. Do not expose any OpenRouter or Supabase service-role secret to client code.
3. Do not allow AI output to publish automatically.
4. Do not allow public users to query draft or research tables.
5. Do not delete original uploaded sources after processing.
6. Do not claim a feature works until it has been tested.
7. Do not introduce advanced animations yet.
8. Optimise the admin for mobile as well as desktop.

## First implementation slice

Build only:

- Supabase schema for profiles, roles, editions, research sources, source pages, and processing jobs;
- secure owner authentication;
- edition creation;
- PDF upload to private storage;
- source metadata form;
- page-aware text extraction;
- processing-status display;
- retry handling.

Do not integrate AI until this slice is reliable.

## Required engineering practices

- Use migrations for database changes.
- Enable RLS before production data is added.
- Add policy tests for anonymous and owner access.
- Use idempotency keys for processing jobs.
- Hash uploaded files to detect duplicates.
- Store extraction errors without deleting source data.
- Add clear empty, loading, success, and failure states.
- Keep types strict.
- Document environment variables in an example file without values.

## Completion report for every implementation slice

Report:

- files changed;
- schema changes;
- user-visible behaviour;
- security policies;
- tests performed;
- failures or limitations;
- screenshots or verification results where available;
- exact next recommended slice.

## Do not make hidden product decisions

When a decision affects editorial integrity, public behaviour, data retention, model cost, or migration strategy, record it in `20_DECISION_LOG.md`.

## Source of truth order

1. Approved product-management documents in this folder.
2. Existing Edition 001 behaviour and content.
3. Explicit instructions from Rohit.
4. Implementation convenience.

Implementation convenience must not override product principles.

---

