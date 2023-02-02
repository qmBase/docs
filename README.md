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

### How to edit documents in VS Code

Follow these steps to edit the documents:

1. Open Visual Studio Code (if it's not installed, download it from <https://code.visualstudio.com/>).
2. From the left sidebar, click on **Source Control** then click **Clone Repository**.
3. Paste the repository URL of **qmBase/docs** GitHub repository (<https://github.com/qmBase/docs.git>) and click **Clone from URL**.
4. Select a path (any folder) where the files will be cloned to.
5. After the cloning process is finished, a pop-up message will show up, click **Open** to open the cloned repository in Visual Studio Code.
6. Now create a new branch by clicking **main** in the bottom left, and choose **Create new branch** and name it then press enter. (use your initials at the beginning, for example: [ab]/BranchName)
7. Do your edits and changes and save them.
8. Click on **Source Control** from the left sidebar.
9. Enter a message about the changes you made and press **Commit**, then **Publish Branch**.
10. Now in GitHub, make a **Pull Request**, then merge your branch with the main branch.

## Development in the cloud

If you do not have installed VS Code on you local machine you can also Open the repository in in the browser. This make writing new documents easier than working on the raw files on Github
Go to [https://vscode.dev/github/qmBase/docs](https://vscode.dev/github/qmBase/docs) and follow the instructions.

## Build

```console
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Deployment

This project will deployed to an azure static web app via the azure-pipelines.yml file

## Spell Check

```console
npm run lint:spelling
```

This command runs a spell check using CSpell. If you want any specific words to be ignored by the spell checker, add them to the words list in the `project-words.txt` file.

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

## Common Feature Matrix

| App                        | Entity           | Comments | Files | Audit Trail | Custom Fields | Workflows | Costs |
| -------------------------- | ---------------- | -------- | ----- | ----------- | ------------- | --------- | ----- |
| Absence planner            |                  | x        | x     | x           | x             |
| Audit management           |                  | x        | x     | x           | x             |
| Blog                       |                  | x        | x     | x           |
| Claim management           |                  | x        | x     | x           | x             |           | x     |
| CRM                        | Contacts         | x        | x     | x           | x             |
| CRM                        | Ratings          |          | x     | x           |
| Document management        |                  | x        | x     | x           |
| Employees                  |                  | x        | x     | x           |
| Error management           |                  | x        | x     | x           |               |           | x     |
| Forms                      |                  |          |       | x           |
| Functions & Qualifications | Non Standard     |
| Goal management            |                  | x        | x     | x           | x             |           | x     |
| Idea management            |                  | x        | x     | x           |
| Maintenance                | Inventory items  | x        | x     | x           |               |           | x     |
| Maintenance                | Inspections done |          | x     |
| Projects & Tasks           | Projects         | x        | x     | x           |
| Projects & Tasks           | Tasks            | x        | x     | x           | x             |           | x     |
| Products                   |                  | x        | x     | x           |
| Risks & Chances            |                  | x        | x     | x           | x             |
| Trainings                  |                  | x        | x     | x           | x             |           | x     |
| WIKI                       |                  | x        | x     | x           |

## Connection Matrix

| App / App                  | Absence planner | Audit management | Blog | Claim management | CRM | Document management | Employees | Error management | Forms | Functions & Qualifications | Goal management | Idea management | Maintenance | Projects & Tasks | Products | Risks & Chances | Trainings | WIKI |
| -------------------------- | --------------- | ---------------- | ---- | ---------------- | --- | ------------------- | --------- | ---------------- | ----- | -------------------------- | --------------- | --------------- | ----------- | ---------------- | -------- | --------------- | --------- | ---- |
| Absence planner            |                 |                  |      |                  |     |                     |           |                  |       |                            |                 |                 |             |                  |          |                 |           |      |
| Audit management           |                 |                  |      |                  |     |                     | x         |                  | x     |                            | x               |                 |             | x                |          |                 |           |      |
| Blog                       |                 |                  |      |                  |     |                     |           |                  |       |                            |                 |                 |             |                  |          |                 |           |      |
| Claim management           |                 |                  |      | x                |     |                     |           | x                |       |                            |                 |                 |             | x                | x        |                 |           |      |
| CRM                        |                 |                  |      | x                |     |                     |           |                  |       |                            |                 |                 |             | x                |          |                 |           |      |
| Document management        |                 |                  |      |                  |     |                     |           |                  |       |                            |                 |                 |             |                  |          |                 |           |      |
| Employees                  |                 |                  |      |                  |     |                     |           |                  |       |                            |                 |                 |             |                  |          |                 |           |      |
| Error management           |                 |                  |      | x                |     |                     |           |                  |       |                            |                 |                 |             | x                | x        |                 |           |      |
| Forms                      |                 |                  |      |                  |     |                     |           |                  |       |                            |                 |                 |             |                  |          |                 |           |      |
| Functions & Qualifications |                 |                  |      |                  |     |                     | x         |                  |       |                            |                 |                 |             |                  |          |                 |           |      |
| Goal management            |                 | x                |      |                  |     |                     |           |                  |       |                            |                 |                 |             | x                |          |                 |           |      |
| Idea management            |                 |                  |      |                  |     |                     |           |                  |       |                            |                 |                 |             |                  |          |                 |           |      |
| Maintenance                |                 |                  |      |                  |     |                     |           |                  |       |                            |                 |                 |             | x                |          |                 |           |      |
| Projects & Tasks           |                 | x                |      | x                | x   |                     | x         | x                |       |                            | x               | x               | x           | x                | x        | x               | x         |      |
| Products                   |                 |                  |      | x                |     |                     |           | x                |       |                            |                 |                 |             | x                |          |                 |           |      |
| Risks & Chances            |                 |                  |      |                  |     |                     |           |                  |       |                            |                 |                 |             | x                |          |                 |           |      |
| Trainings                  |                 |                  |      |                  |     |                     | x         |                  | x     | x                          |                 |                 |             | x                |          |                 |           |      |
| WIKI                       |                 |                  |      |                  |     |                     |           |                  |       |                            |                 |                 |             |                  |          |                 |           |      |
