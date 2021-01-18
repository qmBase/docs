---
id: installation
title: Installation
sidebar_label: Installation
slug: /installation
---

## Install on Windows

Prerequisites

- MS SQL 2019 Database
- Windows 10 Pro or higher
- APS.NET Core Hosting Bundle 5.0.x
- IIS Webserver V 10
- SSL Certificate Public or self signed
- Hardware requirements
  - min 4 GB Ram
  - min 10 GB HDD

Steps to install or update

1. Download the latest qmBase version from [here](https://support.qmbase.com/downloads/). You will get the credentials via mail after you have signed the contract.
2. Extract the ZIP file to the folder where the IIS is located.
3. Run the latest database migrations. The SQL scripts will be provided on the download page as well. You will need to create 2 databases.
4. qmBase requires a SSL connection. So you have to configure the IIS to use either a self signed certificate or use a regular certificate.
5. Configure qmBase and start running.

## Configure qmBase

To configure qmBase you have take actions in 2 different places.

Insert this row in your multi tenant database

```sql
INSERT INTO [yourDatabase].[dbo].[MultiTenants]
(
		,[DatabaseType]
		,[Host]
		,[ConnectionString]
		,[StorageConnectionString]
		,[Name]
		,[CustomerId]
)
VALUES
(
		,0
		,pathToYour.qmbase
		,SQL Connection string
		,NULL
		,yourCustomerName
		,yourCustomerId
)
```

Change the appSettings.Production.json file

```json
// These settings will only be applied if HostingEnvironment is "Production"
// Use this file to customize the behavior in Production
{
  //ApplicationInsights settings omitted for brevity.
  "ConnectionStrings": {
    "MultiTenantConnection": "Connection string to multiTenantContext",
    // These settings are not needed if multiTenant==true
    "DefaultConnection": "Your Ms SQL ConnectionString -> not needed in MultiTenantScenario"
  },
  "AppSettings": {
    "MultiTenantContext": true,
    "StorageType": "FileSystem", //"FileSystem" or "AzureBlobStorage"
    "PhysicalFileProviderRootPath": "D:\\qmbase\\uploads"
  }
}
```

## Install on Linux

Possible but not documented

## Breaking Changes

## Tools Frameworks we use

qmBase builds upon modern and popular technologies.
For our backend we use

- ASP.NET 5.0

For our frontend we use

- React
- Code is written in TypeScript
