## Locales

1. Available locales: https://docs.oracle.com/cd/E23824_01/html/E26033/glset.html#glscx
2. Trategy:
```js
const savedDate = Date.now() / 1000 | 0
new Date(Date(savedDate).toLocaleDateString('en-US') // "8/30/2021"
new Date(Date(savedDate).toLocaleString('en-US') // "8/30/2021, 9:17:48 PM"

```
