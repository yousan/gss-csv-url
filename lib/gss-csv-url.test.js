'use strict';

var _gssCsvUrl = require('./gss-csv-url');

var _gssCsvUrl2 = _interopRequireDefault(_gssCsvUrl);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const gss_csv_url = new _gssCsvUrl2.default();

test('Basic unit', () => {
    let input_url, expect_url;
    input_url = 'https://docs.google.com/spreadsheets/d/1yfMIdt8wgBPrMY3UwiCTsX3EN_2gcLCmPAEy8dfYeLY/edit#gid=374636390';
    expect_url = 'https://docs.google.com/spreadsheets/d/1yfMIdt8wgBPrMY3UwiCTsX3EN_2gcLCmPAEy8dfYeLY/export?format=csv&gid=374636390';
    expect(gss_csv_url.url(input_url)).toBe(expect_url);
});