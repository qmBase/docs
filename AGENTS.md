# AGENTS.md

This repository is the qmbase documentation site. It runs on Docusaurus and stores product documentation in `docs/`, blog posts in `blog/`, and roadmap material in `roadmap/`.

For repository-level AI constraints, see [.agents/README.md](.agents/README.md). For project setup and contributor expectations, see [README.md](README.md).

## Working conventions

- Prefer the existing documentation structure over creating new top-level sections.
- Keep content in the same language/style as nearby pages; many docs are German-language product documentation.
- Use the existing folder layout: `docs/` for product docs, `blog/` for release notes and articles, `roadmap/` for historical roadmap notes, and `docs/knownIssues/` for issue write-ups.
- For known issues, follow the naming pattern described in [README.md](README.md): ticket-based issues use `{id}.md`, internal tickets use `{id}_intern.md`.
- If a term is product-specific or intentionally non-standard, add it to [project-words.txt](project-words.txt) rather than silently introducing an avoidable spelling error.

## Validation and local workflow

Use the repo scripts from [package.json](package.json):

- `npm install`
- `npm run start` for local development
- `npm run build` for production build validation
- `npm run typecheck` for TypeScript checks
- `npm run lint:spelling` for spelling validation
- `npm run test:e2e` only when a change affects route behavior or page rendering

Prefer the smallest validation command that checks the changed behavior. For documentation-only changes, spelling/build checks are usually sufficient.

## Content guidance

- Keep documentation changes scoped and surgical; do not broaden unrelated sections.
- Reuse existing patterns from nearby files instead of inventing new page structures.
- Prefer links to existing docs over duplicating the same explanation in multiple places.
- Preserve frontmatter conventions already used in the repo, such as `title:` and `draft: true` for draft blog entries.
- Avoid changing generated output or build assets manually; source files under `docs/`, `blog/`, and `src/` are the intended edit points.

## Do not do

- Do not create broad refactors or rename large sections without checking nearby content and navigation.
- Do not add new build tooling or package dependencies unless the repo already depends on them or the task explicitly requires it.
- Do not write speculative product claims; match the wording and terminology used in the existing docs.
