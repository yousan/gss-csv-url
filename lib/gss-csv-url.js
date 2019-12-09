'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
class GSSCSVUrl {
    constructor() {}
    // console.log('Hello ES6!');


    /**
     * GSSのファイルIDを取得する i.e. 1yfMIdt8wgBPrMY3UwiCTsX3EN_2gcLCmPAEy8dfYeLY
     *
     * @param url
     */
    fileid(url) {
        let pattern = 'docs.google.com\/spreadsheets\/d\/([^\/]+)\/';
        let matched = url.match(pattern);
        return matched[1] || 0;
    }

    /**
     * GSSのシートIDを取得する i.e. gid=12345678
     *
     * @param url
     */
    gid(url) {
        let pattern = '#gid=([0-9]+)';
        let matched = url.match(pattern);
        // console.log(matched[1] || 0);
        return matched[1] || 0;
    }

    /**
     * GSSのURLを正しい形式にする。
     * GSSのURLは
     *  1. ブラウザのロケーションバーのURL
     *  2. 共有状態のURL
     *  3. CSVダウンロード可能なURL
     * があるが、「CSVダウンロード可能なURL」に変換する。
     *
     * todo: 未実装だよ！
     */
    url(url) {
        let fileid = this.fileid(url);
        let gid = this.gid(url);

        let csv_url = 'https://docs.google.com/spreadsheets/d/' + fileid + '/export?format=csv&gid=' + gid;

        return csv_url;
        /**
         // 1. docs.google.comで始まっている
         // 1. URLパスの最後がexportになっている
          // またフォーマットについては正しくない場合に修正を行う。
         // 1. format=csvになっている
          // 先頭が https://docs.google.com/ で始まっているか確認する ココ重要！
         if ( 0 !== strpos($url, 'https://docs.google.com/spreadsheets')) {
            throw new Exception('GoogleスプレッドシートのURLではないようです。');
        }
          // 末尾の/editを/exportに変える（厳密にはURL中の…、だけれど、ハッシュで/editが出る可能性は低いと見ている
         // e.g. https://docs.google.com/spreadsheets/d/1yfMIdt8wgBPrMY3UwiCTsX3EN_2gcLCmPAEy8dfYeLY/edit#gid=0
         $url = str_replace('/edit', '/export', $url);
          // #gid=0があれば取り除く
         // e.g. https://docs.google.com/spreadsheets/d/1yfMIdt8wgBPrMY3UwiCTsX3EN_2gcLCmPAEy8dfYeLY/export#gid=0
         $url = str_replace('#gid=0', '', $url);
         // $url = str_replace('#gid=0', '', $url);
          // 末尾に?format=csvを足す
         // e.g. https://docs.google.com/spreadsheets/d/1yfMIdt8wgBPrMY3UwiCTsX3EN_2gcLCmPAEy8dfYeLY/export
         if ( FALSE === strpos($url, 'format=csv') ) {
            if (FALSE !== strpos($url, '#')) { // #があった場合にはうまくいかない
                $url = str_replace('#', '?format=csv#', $url);
            } else {
                // @link https://stackoverflow.com/questions/5809774/manipulate-a-url-string-by-adding-get-parameters
                $query = parse_url($url, PHP_URL_QUERY); // クエリ文字列だけを抜きだす
                $url   .= ! empty($query) // 既にクエリ文字列が設定されているかどうか
                    ? '&format=csv' // 設定されていれば&で連結し
                    : '?format=csv'; // そうでなければ?で連結する
            }
        }
          // 完成したURLの例
         // e.g. https://docs.google.com/spreadsheets/d/1yfMIdt8wgBPrMY3UwiCTsX3EN_2gcLCmPAEy8dfYeLY/export?usp=sharing&format=csv
         return $url;
         **/
    }
}

exports.default = GSSCSVUrl;
const gss_csv_url = new GSSCSVUrl();
// const url = 'https://docs.google.com/spreadsheets/d/1yfMIdt8wgBPrMY3UwiCTsX3EN_2gcLCmPAEy8dfYeLY/edit#gid=374636390';
// console.log(gss_csv_url.gss_url(url));