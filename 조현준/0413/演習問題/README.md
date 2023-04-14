## inputイベントの演習問題

`index.html`に`<h1>`と`<input type="text">`要素を用意しています。  
`index.html`には変更を加えずに次の要件を満たす実装を`app.js`に書いてください：  

- `h1`は`'Enter Your Username'`というテキストを初期値にします（既にしています）
- `input`イベントが`<input>`要素で発火するたびに、`<h1>`の`中身が`'Welcome, '`と、現在の`input`の値になるようにします
- もし`<input>`の値が空になった場合には、`<h1>`の中を`'Enter Your Username'`に戻します

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Input Event</title>
    <script src="node_modules/babel-polyfill/dist/polyfill.js" type="text/javascript"> </script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>

</head>

<body>
    <h1>Enter Your Username</h1>
    <input type="text" id="username">
</body>

</html>
```

```js
const h1 = document.querySelector('h1');
const input = document.querySelector('input');


input.addEventListener('input', function(e) {
    const inputValue = input.value;
    h1.innerText = `Welcome, ${inputValue}`;
    
    if (input.value === '') {
        h1.innerText = 'Enter Your Username';
    }
})
```