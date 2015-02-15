// ==UserScript==
// @name AutoLogin
// @namespace 'Akatubame - Auto Login Creator'
// @grant none
// 
// ---------------------------------------------------------------------------
// 設定項目
// ---------------------------------------------------------------------------
//  ■自動ログインを行うURLを登録
//     @include http://www.*.com/login
//   上記のように指定する。ワイルドカード"*"使用可能。改行区切りで追加可能
// ---------------------------------------------------------------------------
// @include https://www.evernote.com/Login.action*
// 
// ==/UserScript==
// ---------------------------------------------------------------------------
// 設定項目その２
// ---------------------------------------------------------------------------
//  ・url：自動ログインを行うURLのドメイン
//         (※一部でも良い。必ず入力する。他サイトでの誤作動を防ぐ)
//  ・inputs：入力するフォームのINPUTタグ (複数指定可)
//     ┃
//     ┣ input1 ━┳ xpath (INPUTタグのXPath)
//     ┃         ┗ text  (入力する内容)
//     ┣ input2 ━┳ xpath
//     ┃         ┗ text 
//     ┗ submit ━━ xpath (入力後にクリックするINPUTタグのXPath)
// ---------------------------------------------------------------------------
var site = {
	evernote : {
		url: 'www.evernote.com',
		inputs: {
			// ユーザー名
			username: {
				xpath: '//input[@name="username"]',
				text:  'hogehogeuser',
			},
			// パスワード
			password: {
				xpath: '//input[@name="password"]',
				text:  'hogehogepassword',
			},
			// SUMBITボタン。コメントアウトで自動送信
			submit: {
				//xpath: '//input[@value="サインイン"]',
			},
		},
	},
	
};

// -------------------------------------------------------
// 設定ここまで
// -------------------------------------------------------
//
// -------------------------------------------------------
// メイン処理
// -------------------------------------------------------
(function () {
	// alert(document.URL); // デバッグ用 (コメントアウトでアラート表示)
	for (i in site) {
		
		// URLのマッチ判定 (他サイトでの誤作動防止)
		// alert( site[i]["url"] ); // デバッグ用
		if ( document.URL.indexOf( site[i]["url"] ) == -1 )
			continue;
			
		// フォーム入力 (submitボタンを除く)
		for (j in site[i]["inputs"]) {
			if (j == "submit")
				continue;
			
			var e   = XPathGetItem( site[i]["inputs"][j]["xpath"] );
			e.value = site[i]["inputs"][j]["text"];
			// alert(e.innerHTML); // デバッグ用
		}
		
		// 送信
		var e2 = XPathGetItem( site[i]["inputs"]["submit"]["xpath"] );
		e2.click();
	}
})();

// -------------------------------------------------------
// 関数
// -------------------------------------------------------
// XPathで要素をアイテムのみ取得
function XPathGetItem(xpath)  {
	var e = document.evaluate(xpath, document, null, XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null);
	return e.snapshotItem(0);
}
