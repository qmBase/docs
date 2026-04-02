# MCP Kickoff

## Definitions

1. MCP = standard for AI tool access
2. It exposes tools, not just data
3. Works like plugins for AI apps
4. Uses a structured tool schema
5. The AI decides when to call it
6. It’s transport-agnostic
7. It’s ideal for internal systems

## TODOs

1. Upload all documents to mcp server ✅
2. Commit updated databases to github ✅
3. What kind of LLM do we use? Add explanation how to use VsCode, Ollama or Azure Foundry Local? .
4. Get some sample customer queries (Lutz)
5. Define a prompt to answer the queries.
6. Verify quality of answers

## Prompt

You MUST use the available tools when relevant.
If a tool named "search_all_document" exists, always call it before answering.
[Question of customer]

## Open Questions

- Can I use it with ChatGPT WebUI?
- How can I use it with Foundry local or Ollama?
- Where to store chunks?
- How do we update chunks? Manually vs Automatic?