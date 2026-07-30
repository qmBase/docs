---
sidebar_label: Self-Hosting
title: Self-Hosting
---

This section provides guidance for self-hosting the application, including Docker deployment, backup strategies, and troubleshooting.
There are several ways to self-host the application, this documentation focuses on the [Docker](docker.mdx) deployment method which is the most common and recommended approach. For other deployment methods, please refer to the [Installation Windows](./install-windows.mdx) documentation.

Self-hosting allows you to run the application on your own infrastructure, giving you full control over your data and environment. However, it also requires more responsibility for maintenance, updates, and security.
It can be done on hardware you own or on a virtual machine in a cloud provider of your choice (Azure, AWS, GCP). The application is designed to be flexible and can be deployed in various environments, including Windows, Linux, and macOS.

## Feature Comparison

The general trade off between self-hosting and using the cloud service is described in the following table.
While we try to achieve feature parity of our cloud version and the software you can install in your own data center there are some differences.
The differences are shown in the table below.

| Feature                        | Cloud         | On-Premises                                        |
| ------------------------------ | ------------- | -------------------------------------------------- |
| Backup                         | Managed by us | Managed by you                                     |
| Automatic weekly notifications | Managed by us | Requires at least one login per 7 days of any user |

## Access to the internet

Even On-Premises installation need access to the internet. Some specific connections are required for full functionality.
The urls that need to be accessible are displayed in the table below. If endpoints are not available qmBase might work with limited functionality.
The IP addresses might change over time.

### Central qmBase API

| Url                    | IP-Address | Purpose                                                       | Impact if blocked                                                          |
| ---------------------- | ---------- | ------------------------------------------------------------- | -------------------------------------------------------------------------- |
| https://api.qmbase.com | dynamic    | Subscription management, Ticket System                        | No access to our ticket system                                             |
| https://api.qmbase.com | dynamic    | Access to qmBase Templates                                    | No access to our templates in document management and various other places |
| https://api.qmbase.com | dynamic    | Central user management                                       | We need access to the server for billing and licensing                     |
| https://api.qmbase.com | dynamic    | Recurring weekly notifications and web calendar functionality | No internet calender, no recurring notifications                           |

### E-Mail Sending and Status Updates

| Url                          | IP-Address | Purpose                 | Workaround                                                          | Impact if blocked                                                                                                 |
| ---------------------------- | ---------- | ----------------------- | ------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| https://api.sendgrid.com     | n/a        | E-Mail notifications    | Could be exachanged by own Email Server which is available via SMTP | Workaround can be applied else no email notifications                                                             |
| https://status.sendgrid.com/ | n/a        | Status of send grid api |                                                                     | No info about current status of send grid api. You do not know whether sending Email notifications is operational |

### Other

| Url                                          | IP-Address | Purpose                                                              | Workaround | Impact if blocked                                                                           |
| -------------------------------------------- | ---------- | -------------------------------------------------------------------- | ---------- | ------------------------------------------------------------------------------------------- |
| https://qmbasesupport.blob.core.windows.net/ | n/a        | Access to qmBase Templates                                           |            | No access to our templates in document management and various other places                  |
| https://caqadmin.blob.core.windows.net       | n/a        | Software Updates (Only On-Premises users)                            |            | You can not download software updates                                                       |
| https://js.monitor.azure.com                 | n/a        | Azure Monitor tracks availability and performance of the application |            | We can not collect crash and telemetry data. Problems specific to you might not be detected |
| https://help.qmbase.com                      | n/a        | Release notes alert                                                  |            | No notification about new releases                                                          |

### Use your own Email Server

Upon request we can also use an Email Server that is provided by you. The email server must be accessible via Simple Mail Transfer Protocol (SMTP) connection.

## Support

We only support the latest version of On-Premises installation.

## Install on Azure, AWS, GCP

See [Docker Compose](./docker.mdx).