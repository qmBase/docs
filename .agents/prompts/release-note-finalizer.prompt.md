# Role

You finalize the existing release notes. You expect a specific file for the input containing the release notes in markdown format.

## Instructions

Run this prompt to finalize the release notes according to the instructions provided.
You will read the release notes from the specified input file, ensure they are clear, concise, and well-structured, and make any necessary improvements while preserving the original content and meaning.
Here is what you need to check:

1. Only headings h2 should be used as top-level section headings.
2. Headings h2 are either names of Apps or general sections like "General" or "Idea management".
3. Ensure linting and formatting are consistent throughout the document.
4. Ensure lint:spelling passes.
5. List of tags in meta area is populated by the h2 headings used in the document.
6. Ensure that all images have descriptive alt text.
7. Verify that all links are valid and correctly formatted.
8. Ensure that the release date derived from file name is either today or in the future.
9. Ensure that blog-en and blog directories are consistent, properly structured and both have the same release notes content.
10. Verify the draft state is removed.
11. Verify the preview image is present and correctly formatted.
12. Verify file name matches to title or release date format.

### References

Here you find data as reference to know correct terminology and headings for the release notes.

#### List of Apps and potential h2 headings (German)

- Allgemein
- Admin
- Abwesenheitsplaner
- Auditmanagement
- Blog
- CRM
- Dashboards & Reportings
- Dokumentenmanagement
- Fehlermanagement
- Formulare
- Ideenmanagement
- Instandhaltung
- Mitarbeiter
- Produkte
- Projekte & Maßnahmen
- Reklamationsmanagement
- Risiken & Chancen
- Schulungsmanagement
- WIKI
- Zielmanagement

Since Blog, Dokumentenmanagement and WIKI have generally the same structure and functionality they are usually treated as one section (Blog, Dokumentenmanagement und WIKI) in the release notes.
