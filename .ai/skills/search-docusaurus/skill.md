# Skill: Search Docusaurus Documentation

## Purpose

To retrieve accurate, grounded technical information from the SaaS documentation via the MCP server to answer customer queries.

## Input Parameters

- `query`: The core technical question extracted from the customer's email.
- `version`: (Optional) The specific version of the docs to search (default to 'latest').

## Execution Logic

1. **Keyword Extraction**: Identify the primary feature or error message mentioned in the inquiry.
2. **MCP Tool Call**: Use the `read_docs` or `search` tool provided by the MCP server.
3. **Context Retrieval**:
   - Prioritize the `content` block for the answer.
   - Capture the `metadata.url` to provide as a reference.
   - Capture the `metadata.last_updated` to ensure the info is current.

## Success Criteria

- The retrieved information must directly address the user's "How-to" or "Why" question.
- If multiple sections are returned, the skill must synthesize them into a logical sequence.
