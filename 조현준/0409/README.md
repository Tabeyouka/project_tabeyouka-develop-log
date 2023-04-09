## 함수의 파라미터 (분할대입)

```js
const user = {
    email: 'lhslhs301@gmail.com',
    password: 'abcdefg!!',
    firstName: 'Jo',
    lastName: 'HyeonJun',
    born: 2000,
    city: 'deagu',
    state: 'Republic of Korea'
}
// 분할대입을 사용하지 않음
function fullName(user) {
    return `${user.firstName} ${user.lastName}`;
}
console.log(fullName(user)); // Jo HyeonJun

// 분할대입을 사용
function fullName(user) {
    const {firstName, lastName} = user;
    return `${firstName} ${lastName}`;
}
console.log(fullName(user)); // Jo HyeonJun

파라미터에 분할대입을 할 수있다.(default도 설정가능)
function fullName({firstName, lastName}) {
    return `${firstName} ${lastName}`;
}
console.log(fullName(user)); // Jo HyeonJun
```

```js
const movies = [ 
    {
        title: 'Amadeus',
        score: 99,
        year: 1984
    },
    
    {
        title: 'Stand By Me',
        score: 85,
        year: 2013
    },
    
    {
        title: 'Parasite',
        score: 92,
        year: 2004
    },
    
    {
        title: 'Alien',
        score: 90,
        year: 1995
    },
    {
        title: 'Attack On titan',
        score: 100,
        year: 2015
    }
]
// 분할대입을 사용하지않은 구문
movies.filter(movie => movies.score >= 90);
// 분할대입을 사용한 구문 score를 직접 가져오기에 movies.이 필요없다.
movies.filter(({score}) => score >= 90);
// 0: {title: 'Amadeus', score: 99, year: 1984}
// 1: {title: 'Parasite', score: 92, year: 2004}
// 2: {title: 'Alien', score: 90, year: 1995}
// 3: {title: 'Attack On titan', score: 100, year: 2015}

// 분할대입을 사용하지않은 구문
movies.map(movie => {
    return `${movie.title}(${movie.year}): ${movie.score}/100`;
})
// 분할대입을 사용한 구문
movies.map(({title, year, score}) => {
    return `${title}(${year}): ${score}/100`;
})
```

## DOM 입문
- Document Object Model
- 웹 페이지를 나타내는 자바스크립트의 모음
- CSS의 선택자와 유사하다 (특정 요소를 선택해서 프로퍼티를 준다는 점)

### getElementById
- 대상으로 할 요소의 html Id를 선택
- 기본 형태
  - const 변수 = document.getElementById('Id');

### getElementsByTagName, getElementsByClassName
- Elements (해당되는 모든 요소를 선택한다)
- TagName은 태그의 이름, ClassName은 클래스 이름
- 변수에 담은 요소는 배열로 보이지만 배열이 아니다 map같은 함수는 사용불가능
- 대신 length는 있다!
**img태그를 가진 모든 요소를 선택**
```js
const allImages = document.getElementsByTagName('img');
// allImages의 length만큼 반복하여 각img의 src(주소)를 출력
for (let img of allImages) {
    console.log(img.src);
}
```
**클래스이름이 square인 모든 요소를 선택**
```js
const squareImages = document.getElementsByClassName('square');
// squareImages의 length만큼 반복하여 각 img의 src를 임의의 이미지로 변경 (이럴경우 모든 요소가 같은 이미지로 변함)
for (let img of squareImages) {
    img.src = 'https://images.unsplash.com/photo-1563281577-a7be47e20db9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80';
}
```

### querySelector
- 비교적 최근 등장
- 편리하게 요소를 선택할 수 있다.
- 처음 발견한 하나를 선택
- 기본형태
  - document.querySelector('div , .square, #banner, img:nth-of-type(3), a[title="ヒツジ"]');
  - 순서대로 tag, class, id, 가상요소, a태그의title

### querySelectorAll
- 모든 요소를 선택하는 querySelector

**p태그의 형제요소 a를 모두 선택**
```js
const links = document.querySelectorAll('p a');
// 각 요소의 href를 출력
for (let link of links) {
    console.log(link.href);
}
```
### innerHTML, textContent, innerText
- textContent는 모든 요소의(숨겨진) 내용을 습득해서 표시한다.
- innerText는 페이지에서 보이는 내용을 습득해서 표시한다.
```js
const allLinks = document.querySelectorAll('a');

for (let link of allLinks) {
    link.innerText = '나는 링크다!!!!!';
}
```
```html
<p>
    ニワトリという和名は「<a href="/wiki/%E5%BA%AD" title="庭">나는 링크다!!!!!</a>に飼う鳥」、
    つまり家禽という意味から名づけられた<sup id="cite_ref-Sankaido_1-0" class="reference"><a href="#cite_note-Sankaido-1">나는 링크다!!!!!</a></sup>。ニワトリは普通「鶏」と書かれるが、「家鶏」で「にわとり」と充てることもある<sup id="cite_ref-Nandoku_2-0" class="reference"><a href="#cite_note-Nandoku-2">나는 링크다!!!!!</a></sup>。ニワトリは古くは<b>カケ</b>（鶏）と呼ばれた<sup id="cite_ref-Nandoku_2-1" class="reference"><a href="#cite_note-Nandoku-2">나는 링크다!!!!!</a></sup>。代表的な鳥であるため、単に「とり」ともよばれる<sup id="cite_ref-Shincho_3-0" class="reference"><a href="#cite_note-Shincho-3">나는 링크다!!!!!</a></sup>。雄のニワトリは「<b>雄鶏</b>（牡鶏）」（<b>おんどり</b>）、雌のニワトリは「<b>雌鶏</b>（牝鶏）」（めんどり）と呼ばれる<sup id="cite_ref-Nandoku_2-2" class="reference"><a href="#cite_note-Nandoku-2">나는 링크다!!!!!</a></sup><sup id="cite_ref-Shincho_3-1" class="reference"><a href="#cite_note-Shincho-3">나는 링크다!!!!!</a></sup>。
  </p>
```
어디까지나 보이는 것이 바뀌었을뿐 링크가 바뀌거나 하진않았다.

- innerHTML은 html을 포함해서 습득한다.
```js
document.querySelector('h1').innerText
// ABCD
```
```js
document.querySelector('h1').innerHTML
// <h1>ABCD</h1>
```

### 속성을 조작하는 getAttribute setAttribute
- getAttribute : 속성의 값을 가져오는 것이 가능하다.
```js
const firstLink = document.querySelector('a');

firstLink.getAttribute('href')
// '/wiki/%E5%BA%AD'
firstLink.getAttribute('title')
// '庭'
```

- setAttribute : 속성의 값을 바꾸는 것이 가능하다.
```js
const firstLink = document.querySelector('a');

// 첫번째 a태그의 링크(href)를 google로 변경
firstLink.setAttribute('href', 'https://google.com')
```

```js
// 특정 요소를 가져오는 방법

// 모든 input요소중 index가 [1]인 요소 선택
document.querySelectorAll('input')[1]
// 하나의 input요소를 선택 근데이제 type이 text인
document.querySelector('input[type=text]')

// 속성을 변경해보자
const input = document.querySelector('input[type=text]')
input.type
// 'text'

input.type = 'password';
// 'password'

input.setAttribute('type', 'text');
// 'text'
```

### getComputedStyle
- style을 변경하는 것이 가능하다.
- 최종적으로 적용된 스타일을 가져온다.
- getComputedStyle(여기)에 넘기는건 요소의 오브젝트다 (선택자X)

```js
const h1 = document.querySelector('h1');

getComputedStyle(h1).color
// 'rgb(128, 0, 128)'
getComputedStyle(h1).fontSize
// '32px'
getComputedStyle(h1).fontFamily
// '"Apple SD Gothic Neo"'
```


