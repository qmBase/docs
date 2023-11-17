---
slug: /technical/tech-stack
title: Our Tech Stack
---

At qmBase we develop software with passion. We use modern tooling and frameworks to accomplish our goals. If you are interested in more details, don't hesitate to contact us.

## Backend

Our backend tech stack currently consists of ASP.Net Core webapp. Our data is stored in MS SQL databases. Binary data is stored in Azure Blob Storage.
The underlying infrastructure runs on Microsoft Azure using a combination of managed services like App, Services, Azure Blob Storage, Azure Functions and SQL databases.
All of our compute runs through CI/CD pipelines that build artifacts, run automated tests and deploy to our infrastructure.

Our backend primarily serves a API endpoint that our front-end JavaScript app consumes. Our infrastructure is heavily automated using Azure tools.

## Frontend

Our app’s frontend is a single-page JavaScript web app mostly written in React using TypeScript and built on top of our REST API endpoints. We bundle with Webpack and target only modern browsers.
We test with Vitest and React Testing Library. Our UI updates in near real-time and is written in SCSS/CSS (with flexbox and grid layout).

We care about performance (e.g. route-based code splitting), maintainability, and testability of our frontend code.
We design the UI/UX details and work collaboratively with the Product team throughout the design process. We care about your feedback and use our ticket system to get your voice directly.
We use Storybook to design the little details of our UI components that count.

For running qmBase in your own data center see [installation](installation).
