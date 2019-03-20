# google-form-with-vue
Google Formをオリジナルデザインでサイト内に埋め込んでVue.jsで簡単に実装

## オプション

### name（必須）
<input name="entry.12345678"> の12345678部分を入力

### label（任意）
email, username などの属性を指定することで、ブラウザの補完機能に対応させる

### questiontype（必須）
質問形式。
以下の形式に対応

- text …… 1行入力
- textarea …… 複数行入力
- radio …… ラジオボタン
- checkbox …… チェックボックス（選択肢が1つだけならtrue/false形式で送信）
- pulldown …… プルダウン

### question（必須）
質問項目

### validate（任意）
必須にするかどうか。未設定ならfalse。
true または 'required' を入力すると必須。
VeeValidateのオプションを記述することも可能（'required|email'など）
https://baianat.github.io/vee-validate/guide/rules.html

### placeholder（任意）
placeholder欄に表示するテキスト

### options（質問形式によっては必須）
選択肢から回答する設問（radio、checkbox、pulldown）で必須。
配列形式で入力。

### 

https://baianat.github.io/vee-validate/guide/rules.html