# Versioning

## .NET Versioning your source file to get rid of browser cache
I've faced with a problem when the end-users' browser is **enable cached**. That causes my bug did not seem to be fixed from end-user POV, even though hotfix has been applied.

To trick the browser to always get the newest version of source file, I version the files.

For example, I have made changes on **app.js**, but **app.html** seems to always import the cached **app.js**, not the newest one.



```html
<!DOCTYPE html>
<html>
  <head>
    ...
  </head>

  <body>
    ...
  <script src='app.js?v=@DateTime.Now.ToString("yyyyMMddHHmmss")'></script>
  </body>
</html>
```

## Versioning your release application

What is the consistent way to display the version? Is there any way where we can only change version tag in one place and use it in the whole application?

![image](https://user-images.githubusercontent.com/32817908/137583502-bca2f62e-68c3-451d-85cd-42df41d66b8b.png)

Let's say we have a REST api server and a web application separately. The best practice is: **the tag version of the backend repo determine the version of the whole app**

To do that, some steps must be taken:


#### 1. Mark a tag to your backend repo
Redirect to the directory, at terminal enter:
```bash
$ npm version 1.0.0
```
Two actions will be taken after the command line
1. Your **package.json** automatically update the `version` field to `1.0.0`
2. A automatic commit being create. You can check by enter the below command line in terminal:
```bash
$ git log
commit 0d9477e2e036f9fc93b4f425b343b20a3c13a3fd
Author: Khánh <kate.nguyen@siliconstack.com.au>
Date:   Sun Oct 10 21:43:14 2021 +0700

    update .env

commit c71aabe51d51c00b53e21d8a17ac8dae3cfcd624 (tag: v1.0.0)
Author: Khánh <kate.nguyen@siliconstack.com.au>
Date:   Sun Oct 10 21:33:10 2021 +0700

    1.0.0

commit e8901f449dfe4ffe320b09ad236609f3cab47b22
Merge: 0d025a2 e592965
Author: Khánh <kate.nguyen@siliconstack.com.au>
Date:   Sun Oct 10 21:32:36 2021 +0700
```

So now, we have a backend repository with version tag synced in both VSC and source code itself.

#### 2. Create an public endpoint to serves anywhere.
1. Import **package.json** and retrieve the `version` property
2. Create a suggested endpoint:
```
Endpoint: GET /public/version
Response body: v1.0.0
```



## ❓ Remained questions
Is there any way to run `npm version <auto-increased-version>`, especially with CI/CD?


## Acknowledge
- A work obstacle at Silicon Stack
- An excellent idea from friend K****
- A private source code from Sk*****
