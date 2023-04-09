## default 인수
- 함수를 사용할 때 파라미터가 없을 때 default값을 넣을 수 있다.

```js
주사위의 면이 몇개인지 받는 파라미터
function rollDie(numSides) {
    return Math.floor(Math.random() * numSides) + 1
}
파라미터를 지정해주지 않으면 undefined가 되어버린다.
function rollDie() {
    return Math.floor(Math.random() * numSides) + 1
}
```

**과거에는 이런 방법을 사용했다.**
```js
function multiply(a, b) {
    // 파라미터 b의 타입이 'undefined'가 아닐 겅우 b(받은 값)을 반환
    // 파라미터 b의 타입이 'undefined'일 겅우 1을 반환
    b = typeof b !== 'undefined' ? b : 1;   
    return a * b;
}
```

**현재는 이렇게 좋은 방법을 사용한다 보이는 그대로다.**
```js
function rollDie(numSides = 6) {
    return Math.floor(Math.random() * numSides) + 1
}
```

**아래와 같이 default파라미터를 넣었지만 msg에 인수가 들어가버리기 떄문에**  
**파라미터를 정의하는 순서 역시 중요하다 (전부다 짜고 정한다)**
```js
function greet(msg = '야호~', person) {
    console.log(`${msg} ${person}씨`)
}
console.log(greet('현준')) // 야호~ undefined씨
```
**정상적인 순서**
```js
function greet(person, msg = '야호~'){
    console.log(`${msg} ${person}씨`)
}
console.log(greet('현준')) // 야호~ 현준씨
```

## 전개 구문
- 나열 가능한 인수에 전개하는것이 가능하다.

```js
const nums = [13, 4, 5, 13, 2, 3, 7, 1, 2000];
console.log(Math.max(nums)) // NaN ! number가 아닌 배열을 계산하려 했기떄문

// 여기에 전개 구문을 응용하면
console.log(Math.max(...nums)) // 2000
// nums의 내용물은 변하지 않는다.

// 아래 두 문장은 결과가 같다.
console.log(13, 4, 5, 13, 2, 3, 7, 1, 2000); // 13 4 5 13 2 3 7 1 2000
console.log(...nums);                        // 13 4 5 13 2 3 7 1 2000
```
**[]가 없어진다고 생각하면 편할지도?**  

### 배열의 전개 구문

```js
const cats = ['Tama', 'Tora', 'Momo'];
const dogs = ['Hachi', 'Pochi'];

// 위 두 배열을 합치려면 지금까지는 concat()을 이용하였다.
console.log(cats.concat(dogs)); // ['Tama', 'Tora', 'Momo', 'Hachi', 'Pochi']

// 스프레드 구문을 사용하면 아래와 같다.
const allPets = [...cats, ...dogs]; 
console.log(allPets); // ['Tama', 'Tora', 'Momo', 'Hachi', 'Pochi']

// 하지만 이러면 concat()과 하는일이 같다. 아래에서 다른 예를 보자
console.log([...cats, 'Sakura', ...dogs]);
// ['Tama', 'Tora', 'Momo', 'Sakura', 'Hachi', 'Pochi']
// 이런식으로 간단하게 사이에 다른 요소를 추가하는것도 가능하다!!
```

### 오브젝트의 전개 구문(스프레드)

```js
const feline = {leg: 4, family: '猫'};
const canine = {family: '犬', bark: true};
// 스프레드를 사용하면 복제된다.
const all = {...feline, color: 'grey'};
console.log(all); // {leg: 4, family: '猫', color: 'grey'}

// 스프레드를 사용해 두개의 오브젝트를 불러와 보았다.
const catDog = {...feline, ...canine};
console.log(catDog); // {leg: 4, family: '犬', bark: true}
// 위와같이 결과를 얻었지만 중복되는 키는 나중에 정의된것이 출력된다.

// 반대로 해보면
const catDog = {...canine, ...feline};
console.log(catDog); // {family: '猫', bark: true, leg: 4}
```

```js
// 오브젝트에 배열을 넣어 스프레드를 사용하면 어떻게될까?
const num = {...[2, 4, 6, 8]};
console.log(num); // {0: 2, 1: 4, 2: 6, 3: 8}
// 배열마냥 index와 값이 같이 나온다 이건 문자열의 경우도 같다
const str = {...'Hello'};
console.log(str); // {0: 'H', 1: 'e', 2: 'l', 3: 'l', 4: 'o'}
```

**자바스크립트에서 스프레드는 어떨때 사용할까?**
**자바스크립트에서 오브젝트를 복사하는 일은 정말 많다.**
```js
// 웹 사이트에서 form으로 등록했을때 들어있는 정보라고 친다.
// 만약 이 정보를 서버에서 user로 보존하고싶을때를 가정해본다.
const formData = {
    email: 'lhslhs301@gmail.com',
    password: 'secret',
    username: 'JHJ'
}
// 추가로 정보를 더하고 싶다.
formData.id = 123;
formData.isVerified = false;

const user = formData;
// 이런식이면 user가 정보를 잘못입력해 formData를 다시 가져오라 하면
// id등등 추가정보가 입력된 상태의 formData를 돌려줘서 곤란하다.
```

**스프레드를 이용하면?**
```js
const newUser = {...formData, id: 123, fiVerified: false}
// formData를 직접 수정하는 것이 아닌 스프레드로 나열을 해주면된다.
```


## arguments 오브젝트
- 화살표 함수이외의 모든 함수에 쓸 수 있는 오브젝트
- 배열과 유사한 오브젝트
- 함수에게 받은 인수가 모두 들어있다.

```js
function sum() {
    console.log(arguments); // 0: 1   1: 2   2: 3
}
```

```js
function sum() {
    return arguments.reduce((total, num) => total + num);
}
console.log(sum(1, 2, 3));
// 오류! arguments에 배열과 유사하게 인수가 들어있지만 배열이 아니기때문에 reduce를 사용할 수 없다.
```
## 나머지 매개변수(残余引数)

```js
// ...파라미터는 파라미터를 배열로 변환해준다.
function sum(...nums) {
    console.log(nums);
}
console.log(sum(1, 2, 3)); // [1, 2, 3]
```

```js
// argument가 아닌 ...nums로 배열로 변환을 하면 reduce를 사용할 수 있게된다.
function sum(...nums) {
    return nums.reduce((total, num) => total + num);
}
console.log(sum(1, 2, 3)); // 6
```

**나머지 파라미터를 활용**
```js
function raceResults(gold, silver, ...rest) {
    console.log(`금 : ${gold}`);
    console.log(`은 : ${silver}`);
    console.log(`그 외 : ${rest}`);
}

raceResults('황금', '은장', '동메달', '에메랄드');
```
**결과**
- 금 : 황금
- 은 : 은장
- 그 외 : 동메달,에메랄드

## 분할대입(分割代入)
- 배열의 요소, 오브젝트의 프로퍼티를 별개의 변수로 분할하는 구문

```js
const scores = [923922, 545341, 217744, 477245, 543354, 123584];

// 변수에 배열의 값을 넣으려면 하나하나 선언해서 하나하나 대입해줘야한다
const firstScore = scores[0];
const secondScore = scores[1];

// 분할대입을 사용하면????
const [ gold, silver, ...rest] = scores;
// scores배열의 [0]번 요소가 gold에 [1]번 요소가 silver에 대입된다. (코드가 굉장히 나이스해짐)
// 이전에 배운 나머지 매개변수를 이용하면 마지막 변수의 뒷요소가 출력된다 (위 문장에서는 [2])
```

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
// 역시나 하나하나 선언하기 귀찮다.
const firstName = user.firstName;
const lastName = user.lastName;
// 배열과 다른점은 {}를 사용한다는점과 key의 이름과 동일하게 선언해줘야 한다는 것
const { firstName, lastName, email } = user;
console.log(firstName); // Jo
```
**변수의 이름을 바꾸는 방법**
```js
// key이름: 변수이름 
const { born: birthYear } = user;
console.log(birthYear); // 2000
```

```js
const user2 = {
    email: 'l8124@daum.net',
    firstName: 'fukuyama',
    lastName: 'kyouko',
    born: 2002,
    state: 'Japan'
}
// password는 user2에게 없다 password변수를 확인해보면
const {firstName, lastName, password} = user2;
console.log(password); // undefined
```

```js
// default값을 줘서 해결 가능!
const {firstName, lastName, password = 'N/A'} = user2;
console.log(password); // N/A
```

```js
// user오브젝트의 password에 default로 'N/A'를 정의했지만
const { born: birthYear, password = 'N/A' } = user;

// user는 password를 가지고있기때문에 원래 가지고있던 데이터가 password변수에 대입되었다.
console.log(password); // abcdefg!!
```