**filter() 복습**
- 배열내에 조건을 만족하는 요소를 모아 배열을 만든다.
- 例
```js
const users = [
    {
        name: '조현준',
        age: 24
    },
    {
        name: '최진수',
        age: 25
    },
    {
        name: 이현민,
        age: 15
    }
];

users.filter((user) => {
    return user.age >= 20;
});

결과:
[
    {
        name: '조현준',
        age: 24
    },

    {
        name: '최진수',
        age: 25
    }
]
```



## 화살표함수 복습

**일반적인 함수정의**
```js
const add = function(x, y) {
    return x + y;
}
```

**화살표 함수**

```js
const add = (x, y) => {
    return x + y;
}
```
- 두가지 함수의 기능은 똑같다

```js
// 파라미터가 없어도 (빈 괄호로) 명시
const rollDie = () => {
    return Math.floor(Math.random() * 10) + 1;
}
```


**스프레드 구문 복습**

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

// 스프레드를 이용하면?
const newUser = {...formData, id: 123, fiVerified: false}
// formData를 직접 수정하는 것이 아닌 스프레드로 나열을 해주면된다.

...nums를 파라미터로 지정하면 배열로 변환해준다.
function sum(...nums) {
    console.log(nums);
}

console.log(sum(1, 2, 3)); // [1, 2, 3]

function sum(...nums) {
    return nums.reduce((total, num) => total + num);
}
console.log(sum(1, 2, 3)); // 6


function raceResults(gold, silver, ...rest) {
    console.log(`금 : ${gold}`);
    console.log(`은 : ${silver}`);
    console.log(`그 외 : ${rest}`);
}
raceResults('황금', '은장', '동메달', '에메랄드');
```