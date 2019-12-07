'use strict';

import GSSCSVUrl from 'gss-csv-url';

test('Basic test', () => {
  const gss_csv_url = new GSSCSVUrl();
  const input_url = 'https://docs.google.com/spreadsheets/d/1yfMIdt8wgBPrMY3UwiCTsX3EN_2gcLCmPAEy8dfYeLY/edit#gid=374636390';
  const expect_url = 'https://docs.google.com/spreadsheets/d/1yfMIdt8wgBPrMY3UwiCTsX3EN_2gcLCmPAEy8dfYeLY/export?format=csv&gid=374636390';
  console.log(gss_csv_url.url(input_url))
})
