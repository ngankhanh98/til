# Husky usage

You can use husky hook when you want to run additional cmd when run git cmd

## Use case:
I have a repo `my-app`<br>
I want to run `npm run build:prod admin` first whenever I run `git commit` (https://githooks.com/)<br>
if `npm run build:prod admin` success -> continue to `git commit`<br>
else exit<br>
I want no changes made on my repo or my `package.json` file

## How
```bash
npm i husky -g

cd my-app
npx husky install
cd ./husky
touch pre-commit
```

`pre-commit` file will look like:

```bash
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

# exit 0 -> succeed
npm run build:prod admin && exit 0 
```

```bash
# commit a change
touch new-file.txt
git add new-file.txt
git commit -m"new file"

> npm run build:prod admin
> ...
```

That's it <3
