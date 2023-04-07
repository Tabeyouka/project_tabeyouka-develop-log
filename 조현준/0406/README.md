## todo list 만들어보기
1. 커맨드를 입력받는다 (prompt)
2. new를 입력하면 todo에 넣을 값을 받는다
 - 새 todo를 입력받는다
 - todo는 배열로 받는다
 - 받은 후에 메뉴로 돌아간다
3. list를 입력하면 todo를 표시
 - index + todo 를 표시
4. delete입력시 삭제
 - splice메서드를 사용해서 삭제
 - 입력값 해피엔딩
5. quit입력시 종료

```js
// 1. 커맨드를 입력받는다 (prompt)
let quit = true;
const todo = [];
while(quit === true) {
    
    let userInput = prompt('커맨드를 입력해주세요 유효 커맨드 : new, list, delete, quit')

    // 2. new를 입력하면 todo에 넣을 값을 받는다
    //  - 새 todo를 입력받는다
    //  - todo는 배열로 받는다
    //  - 받은 후에 메뉴로 돌아간다
    if (userInput === 'new') {
        todo.push(prompt('추가할 todo를 입력해 주세요.'));
    }

    // 3. list를 입력하면 todo를 표시
    //  - index + todo 를 표시
    else if (userInput === 'list') {
        for (let i = 0; i < todo.length; i++ ) {
            console.log(`[${i}] : ${todo[i]}`);
        }
    }

    // 4. delete입력시 삭제
    //  - splice메서드를 사용해서 삭제
    else if (userInput === 'delete' ) {
        todo.splice(parseInt(prompt('삭제할 index를 입력해 주세요.')), 1);
    }
    
    else if (userInput === 'quit') {
        break;
    }
} 
```
<br>

## 함수

### 인수
- 인수를 받아 같은 함수여도 다른 기능을 할 수 있다.
- 함수의 정의
  - function 함수이름(파라미터) { 기능 };
```js
function great(Name) {
    console.log(`이름은 ${Name}`);
}

great(`조현준`); // "이름은 조현준"
```
<br>

### 복수의 파라미터
- 여러개의 파라미터를 받을 수 있다.
```js
function great(Name, age) {
    console.log(`이름은 ${Name} 나이는 ${age}살`);
}

great('조현준', 24);
```
```js
function repeat(str, numTimes) {
    let result = '';
    for (let i = 0; i < numTimes; i++ ) {
        result += str;
    }
    console.log(result);
}

repeat('ㅎㅇ', 3); // ㅎㅇㅎㅇㅎㅇ
```
- 함수를 호출할때 파라미터를 정의한 순서대로 값이 들어간다.

### return
- 함수에서 반환(output)을 배출한다.
- 리턴한 시점에서 함수의 실행이 끝난다.
  
```js
function add(Arg1, Arg2) {
    if (typeof Arg1 !== 'number' || typeof Arg2 !== 'number') {
        return false; // number가 아니면 함수를 종료
    }
    return Arg1 + Arg2;
}
```
- 함수는 무조건 하나의 값을 반환(return)한다.


## 고계함수 高階関数

### 함수를 받은 함수를 반환하는 함수
고계함수는
- 인수로 함수를 받는다.
- 반환값에 함수를 지정한다.

```js
// 받은 함수를 2번 호출하는 함수
function callTwice(func) {
    func();
    func();
}
// 10번 호출
function callTenTimes(f) {
    for (let i = 0; i < 10; i ++) {
        f();
    }
}

function rollDie() {
    const roll = Math.floor(Math.random() * 6) + 1;
    console.log(roll);
}
// callTwice의 파라미터로 rollDie -> rollDie 5회 호출
callTwice(rollDie);
// callTenTimes의 파라미터로 rollDie -> rollDie 10회 호출
callTenTimes(rollDie);
```

```js
function makeBetweenFunc(min, max) {
    return function(num) {
        // 받은 num이 min 이상인지 그리고 max 이하인지 반환하는 함수
        return num >= min && num <= max;
    }
}
// isChild에 makeBetweenFunc(0, 18) 파리미터가 지정된 상태의 함수를 대입
const isChild = makeBetweenFunc(0, 18);
const isAdult = makeBetweenFunc(19, 64);
const isSenior = makeBetweenFunc(65, 120);

// makeBetweenFunc(0, 18)이 들어간 isChile에 num파라미터를 넣어 호출
isChild(20); // false
isAdult(40); // true
isSenior(100); // true
```

## 메서드 정의

```js
const myMath = {
    PI: 3.14,
    // 오브젝트 데이터에 함수를 선언한다.
    square: function(num) {
        return num * num;
    },
    cube: function(num) {
        return num ** 3;
    }
}
// 이렇게 메서드를 정의해서 사용가능하다.
myMath.square(4, 2); // 8
// 기본적으로 . 으로 접근하지만 아래와같은 접근방법도 있다. (잘 안씀)
myMath['cube'](2); // 8 
```
- 사실 오브젝트안의 함수는 아래와 같이 생략형으로 정의가능하다.

```js
const myMath = {
    PI: 3.14,

    square(num) {
        return num * num;
    },
    cube(num) {
        return num ** 3;
    }
}
```

### 메서드의 this
- this의 값은,   
this를 사용하고있는 함수가 "어떻게 호출되고있는지"에 의존한다.

```js
const cat = {
    name: '타마',
    color: 'grey',
    bread: '사향',
    cry() {
        console.log(`${this.name}가 운다.`);
    }
}

const cry2 = cat.cry;

// cat.cry(); 를 호출했을 때 this는 cat이 됨
cat.cry(); // 타마가 운다.

// cry2(); 를 호출했을 때 window에 있는 cry2를 호출해서 this가 날아간것
// 자바스크립트에서 만든 거의 모든것이 window에 들어가있다.
// 자바의 최상위클래스 object클래스와 유사
cry2(); // 가 운다.
```

## try, catch
- 에러가 발생하면 프로그램이 종료된다.
- 프로그램이 종료되지않게 하기위해 try, catch로 예외처리를 해준다.

```js
function shout(msg) {
    console.log(msg.toUpperCase().repeat(3));
}
shout(1); // 에러 발생 !!
```

```js
function shout(msg) {
    // try에서는 이 문장을 일단 실행시킨다 그리고 에러가 발생하면 catch로 넘어간다.
    try {
        console.log(msg.toUpperCase().repeat(3));
    }
    // try에서 오류발생시 catch를 실행한다.
    catch {
        console.log('shout에는 문자열을 넣어주세요.');
    }
}
shout(1); // 'shout에는 문자열을 넣어주세요.'
```
- 무슨 에러가 발생했는지도 받을 수 있다.
```js
function shout(msg) {
    try {
        console.log(msg.toUpperCase().repeat(3));
    }
    // catch에 파라미터를 받는다. 파라미터에 에러가 저장됨.
    catch(err) {
        console.log(err);
        console.log('shout에는 문자열을 넣어주세요.');
    }
}
shout(1);
```