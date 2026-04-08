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

You can also skip this manual step and let the MCP client build/refresh the index automatically when it starts `grounded-docs` from `.vscode/mcp.json`.

## Verify the index

Run:

```powershell
.\.grounded-docs-mcp\verify-docs.ps1
```

## Getting started

Your MCP-compatible VS Code client should read `.vscode/mcp.json` and auto-start both workspace servers:

- `documentation` -> `@andrea9293/mcp-documentation-server`
- `grounded-docs` -> `.\.grounded-docs-mcp\run-server.ps1`

The Grounded launcher script:

- indexes `./docs` into `./.grounded-docs-mcp/store`
- then starts `@arabold/docs-mcp-server` in read-only `stdio` mode
- requires no separate terminal command in normal editor use

## Refresh after docs change

When files under `./docs` change, either:

- reload/restart your MCP client so it reruns `grounded-docs`, or
- rerun manually:

```powershell
.\.grounded-docs-mcp\index-docs.ps1
```
