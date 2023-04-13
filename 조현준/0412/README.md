## Event와 this
- addEventListener에서의 this는 추가되는 대상의 요소 자체를 가르킨다.
```js
const makeRandColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r}, ${g}, ${b})`;
}

const buttons = document.querySelectorAll('button');
// 버튼에 클릭시 랜덤하게 색이변경되는 이벤트를 추가
for (let button of buttons) {
    button.addEventListener('click', function() {
        button.style.backgroundColor = makeRandColor();
        button.style.color = makeRandColor();
    })
}

const h1s = document.querySelectorAll('h1');
// h1에 클릭시 랜덤하게 색이변경되는 이벤트를 추가
// 단 this를 사용했다 위 코드와 똑같이 동작한다.
for (let h1 of h1s) {
    this.addEventListener('click', function() {
        this.style.backgroundColor = makeRandColor();
        this.style.color = makeRandColor();
    })
}
```
**이벤트의 콜백함수에 있어서 this는 그 함수가 콜백으로써 설정되어있는 요소가된다.**
```js
const buttons = document.querySelectorAll('button');
const h1s = document.querySelectorAll('h1');

function colorize() {
    this.style.backgroundColor = makeRandColor();
    this.style.color = makeRandColor();
}
// 
for (let button of buttons) {
    button.addEventListener('click', colorize)
}

for (let h1 of h1s) {
    h1.addEventListener('click', colorize)
}

```

**화살표함수의 this는 그 화살표함수가 코드상에 어디에 정의되어있는가로 결정된다.**
```js
for (let h1 of h1s) {
    // 이곳의 this는 windows
    this // <-이곳의 this와
    h1.addEventListener('click', () => {
        // 이곳의 this가 화살표함수의 경우 같아지기때문에 요소가될수없다.
        this.style.backgroundColor = makeRandColor();
        this.style.color = makeRandColor();
    }) 
}
```
## 키보드이벤트와 이벤트 오브젝트
- 사실 콜백함수에는 이벤트오브젝트라는 파라미터가 사용하지않아도 들어있다.
- 이벤트오브젝트의 안에는 이벤트가 일어났을때의 정보가 들어있다.
```js
document.querySelector('button').addEventListener('click', function(evt) {
    console.log(evt); // event오브젝트 출력
});
```

- event오브젝트의 key, code에 접근해보자
- 키보드이벤트는 키와 코드라는 프로퍼티가있다.
  - 눌린키가의 문자가 key: 눌린키의 위치가 code:
```js
const input = document.querySelector('input');
input.addEventListener('keydown', function(e) {
    console.log(`key: ${e.key}`); // 눌린 키의 문자
    console.log(`code: ${e.code}`); // 눌린 키가 어느위치의 키인지
    // a를 누른다면 key: a  code: KeyA
})
```
- keydown(키보드가 눌렸을 때) 이벤트를 추가
```js
// 사실 최상위 window에도 이벤트를 추가할 수 있다.
// html에서의의<html>과 유사하게 모든곳에 적용가능
window.addEventListener('keydown', function(e) {
    // e.code(입력한 키의 위치)
    switch(e.code) {
        case 'ArrowUp':
            console.log('위');
            break;
        case 'ArrowDown':
            console.log('아래');
            break;
        case 'ArrowLeft':
            console.log('왼쪽');
            break;
        case 'ArrowRight':
            console.log('오른쪽');
            break;
        default:
            console.log('그외의 키')
    }
});
```

## form(폼)(フォーム)이벤트와 preventDefault
```html
<body>
    <h1>Form 이벤트</h1>

    <form id="twForm" action="/hoge">
        <input type="text" name="username" placeholder="유저명">
        <input type="text" name="tw" placeholder="머하농">
        <button>등록</button>
    </form>

    <h2>스레드 목록</h2>
    <ul id="sd">
        
    </ul>
</body>
```

- submit
  - form의 이벤트
  - submit이 발동되면 form의 action에 지정된 장소에 리퀘스트를 던진다
  - 리퀘스트를 던져 돌아온 리스폰스로 화면을 재구성한다.
```js
const tweetForm = document.querySelector('#twForm');
tweetForm.addEventListener('submit', function(e) {
    // 출력되고 0.00001초보다빠르게 페이지가 바뀌어 사실상 console.log가 표시된 페이지는 없다.
    console.log('submit!!'); 
});
```
- preventDefault
  - preventDefault() 메서드는 default동작을 없애준다. (리퀘스트를 던지지 않음)
```js
const tweetForm = document.querySelector('#twForm');
tweetForm.addEventListener('submit', function(e) {
    e.preventDefault();
    console.log('submit!!');
});
```
### form에서 입력한 값을 사용해보자

```js
document.querySelectorAll('input')[0] // html의 0번째 input요소
document.querySelectorAll('input')[0].value // 0번째 input요소안에 들어있는 값
```

```js
const tweetForm = document.querySelector('#twForm');
tweetForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const username = document.querySelectorAll('input')[0]; // 1번째 input
    const tweetInput = document.querySelectorAll('input')[1]; // 2번째 input
    console.log(username.value); // username에 입력한 값
    console.log(tweetInput.value); // tweetInput에 입력한 값
});
```
**위와같은 방법을 사용하면 input이 점점 늘어날수록 코드가 흉해진다..**

- html에서 지정해준 name으로 매핑이 가능하다!!
```js
// username이라는 name을 가진 요소의 value!
console.log(tweetForm.elements.username.value); 
```

```js
const tweetForm = document.querySelector('#twForm');
const tweetContainer = document.querySelector('#sd')
tweetForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const username = tweetForm.elements.username.value;
    const tweet = tweetForm.elements.tw.value;

    // li태그 생성
    const newTweet = document.createElement('li');
    // b태그 생성
    const bTag = document.createElement('b');
    // b태그에 username(입력값)추가 (bold처리)
    bTag.append(username);
    // 그 b태그를 newTweet(li)에 추가
    newTweet.append(bTag);
    // newTweet에 tweet(입력값)을 추가
    newTweet.append(` - ${tweet}`);
    // newTweet을 ul(tweetContainer)에 삽입!
    tweetContainer.append(newTweet);
});
```
**코드가 보기흉해지기 시작했다.. 함수를 사용해보자**
```js
const tweetForm = document.querySelector('#twForm');
const tweetContainer = document.querySelector('#sd')
tweetForm.addEventListener('submit', function(e) {
    e.preventDefault();
    // 요소자체를 대입하게 바꾸었다.
    const usernameInput = tweetForm.elements.username;
    const tweetInput = tweetForm.elements.tw;

    addTweet(usernameInput.value, tweetInput.value);

    usernameInput.value = '';
    tweetInput.value = '';
});

const addTweet = (username, tweet) => {
    const newTweet = document.createElement('li');
    const bTag = document.createElement('b');
    
    bTag.append(username);
    newTweet.append(bTag);
    newTweet.append(` - ${tweet}`);
    tweetContainer.append(newTweet);
}
```
**button을 click하는 것이 아닌 submit을 이용한 이유**
- input에 뭔가를 입력하고 엔터를 입력하면 submit이벤트가 발생한다
- 버튼을 사용하지않아도 같은 처리가 가능하도록 submit을 사용한 것