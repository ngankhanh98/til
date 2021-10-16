# Versioning

## .NET Versioning your source file to get rid of browser cache
I've faced with a problem when the end-users' browser is **enable cached**. That causes my bug did not seem to be fix from end-user POV, even though hotfix has been applied.

To trick the browser to always get the newest version of source file, I version the files.

For example, I have made changes on **app.js**, but **app.html** seems to always import the cached **app.js**, ont the newest one.



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

## Version your release application

