# Google Form with Vue.js

Google Formをオリジナルデザインでサイト内に埋め込んでVue.jsで簡単に実装

## 概要

Google Formで作成したフォームを、iframeなどを使わずに簡単にサイト内に埋め込むためのテンプレートです。

## 使い方

1. Google Formでフォームを作成
1. フォーム画面からname, actionをコピー
1. vue-gf-data.jsのdocに設問・選択肢を入力
1. 必要なCSS・JSをCDNで読み込む

```html
<!doctype html>
<html>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Google Form with Vue.js</title>
<link rel="stylesheet" href="https://unpkg.com/spectre.css/dist/spectre.min.css">
<link rel="stylesheet" href="src/style.css"> <!-- フェードイン・アウトや中央揃え、font-familyなど -->
</head>
<body>
  <main>
    <div id="app" class="container" v-cloak>
      <transition-group name="fade" tag="div" mode="out-in">
        <form
        key="1" v-show="!submitted"
        name="gf_form" method="POST" target="hidden_iframe"
        :action="formdata.doc" @submit.prevent="gf_submit()">
          <listitem v-for="(item, index) in formdata.survey" :item="item" :index="index"></listitem>
          <button class="btn btn-primary input-group-btn btn-lg">送信する</button>
        </form>
        <div key="2" v-show="submitted">
          <p>
            回答を記録しました。<br>
            ご協力ありがとうございました。
          </p>
        </div>
      </transition-group>
    </div>
  </main>
<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/vue@2.6.7/dist/vue.min.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/vee-validate@2.2.0/dist/vee-validate.min.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/vee-validate@2.1.7/dist/locale/ja.js"></script>
<script type="text/javascript" src="src/vue-gf.js"></script>
<script type="text/javascript" src="src/vue-gf-data.js"></script>
</body>
</html>
```

## オプション

### doc（必須）

form action="`https://docs.google.com/forms/d/e/*******/formResponse`"をコピー

### survey

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

checkboxに限り、配列ではなく文字列を記入することでboolean値を送信するスイッチに変更。

### freeanswer（任意）

ラジオボタンまたはチェックボックス式の設問に、自由記述回答を含める

### placeholder（任意）

placeholderで表示するテキスト。

### initialvalue（任意）

初期値。チェックボックスには非対応。

### validate（任意）

必須にするかどうか。未設定ならfalse。

'required' または true を入力すると必須。

[VeeValidateのオプション](https://baianat.github.io/vee-validate/guide/rules.html)を記述することも可能（`'required|email'`など）