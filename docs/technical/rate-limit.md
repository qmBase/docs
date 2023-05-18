---
id: rate-limit
title: Rate limits for using qmBase
---

The qmBase REST API uses rate limiting to control API traffic. Different types of API requests have different rate limits.
In case you reach the rate limit the server will response with a status code 429. If you are using the qmBase App you will be redirected to an error page.

## Default rate limits

Different types of API enforce different rate limits. Unless otherwise described the rate limit is 500 requests per minute and user.
