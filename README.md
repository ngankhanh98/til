# TIL
(Today I learnt...)


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
`05/08/2021`
### Miniscroll
```css

.miniscroll::-webkit-scrollbar {
  width: 5px;
  height: 5px;
}

.miniscroll::-webkit-scrollbar-track,
.miniscroll::-webkit-scrollbar-track {
  background-color: transparent;
}

.miniscroll::-webkit-scrollbar-thumb,
.miniscroll::-webkit-scrollbar-thumb {
  background-color: #b2b2b2;
  border-radius: 2px;
```

`09/08/2021`
### Gotchas Angular Universal

https://github.com/angular/universal/blob/master/docs/gotchas.md

`13/08/2021`
### How do I rename both a Git local and remote branch name?

https://stackoverflow.com/a/61595531/8742144

```bash
# Rename your local branch.
# If you are on the branch you want to rename:
$ git branch -m new-name

# If you stay on a different branch at the current time:
$ git branch -m old-name new-name

# Delete the old-name remote branch and push the new-name local branch.
# Stay on the target branch and:
$ git push origin :old-name new-name

# Reset the upstream branch for the new-name local branch.
# Switch to the target branch and then:
$ git push origin -u new-name
```

`14/08/2021`
### Video unplay

```html
<video
    title="Advertisement"
    style="background-color: rgb(0, 0, 0); position: absolute; width: 640px; height: 360px;"
    src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
    autoplay="true"
    muted="muted"></video>
```

`16/08/2021`
```node
> Date.now() / 1000
1629131773.152

> Date.now() / 1000 | 0
1629131773
```

`30/08/2021`
### Text security css

```html
<div class="hide-phone-number">123-456-7890</div>
```

```css
.hide-phone-number {
  display: inline-block;
  font-family: monospace, monospace;
  position: relative;
}

.hide-phone-number::after {
  content: "XX-XXXX";
  background: white;
  position: absolute;
  right: 0;
}
```

### Search / clear search
https://stackoverflow.com/a/15109497/8742144

Use: type='search' and bind `search` event to input to have: **search when enter** and **clear reverting all results** behavior
```html
<input type="search" class="form-control text-sm focus:border-gray-700 " placeholder="Tìm kiếm"
        style="border-radius: 4px;" (search)="changeSearchTerm($event)" >
```

### Weird dynamic point math
```nodejs
> 1.6+1.6+1.61
4.8100000000000005

> Number(parseFloat(1.6+1.6+1.61).toFixed(10))
4.81
```
