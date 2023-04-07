## push/shift/unshift 연습

```js
const planets = ['The Moon','Venus', 'Earth', 'Mars', 'Jupiter'];

planets.shift(); // ['Venus', 'Earth', 'Mars', 'Jupiter']
planets.push(`Saturn`); // ['Venus', 'Earth', 'Mars', 'Jupiter', `Saturn`]
planets.unshift(`Mercury`); // [`Mercury`, 'Venus', 'Earth', 'Mars', 'Jupiter', `Saturn`]
```

## 배열의 등가성 配列の等価性

```js
[`h1`, `bye`] === [`h1`, `bye`]; // -> false
배열을 비교할때는 메모리 주소값을 비교하기때문에 내용물은 중요하지않다.  

let nums = [1, 2, 3];
   
let numsCopy = nums;
nums배열의 **주소를** numsCopy에게 넘겨준다.  

nums.push(4); (배열 끝에  요소추가)  
  
console.log(numsCopy); // -> [1, 2, 3, 4]  
분명 nums에 4를 추가했는데 numsCopy에도 들어있다.. 이유는  
새로운 배열을 추가한 것이 아닌 numsCopy가 nums의 주소를 가지고있기 떄문이다.  
nums === numsCopy // -> true
```

## 배열과 const
```js
const PI = 3.14;
PI += 1; // 오류! const(상수)

const nums = [1, 2, 3];
nums.push(4);
nums[0] = 9;
console.log(nums); // -> [9, 2, 3, 4]
```
`const`는 상수인데 왜 배열은 값의 변경이 가능할까?  
바꾸는건 `nums`가 아닌 `nums`가 가르키고있는 배열의 값이기 떄문  
아무리 값을 추가, 제거, 변경해도 결국 nums는 배열의 주소를 가르키기만 하고 바뀌는건 없다.  
하지만) `nums = [12, 23, 34];` 는 불가능하다 ! 왜?  
**전혀다른 배열이 생성되어 `nums`가 가르키는 배열의 주소값이 바뀌기떄문.**


## 다차원 배열　多次元配列

```js
const gameBoard = [[`X`, `O`, `X`], [`O`, null, `X`], [`O`, `O`, `X`]];
배열 속에 배열을 넣어 다차원 배열을 생성할 수 있다.
console.log(gameBoard);
// gameBoard[3개의 배열중 접근 할 배열 index][그 배열에서 접근할 요소 index]
console.log(gameBoard[1][1]); // -> null
```

## 오브젝트 オブジェクト
- 오브젝트는 프로퍼티의 집합체
- 프로퍼티는 키와 값의 페어
- indexData에 엑세스 하는것이 아닌 키를 사용해 엑세스
```js
예 )
const a = {
userName    : `yamada`,
upVotes     : 7,
text        : `안녕`
}
```
### 오브젝트 리터럴을 사용해보자 オブジェクトリテラルを使ってみよう
```js
예)
const cat = {
    name:   `Tama`,
    age:    `2`,
    colors: [`orange`, `white`],
    isHungry:   true
}

console.log(cat[`name`]) // Tama
console.log(cat.isHungry) // true
```
  
```js
const years = {
    1999:   `good`,
    2000:   `bad`
}
console.log(years[`1999`]) // good
console.log(years.1999) // good
- 오브젝트의 키는 String으로 변환된다.
- 위와같이 숫자(number)로 키를 정의해도 String으로 변환된다.

console.log(years[1999]) // good
- 그냥 숫자를 넣어도 good이 반환되는 이유는
- 1999가 String으로 변환된 후에 엑세스를 해서 good이 반환된다.
```

