[CmdletBinding()]
param(
    [string]$Library = "qmbase-docs",
    [string]$Version = "1.0.0",
    [string]$Query = "login"
)

$ErrorActionPreference = "Stop"
Set-StrictMode -Version Latest

$workspaceRoot = Split-Path -Parent $PSScriptRoot
$configPath = Join-Path $PSScriptRoot "docs-mcp-server.yaml"
$storePath = Join-Path $PSScriptRoot "store"
$sampleFile = Join-Path $workspaceRoot "docs\\account\\account-login.md"
$npx = (Get-Command "npx.cmd" -ErrorAction Stop).Source

Write-Host "== Indexed libraries =="
& $npx -y @arabold/docs-mcp-server@latest list --config $configPath --store-path $storePath --telemetry false --output yaml

Write-Host ""
Write-Host "== Version resolution =="
& $npx -y @arabold/docs-mcp-server@latest find-version $Library --config $configPath --store-path $storePath --telemetry false --output yaml

Write-Host ""
Write-Host "== Search sample =="
& $npx -y @arabold/docs-mcp-server@latest search $Library $Query --version $Version --limit 3 --config $configPath --store-path $storePath --telemetry false --output yaml

if (Test-Path $sampleFile) {
    $sampleUri = (New-Object System.Uri((Resolve-Path $sampleFile).Path)).AbsoluteUri
    Write-Host ""
    Write-Host "== Read sample file =="
    & $npx -y @arabold/docs-mcp-server@latest fetch-url $sampleUri --telemetry false
}
