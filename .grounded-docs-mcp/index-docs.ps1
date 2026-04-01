[CmdletBinding()]
param(
    [string]$Library = "qmbase-docs",
    [string]$Version = "1.0.0"
)

$ErrorActionPreference = "Stop"
Set-StrictMode -Version Latest

$workspaceRoot = Split-Path -Parent $PSScriptRoot
$docsDir = Join-Path $workspaceRoot "docs"
$configPath = Join-Path $PSScriptRoot "docs-mcp-server.yaml"
$storePath = Join-Path $PSScriptRoot "store"
$npx = (Get-Command "npx.cmd" -ErrorAction Stop).Source

if (-not (Test-Path $docsDir)) {
    throw "Docs directory not found: $docsDir"
}

New-Item -ItemType Directory -Force -Path $storePath | Out-Null

$docsUri = (New-Object System.Uri((Resolve-Path $docsDir).Path)).AbsoluteUri

& $npx -y @arabold/docs-mcp-server@latest scrape $Library $docsUri `
    --version $Version `
    --config $configPath `
    --store-path $storePath `
    --telemetry false `
    --quiet `
    --max-pages 500

Write-Host ""
Write-Host "Indexed library '$Library' from:"
Write-Host $docsUri
Write-Host ""
Write-Host "Store path:"
Write-Host $storePath
