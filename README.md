# Website

This website is the documentation for [qmBase](https://qmbase.com).

This website is built using [Docusaurus 2](https://v2.docusaurus.io/), a modern static website generator.

## Status

help.qmbase.com

[![qmBase - Azure Static Web Apps CI/CD](https://github.com/qmBase/docs/actions/workflows/azure-static-web-apps-wonderful-beach-0098df603.yml/badge.svg)](https://github.com/qmBase/docs/actions/workflows/azure-static-web-apps-wonderful-beach-0098df603.yml)

## Prerequisites

Download and install VS Code clone this repository and follow the instructions.

## Installation

```console
yarn install
```

## Local Development

```console
yarn start
```

This command starts a local development server and open up a browser window. Most changes are reflected live without having to restart the server.

## Development in the cloud

If you do not have installed VS Code on you local machine you can also Open the repository in in the browser. This make writing new documents easier than working on the raw files on Github
Go to [https://vscode.dev/github/qmBase/docs](https://vscode.dev/github/qmBase/docs) and follow the instructions.

## Build

```console
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Deployment

```console
GIT_USER=<Your GitHub username> USE_SSH=true yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

## Colors

- Primary: #65ace0

## Static Assets

### Icons

Icons we use can be found at [react-icons](https://react-icons.github.io/react-icons/icons?name=bs)

### Screenshots

The screenshots are automatically generated via Cypress. You can see the full list of screenshots [here](https://qmbaseadminlinux.azurewebsites.net/) under the gallery section.
If you require more screenshots please file a new [issue](https://github.com/qmBase/docs/issues/new/choose).

Path of screenshots equals path in app.

## Templates for docs

The template for app documentation can be found in [/docs/tutorial-template](https://github.com/qmBase/docs/blob/master/docs/tutorial-template.mdx).
If the document you write is incomplete please write

TODO:
What is missing
