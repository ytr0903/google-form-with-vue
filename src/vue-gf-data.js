var gf_data = {
  doc: 'https://docs.google.com/forms/d/e/1FAIpQLSdxpTP4BSFP5BhEs9Fr9naq0Qn_dlpsdOt30m198NaJ1k_5fA/formResponse',
  survey: [
    {
      name: 971087384,
      label: 'username',
      questiontype: 'text',
      question: '名前',
      placeholder: '山田太郎',
      validate: true
    },
    {
      name: 258860309,
      label: 'email',
      questiontype: 'text',
      question: 'メールアドレス',
      placeholder: 'abcde@example.com',
      validate: 'required|email'
    },
    {
      name: 989251126,
      questiontype: 'text',
      question: '電話番号',
      placeholder: '0123456789',
      validate: 'required|numeric'
    },
    {
      name: 1303555929,
      questiontype: 'pulldown',
      question: '都道府県',
      options: ["北海道","青森県","岩手県","宮城県","秋田県","山形県","福島県","茨城県","栃木県","群馬県","埼玉県","千葉県","東京都","神奈川県","新潟県","富山県","石川県","福井県","山梨県","長野県","岐阜県","静岡県","愛知県","三重県","滋賀県","京都府","大阪府","兵庫県","奈良県","和歌山県","鳥取県","島根県","岡山県","広島県","山口県","徳島県","香川県","愛媛県","高知県","福岡県","佐賀県","長崎県","熊本県","大分県","宮崎県","鹿児島県","沖縄県"],
      validate: 'required'
    },
    {
      name: 2133714093,
      questiontype: 'radio',
      question: '性別',
      options: ['男','女','その他'],
      validate: 'required'
    },
    {
      name: 367145191,
      questiontype: 'radio',
      question: '職業',
      options: ['会社員','公務員','自営業','会社役員','自由業','専業主婦（夫）','学生','パート・アルバイト','無職'],
      freeanswer: 'その他',
      validate: 'required'
    },
    {
      name: 1948891795,
      questiontype: 'checkbox',
      question: '好きなJSフレームワーク',
      options: ['jQuery','React.js','Vue.js','AngularJS'],
      freeanswer: 'その他',
      validate: 'required'
    },
    {
      name: 388885174,
      questiontype: 'textarea',
      question: 'メッセージ',
      validate: 'required'
    },
    {
      name: 632694560,
      questiontype: 'checkbox',
      question: '利用規約への同意',
      options: ['利用規約に同意する'],
      validate: 'required'
    }
  ]
}