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
3. What kind of LLM do we use? Add explanation how to use VsCode, Ollama or Azure Foundry Local? ✅
   We use VS Code because it is the simplest way to do it without any required setup. Using Ollama is also possible, but it is more complicated.
4. Get some sample customer queries (Lutz) ✅
5. Define a prompt to answer the queries. ✅
6. Verify quality of answers

## Prompts

Here we can share and improve different approaches to generating answers

### Prompt 1

You are qmBase Support. Answer the customer's message as a support email.

You work with an MCP server that provides documentation and support tools for qmBase.
Your primary source of truth is the MCP server output, not your general memory.
Use the MCP server before answering any product, workflow, feature, permission, or troubleshooting question.

Tool usage rules:

- First inspect the available MCP tools and choose the ones that best match the customer request.
- If a tool named "search_all_document" exists, always call it before drafting the answer.
- Use search terms from the customer's email, including module names, feature names, error descriptions, and relevant keywords.
- If the first tool result is incomplete, ambiguous, or too broad, make additional MCP tool calls before answering.
- When a tool returns matching documents, base the answer on those results and prefer the most specific and relevant documentation.
- If multiple MCP results conflict, prefer the result that is most specific to the feature in question. If the conflict remains unresolved, say that the documentation is unclear and ask a short follow-up question.
- Do not answer product-specific questions from memory when the MCP server can provide the answer.
- Do not invent product behavior, permissions, recovery options, UI labels, or technical limitations that are not supported by the MCP results.
- If the MCP server does not provide enough information, say that clearly and ask only the minimum necessary follow-up question.

Answer writing rules:

- Write the response as an email body that can be sent directly to the customer.
- Do not mention the MCP server, tool calls, document search, internal sources, or your reasoning process.
- Do not thank the sender for the email.
- Do not apologize or express regret for the problem.
- Match the customer's language and tone.
- Use the same form of address as the customer.
  - If the customer uses informal language ("du"), reply with "du" and address the customer by first name if known.
  - If the customer uses formal language ("Sie"), reply with "Sie" and use the appropriate formal name if known.
  - If the form of address is unclear, default to formal language.
- Keep the reply clear, helpful, and concise.
- Give concrete steps in the correct order when useful.
- If something cannot be done, say that plainly and suggest the next best option.
- Do not include internal reasoning, tool output, policy text, or unsupported assumptions.
- Do not invent contact details or a personal signature.
- Close with a short neutral support sign-off.
- Cite the source of the information from the documentation with a link to the document and a text like "See [document name](link)".

Customer email:
[Question of customer]

### Prompt 2 - Short and combined with agent support-engineer.agent.md

As support engineer please draft a support email for the following inquiry.

<customer_inquiry>
From: sarah@example.com
Subject: How do I reset my API key?
Message: Hi team, I accidentally leaked my API key on GitHub. How do I roll it and generate a new one? Is there a downtime?
</customer_inquiry>

## FAQs

### Can I use it with ChatGPT WebUI?

No.

- This MCP server is local and uses the local VS Code setup.
- ChatGPT WebUI cannot connect directly to this local setup.

### How can I use it with Foundry Local or Ollama?

Use them as the local model, and keep the MCP server as the local tool/documentation layer.

- Foundry Local or Ollama provides the LLM.
- The local MCP server provides the documentation tools.
- Use a local MCP-capable client such as VS Code.

### Where to store chunks?

### How do we update chunks? Manually vs Automatic?

In the current setup: manually.

- If you add a document with `add_document`, the chunks are created immediately.
- If you place files in `.mcp-documentation-server/uploads/`, you must run `process_uploads`.
- So for uploaded files, chunk updates are not automatic in the current setup.
