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
