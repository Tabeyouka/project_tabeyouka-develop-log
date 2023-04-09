## getElementByIdの演習問題

`getElementById`の練習をしましょう。  
`index.html`にHTMLを用意しています（編集しないでください！）。  
`app.js`で`getElementById`を使って以下を実施してください。  

- `img`要素をIDで取得して`image`という変数に代入してください
- `h1`要素をIDで取得して`heading`という変数に代入してください  

```html
<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8"/>
    <title>Unicorn</title>
</head>

<body>
    <h1 id="mainheading">I &hearts; Unicorns</h1>
    <img id="unicorn" src="https://devsprouthosting.com/images/unicorn.jpg" alt="" width="200px">
</body>

</html>
```

```js
const image = document.getElementById('unicorn');
const heading = document.getElementById('mainheading');
```

## querySelectorの演習問題

querySelectorとquerySelectorAllを使って以下の要素を取得してください。  

- `'done'`クラスが設定されている要素を**すべて**取得して、`doneTodos`という変数に代入してください
- チェックボックスを**一つ**取得して、`checkbox`という変数に代入してください。

```html
<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8"/>
    <title>Todos</title>
</head>

<body>
    <h1>Todos</h1>
    <input type="text" placeholder="新しいTodo">
    <ul>
        <li>水やりをする</li>
        <li class="done">歯磨きをする</li>
        <li class="done">体重を測る</li>
        <li class="done">ランニングする</li>
        <li>ヨガをする</li>
    </ul>
    <label>全部削除する</label>
    <input type="checkbox" id="scales" name="scales" checked>

</body>

</html>
```

```css
.done {
    color: grey;
    text-decoration: line-through;
}
```

```js
const doneTodos = document.querySelectorAll('.done');
const checkbox = document.querySelector('#scales');
```

## HTMLテキスト操作の演習問題

`index.html`にHTMLを用意しました。  
以下を実現するために`app.js`を完成させてください：  

- JavaScriptで「おいしい」を含んでいる`<span>`要素を取得してください
- 「おいしい」というテキストを「**まずい**」にJavaScriptで変更してください

```html
<!DOCTYPE html>

<head>
    <meta charset="utf-8"/>
    <title>Pickles</title>
    <script src="node_modules/babel-polyfill/dist/polyfill.js" type="text/javascript"> </script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>

</head>

<body>
    <h1>ピクルスは<span>おいしい</span></h1>
</body>

</html>
```

```js
document.querySelector('span').innerText = 'まずい';
```


## 属性操作の演習問題

DOM要素の属性を操作しましょう。  
あらかじめ`index.html`でHTMLを用意しています。  
`img`要素をJavaScriptで取得して：  

- `src`を`https://devsprouthosting.com/images/chicken.jpg` に更新してください
- `alt`の内容も`"chicken"`に更新してください

```html   
<h4>どっちが先？</h4>
<img id="egg" src="https://devsprouthosting.com/images/egg.jpg" width="200px" alt="egg">
```

```js
const egg = document.querySelector('img');
egg.setAttribute('src', 'https://devsprouthosting.com/images/chicken.jpg');
egg.setAttribute('alt', 'chicken');
```