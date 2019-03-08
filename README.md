# How to use

Convert Google SpreadSheet URL into CSV downloadable URL.

```bash
$ npm install gss-csv-url
```

```javascript
const chalk = require('gss-csv-url');

const input_url = 'https://docs.google.com/spreadsheets/d/1yfMIdt8wgBPrMY3UwiCTsX3EN_2gcLCmPAEy8dfYeLY/edit#gid=374636390';
const csv_url = gss_csv_url.url(input_url);

// would be 'https://docs.google.com/spreadsheets/d/1yfMIdt8wgBPrMY3UwiCTsX3EN_2gcLCmPAEy8dfYeLY/export?format=csv&gid=374636390'
console.log(csv_url); 
```
