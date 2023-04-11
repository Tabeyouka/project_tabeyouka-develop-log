## classList
- 요소의 클래스를 추가, 제거, 전환 가능하다
- classList.add
  - 클래스를 추가하는 메서드
```js
const h2 = document.querySelector('h2');
// h2의 classList에 purple을 추가
h2.classList.add('purple');
```
- classList.remove
  - 클래스를 제거하는 메서드
```js
const h2 = document.querySelector('h2');
// h2의 classList에 들어있는 container를 삭제
h2.classList.add('container');
```

- classList.toggle
  - toggle(전환) 해당 클래스가 존재하면 삭제하고 없으면 추가한다.
```js
const h2 = document.querySelector('h2');
// purple은 위에서 추가했으니 삭제됨
h2.classList.toggle('purple');
// container는 위에서 삭제되어 없으니 추가됨
h2.classList.toggle('container');
```

## 부모, 형제, 자식에 관한 프로퍼티
- parentElement
  - 선택한요소.parentElement -> 요소의 부모요소를 반환
- children
  - 선택한요소.children[n] -> 요소의 n번째 자식을 반환
- nextSibling
  - 선택한요소.textSibling -> 형제를 반환하지만 node로 반환하기때문에 정확히는 형제node를 반환
- nextElementSibling
  - 선택한요소.nextElementSibling -> 선택한요소의 다음 요소를 반환 (node아님)
- previousElementSibling
  - 선택한요소.previousElementSibling -> 선택한요소의 이전 요소를 반환
**예제를 올리고싶지만 사진을 업로드하기 힘들다.. 잘 모를땐 다시 예제를보며 실습해보자**


## append와 appendChild  

### appendChild
- 요소를 만들어보자
```js
const newH3 = document.createElement('추가할 요소의 태그'); // 여기서는 h3를 넣었다고 가정
```
- 요소가 추가되었다! 하지만 h3가 추가되었을뿐 내용물은 텅텅비어있다. 내용을 추가해보자!
```js
newH3.innerText = '감자튀김 최고!';
```
- 이렇게 h3에 내용까지 추가되었지만 아직 이 요소의 위치를 지정해주지않았다!
```js
- document.body.appendChild(newH3);
```
- body의 최후미에 '감자튀김 최고'라는 text를 가진 h3요소를 추가하였다!

### append
```js
// 단락요소 p를 선택
const p = document.querySelector('p');
// append는 이런식으로 만들 요소를 지정하지도 내용을 따로 정의하지도 위치를 따로 정의하지도않아도된다.
p.append('キム・ヒョンさんは', '本当にいい人です。'); // 첫번째 p요소의 최후미에 추가
```

## prepend
```js
// 단락요소 p를 선택
const p = document.querySelector('p');
// b요소를 만들어 newB에 대입
const newB = document.createElement('b')
// b요소에 '야호' 추가
newB.append('야호');
// 첫번째 단락요소 p의 첫부분에 newB('야호')를 추가
p.prepend(newB);
```

## insertAdjacentElement
- 형제위치를 기준으로 요소를 추가
- h1을 기준으로 삼아 h2를 추가해보자!
```js
// 위치의 기반이 되어줄 h1을 Select
const h1 = document.querySelector('h1')
// createElement('h2') 로 h2요소를 추가한다. (아직까지 web에서 안보임)
const h2 = document.createElement('h2')
// h2에 '뭐고뭐고'를 추가
h2.append('뭐고뭐고')
// h1의 앞쪽 (h2다음 h1이 오도록) 배치해주는 'beforebegin'
h1.insertAdjacentElement('beforebegin', h2);
// 나머지는 3개는 mdn참조
```

## before, after
- before : 특정 요소의 전 부분에 요소를 삽입
  - 기반으로할 요소.before(넣을요소)
- after : 특정 요소의 다음 부분에 요소를 삽입
  - 기반으로할 요소.after(넣을요소)
**h2뒤에 h3를 추가해보자**
```js
// h3 생성
const h3 = document.createElement('h3')
// h3 text 추가
h3.innerText = '무야호~';
// h2 뒤에 h3추가 (여기서의 h2도 선택 혹은 생성하여 변수에 대입하였기떄문에 .이 사용가능)
h2.after(h3)
```

## removeChild와 remove
- 요소를 삭제하는 메서드

- removeChild : 부모요소에서 removeChild라는 메서드를 불러와서 삭제하는 복잡한 과정이 필요하다.
```js
// 삭제할 요소를 가져온다
const firstli = document.querySelector('li')
// 그 요소의 부모를 가져온다
const ul = firstli.parentElement
// 부모를 이용하여 자식을 삭제한다
ul.removeChild(firstli)
```
- 음.. 많은 과정을 거쳐야한다 좀 못줄일까?
```js
// 삭제할 요소를 가져온다
const b = document.querySelector('b')
// 그 요소의 부모를 가져와 자기자신을 removeChild의 인수로 넣는것이 가능하다.
b.parentElement.removeChild(b)
```
**복잡해!! 귀찮아!!**
- 직관적이고 편리한 **remove**를 사용해보자
```js
// 삭제할 요소를 선택
const img = document.querySelector('img')
// 삭제
img.remove(); // 이걸로 끝
```

