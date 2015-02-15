# AutoLogin
ID、Pass保護されたサイトへ自動的にログインを行うGreasemonkeyスクリプト

author: @akatubame
/ date: 2015/02/15
/ version: 0.0.1
/ 使用言語: Javascript([Greasemonkey](https://addons.mozilla.org/en-us/firefox/addon/greasemonkey/))

##■本ツールの説明

ブラウザ[Firefox](https://www.mozilla.org/ja/firefox/new/)にて、ID・パスワードで保護されたサイトへ自動でログインする拡張スクリプトです。  
あまりセキュリティを重視しないサイト(掲示板など)で、毎回手間となるID＆パスワードの入力作業を省略する目的で制作しました。

Greasemonkeyスクリプト形式となっていますので、インストールはDrag&Dropで完了します。  
Firefox ver.35.0で動作確認済み。  


##■使い方

###１．初期設定

まず「AutoSkipper.user.js」を任意のフォルダに名前を付けて保存します。  
次に、ログインするURLを登録するために、保存したファイルをエディタなどで開きます。  

「設定項目」の説明にしたがって設定してください。  
なお、登録には以下の情報が必要です。

- ログインページのURL
- ID、パスワードなどのログイン情報
- 各種フォームのINPUTタグのXPath
    - XPathについて詳しく知りたい場合はWikipediaの[XML_Path_Language](https://ja.wikipedia.org/wiki/XML_Path_Language)が参考になります

好きなだけログインしたいサイトを登録したら、次はインストールに続きます。

###２．インストール

設定を済ませた「autologin.user.js」をFirefoxウィンドウへDrag&Dropします。  
するとインストール確認画面が出現しますので、「インストールする」をクリックして次に進んで下さい。  
数秒でインストールが完了します。

###３．登録動作の確認

あとは登録したURLへ移動して、期待通りログイン情報が自動入力されるかどうかご確認下さい。  
上手く動かない場合は構文ミスが発生しているか、XPathの指定が間違っている可能性があります。  
その際、要所に配置されたデバッグ用のalert()をコメントアウトすると修正箇所を特定しやすくなるかも知れません。

以上が、本スクリプトの簡単な使い方の説明になります。

##■終わりに  

質問や機能の追加要望、バグ報告等は以下へ。

	Author: akatubame  
	Email: kurotubame5@gmail.com
