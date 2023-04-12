## スタイル操作の演習問題

`index.html`をあらかじめ用意しています。  
`index.html`には変更を加えずに、JavaScript以下の変更を行ってください：  

- `container`というIDの`div`を取得して、JavaScriptで`text-align`を`center`に更新してください
- 画像を取得して、JavaScriptで`width`を`150px`に更新し、`border-radius`を`50%`に更新してください  

```html
<!DOCTYPE html>

<head>
    <meta charset="utf-8">
    <title>Forest</title>
    <script src="node_modules/babel-polyfill/dist/polyfill.js" type="text/javascript"> </script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>

</head>

<body>
   <div id="container">
        <h1>I &hearts; Trees</h1>
        <img src="https://images.unsplash.com/photo-1596328546171-77e37b5e8b3d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80" alt="">
    </div>
</body>

</html>
```

```js
const con = document.querySelector('#container');

con.style.textAlign = 'center';

const img = document.querySelector('img');

img.style.width = '150px';
img.style.borderRadius = '50%';
```

## レインボーテキスト演習問題

7つのspan要素から構成されたh1要素を用意しています。  
- JavaScriptでそれぞれの文字の色を変更して、虹色にしてください
- `app.js`には`colors`という配列を用意しています。  
`['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']`の順番に色を定義しています  
- **`span`要素をすべて取得して、それぞれのテキストの色を`colors`の配列に定義されている順で更新してください。**  
1つ目の`span`は`'red'`、2つ目の`span`は`'orange'`という感じです。結果は下図のようになります：  

```html
<!DOCTYPE html>

<head>
    <meta charset="utf-8">
    <title>Rainbow</title>
    <!--このファイルは編集しないでください-->
    <script src="node_modules/babel-polyfill/dist/polyfill.js" type="text/javascript"> </script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>

</head>

<body>
    <h1>
        <span>R</span>
        <span>A</span>
        <span>I</span>
        <span>N</span>
        <span>B</span>
        <span>O</span>
        <span>W</span>
    </h1>
</body>

</html>
```

```js
const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

const spans = document.querySelectorAll('span');

let colorsCount = 0;
for (let span of spans) {
    span.style.color = colors[colorsCount];
    colorsCount ++;
}

```

## classListの演習問題

`index.html`を用意しています。6つの`<li>`要素があり、  
その中の2つには`'highlight'`クラスが適用されています。  
- JavaScriptのclassListプロパティを使って'highlight'クラスの適用状態を反転してください
（クラスがあれば取り除き、クラスが無ければ適用する）  

```html
<!DOCTYPE html>

<head>
    <meta charset="utf-8">
    <title>ClasList</title>
    <script src="node_modules/babel-polyfill/dist/polyfill.js" type="text/javascript"> </script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>

</head>

<body>
    <ul>
        <li>Hello</li>
        <li class="highlight">Hello</li>
        <li>Hello</li>
        <li>Hello</li>
        <li class="highlight">Hello</li>
        <li>Hello</li>
    </ul>
</body>

</html>
```

```css
li {
  background-color: #B10DC9;
}

.highlight {
  background-color: #7FDBFF;
}
```

```js
const list = document.querySelectorAll('li');

for (let li of list ) {
    li.classList.toggle('highlight');
}
```

## 100個のボタン演習問題

`index.html`を編集することなく、***100個の`button`要素をJavaScriptで作成してください。**  
`button`はすべて`container`のIDを持つ`div`の中に作ってください。  
Udemyの演習問題では`append`は使用できないため、**`appendChild`で実装してください。**  

- 100個の`button`要素を新規に作成
- `button`要素の中には何かしらのテキストを入れてください（何でもOK）
- 各`button`要素は`container`のIDを持つ`div`の中に追加してください

<img src="https://img-c.udemycdn.com/redactor/raw/2020-09-26_22-43-05-f8218e624f61d375d93741189d2f3939.png">

```html
<!DOCTYPE html>

<head>
    <meta charset="utf-8">
    <title>100 Buttons!</title>
    <script src="node_modules/babel-polyfill/dist/polyfill.js" type="text/javascript"> </script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>

</head>

<body>
    <h1>Look At All My Buttons!</h1>
    <div id="container">
    
    </div>
</body>

</html>
```

```js
const con = document.getElementById('container');

for (let i = 0; i < 100; i++ ) {
    const btn = document.createElement('button');
    btn.innerText = 'Hey!';
    con.appendChild(btn);
}
```