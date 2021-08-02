# TIL
(Today I learnt...)

_If you get one percent better each day for one year, you'll end up thirty-seven times better by the time you're done_

Actually it's just a place where I store things. Because, well hi there 👋, absent-minded's here!


`31/07/2021`
## Change author of a git commit
```bash
git commit --amend --author="John Doe <john@doe.org>"
```

<hr>

`31/07/2021`
## ngx-datatable for Angular Universal
Follow the official guildline: https://github.com/swimlane/ngx-datatable/blob/master/docs/universal/server-side-rendering.md

Stackoverflow: https://stackoverflow.com/a/61521133/8742144

My current solution to this problem.

In every lazy-loaded module, I injected ServerScrollBarHelper & ServerDimensionsHelper so I could access them even when lazy loading. But I changed their code:

```ts
import { Injectable, Inject, Injector, PLATFORM_ID } from '@angular/core';
import { Request } from 'express';
import { REQUEST } from '@nguniversal/express-engine/tokens';
import { DimensionsHelper } from '@swimlane/ngx-datatable';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';

@Injectable()
export class ServerDimensionsHelper extends DimensionsHelper {

    clientRqst;
    constructor(@Inject(PLATFORM_ID) private platformId: Object, injectctor: Injector) {
        super();
        if (isPlatformServer(this.platformId)) {
            this.clientRqst = injectctor.get(REQUEST);
        }
    }

    getDimensions(element: Element): ClientRect {
        if (isPlatformBrowser(this.platformId)) {
            return super.getDimensions(element);
        } else {
            console.log(this.clientRqst.headers);
            const width = parseInt(this.clientRqst.headers.cookie['CH-DW'], 10) || 1000;
            const height = parseInt(this.clientRqst.headers.cookie['CH-DH'], 10) || 800;

            const adjustedWidth = width;
            const adjustedHeight = height;

            return {
                height: adjustedHeight,
                bottom: 0,
                top: 0,
                width: adjustedWidth,
                left: 0,
                right: 0
            };
        }
    }
}




import { ScrollbarHelper } from '@swimlane/ngx-datatable';
import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';

@Injectable()
export class ServerScrollBarHelper extends ScrollbarHelper {
    width: number;

    constructor(@Inject(DOCUMENT) document, @Inject(PLATFORM_ID) private platformId: Object) {
        super(document);
        this.width = 16; // use default value
    }

    getWidth(): number {
        if (isPlatformBrowser(this.platformId)) {
            return super.getWidth();
        } else {
            return this.width;
        }

    }
}
```

<hr>

`01/08/2021`
## Remove all comments in VS Code
Stackoverflow: https://stackoverflow.com/a/66650570/8742144

This will be an easy way. Type CTRL + F and type `//.*` and select the regex sign like the below picture

<hr>

`02/08/2021`
## Prevent failing in update file due to cache
Source: https://sebhastian.com/javascript-versioning/

TIL even with <keyboard>Ctrl + F5</keyboard> didn't help clean cache completely. So to prevent browser get the same file `cached from dish`, we should version our file.

For example:

### Automate versioning with Webpack
```js
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  plugins: [
    new HtmlWebpackPlugin({
      title: "My Web Application",
    }),
  ],
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
};
```

Result will be:
```bash
main.b746e3eb72875af2caa9.js # first build
main.216e852f60c8829c2289.js # second build
main.ad717f2466ce655fff5c.js # third build
```

### Another way to version your file is:
```js 
const fileName = `main.[${new Date().getTime()}].js`

// Would be:
// main.1627922733399.ts
// main.1627922752324.ts

```