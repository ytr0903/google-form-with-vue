# Google Form with Vue.js

Google Formをオリジナルデザインでサイト内に埋め込んでVue.jsで簡単に実装

## 概要

Google Formをなるべく簡単にサイト内に埋め込むためのテンプレートです。

## 使い方

1. Google Formでフォームを作成
1. name、actionをコピー
1. vue-gf-data.jsに設問・選択肢を入力

## オプション

### doc（必須）

form action="`https://docs.google.com/forms/d/e/*******/formResponse`"部分をコピー

### name（必須）

`<input name="entry.12345678">` の12345678部分を入力

### question（必須）

設問

### questiontype（必須）

質問形式。以下の形式に対応

- text …… 1行入力
- textarea …… 複数行入力
- radio …… ラジオボタン
- checkbox …… チェックボックス（選択肢が配列ではなく文字列であれば、boolean値を送信）
- pulldown …… プルダウン

### label（任意）

email, username などの属性を指定することで、ブラウザの補完機能に対応させる。textのみ対応

### options（radio、checkbox、pulldownで必須）

回答の選択肢。配列形式で入力。

checkboxに限り、配列ではなく文字列を記入することでboolean値を送信できる。

### freeanswer（任意）

ラジオボタンまたはチェックボックス式の設問に、自由記述回答を含める

### placeholder（任意）

placeholderで表示するテキスト。

### initialvalue（任意）

初期値。チェックボックスでの動作は未検証。

### validate（任意）

必須にするかどうか。未設定ならfalse。

true または 'required' を入力すると必須。

[VeeValidateのオプション](https://baianat.github.io/vee-validate/guide/rules.html)を記述することも可能（`'required|email'`など）

