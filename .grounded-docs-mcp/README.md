# Grounded Docs MCP

This folder contains the repo-local setup for a second MCP server based on `@arabold/docs-mcp-server`.

## What it does

- indexes the local `./docs` folder
- stores the generated search index in `./.grounded-docs-mcp/store`
- exposes a read-only MCP server named `grounded-docs` through `.vscode/mcp.json`

## First-time setup

Run:

```powershell
.\.grounded-docs-mcp\index-docs.ps1
```

## Verify the index

Run:

```powershell
.\.grounded-docs-mcp\verify-docs.ps1
```

## How it is started

Your MCP-compatible VS Code client should read `.vscode/mcp.json` and auto-start both workspace servers:

- `documentation` -> `@andrea9293/mcp-documentation-server`
- `grounded-docs` -> `@arabold/docs-mcp-server`

## Refresh after docs change

When files under `./docs` change, rerun:

```powershell
.\.grounded-docs-mcp\index-docs.ps1
```
