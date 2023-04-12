## addEventListener
- 이벤트의 종류와, 실행하는 콜백 함수를 지정

```js
const btn3 = document.querySelector('#v3');
// 이벤트의 종류 : click시 / 실행하는 콜백함수
btn3.addEventListener('click', function() {
    alert('클릭!!');
})
// 이벤트는 정말 다양하다 mdn의 이벤트 레퍼런스를 확인!
```

```js
function scream() {
    console.log('으아아아아아아아아악');
    console.log('이야아아아아아아아악');
}

const btn3 = document.querySelector('#v3');
// 미리 정의된 함수를 사용하는 것도 가능하다 scream() 괄호가 붙으면 함수가 클릭했을때가 아닌 그자리에서 실행된다.
btn3.addEventListener('click', scream)
```

- 어째서 이 방법이 뛰어난걸까?
```js
function hoge() {
    console.log('hoge');
}

function moge() {
    console.log('moge');
}

const btn4 = document.querySelector('#v4');
btn4.onclick = hoge; // moge가 마지막으로 대입되어 hoge는 없다.
btn4.onclick = moge; // click시 moge()호출
```
- addEventListener를 사용하면?
```js
btn4.addEventListener('click', hoge); // 말그대로 이벤트를 추가
btn4.addEventListener('click', moge); // + 추가 하기때문에 여러 이벤트를 추가할 수 있다.
```
- 추가로 옵션을 넘겨줄 수 있다.
```js
// 세번째 파라미터로 {once: true}라는 옵션을 추가했다.
// 이 옵션은 단 한번만 버튼을 클릭할 수 있게 만들어준다.
btn4.addEventListener('click', hoge, {once: true});
btn4.addEventListener('click', moge, {once: true});
```
- removeEventListener로 특정 이벤트를 특정 상황에 발동하지않게 할수있다.

## 버튼클릭시 랜덤으로 배경색이 바뀌는 페이지를 만들어보자
1. 지금까지 배운것들로 충분히 가능하니 스스로 해볼것
2. 버튼을 클릭하면 body의 backgroundColor가 랜덤으로 변경
3. h1의 문자가 랜덤으로 바뀐 backgroundColor의 rgb값을 표시

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script defer src="./main.js"></script>
</head>
<body>
    <h1 id="rgb">255, 255, 255</h1>
    <button id="change">여기를 눌러</button>
</body>
</html>
```
### 내 코드
```js
const h1 = document.querySelector('#rgb');
const button = document.querySelector('#change');

button.addEventListener('click', function() {
    const random1 = Math.floor(Math.random() * 256);
    const random2 = Math.floor(Math.random() * 256);
    const random3 = Math.floor(Math.random() * 256);
    
    h1.innerText = `${random1}, ${random2}, ${random3}`;
    document.body.style.backgroundColor = `rgb(${random1},${random2},${random3})`;
})
```

### 강사님 코드
```js
button.addEventListener('click', function() {
    const newColor = makeRandomColor();

    document.body.style.backgroundColor = newColor;
    h1.innerText = newColor;
})
const makeRandomColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    return `rgb(${r}, ${g}, ${b})`;
}
```
- 변수의 이름을 의미있게 사용하여 가독성을 높이심
- 함수를 만들어 재사용률을 높이고 코드가 간결해져 가독성을 높히심

