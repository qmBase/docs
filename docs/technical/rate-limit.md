---
id: rate-limit
title: Rate limits for using qmBase
---

The qmBase REST API uses rate limiting to control API traffic. Different types of API requests have different rate limits.
In case you reach the rate limit the server will response with a status code 429. If you are using the qmBase App you will be redirected to an error page.

## Why rate limits exist

Rate limits are a common practice for APIs, and they're put in place for a few different reasons.

- First, they help protect against abuse or misuse of the API. For example, a malicious actor could flood the API with requests in an attempt to overload it or cause disruptions in service. By setting rate limits, qmBase can prevent this kind of activity.
- Second, rate limits help ensure that everyone has fair access to the API. If one person or organization makes an excessive number of requests, it could bog down the API for everyone else. By throttling the number of requests that a single user can make, qmBase ensures that everyone has an opportunity to use the API without experiencing slowdowns.
- Lastly, rate limits can help qmBase manage the aggregate load on its infrastructure. If requests to the API increase dramatically, it could tax the servers and cause performance issues. By setting rate limits, qmBase can help maintain a smooth and consistent experience for all users.

Although hitting rate limits can be frustrating, rate limits exist to protect the reliable operation of the API for its users.

## Default rate limits

Different types of API enforce different rate limits. Unless otherwise described the rate limit is 500 requests per minute and user.
