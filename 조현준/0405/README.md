## 오브젝트 데이터의 참조방법 データの参照方法
```js
const midterms = {
    taro:   96,
    jiro:   78
}

midterms.jiro = 79;
console.log(midterms.jiro); // {taro: 96, jiro: 79}
// 배열과 마찬가지로 midterms가 오브젝트 주소를 참조하고있다.
```
### 데이터 추가
```js
midterms.saburo // midterms.saburo -> 적용X
midterms.saburo = 120; // 값이 주어졌을때 비로소 오브젝트에 보인다.
midterms[`shiro`] = `A+`; // 대괄호로 새 데이터 추가하기
console.log(midterms); // {taro: 96, jiro: 79, saburo: 120, shiro: 'A+'}
```

### 배열과 오브젝트
```js
const comments = [
    {"username":  `yamada`, text: `오하요`, votes:  9},
    {"username":  `tanaka`, text: `곤니치와`, votes: 12}
]

console.log(comments);

// comments[배열의 1번째].접근할 데이터
console.log(comments[1].text); // `곤니치와`
console.log(comments[0][`text`]); // `오하요`
// 어렵게 생각할 것 없이 배열이면 배열접근 오브젝트면 오브젝트 접근방법을 사용하면된다 :)
```

## 반복문을 이용해 숫자맞추기 게임 작성

```js
// 유저에게 최대수를 입력받는다
let maximum = parseInt(prompt('숫자를 입력해 주십시오'));
// parseInt는 문자를 입력받으면 NaN을 반환한다. NaN은 false기 때문에
// while문을 이용해 재입력,경고를 true가 될때까지 반복 가능하다.
while (!maximum) {
    maximum = parseInt(prompt('문자가 아닌 숫자를 입력해 주십시오'));
}
// Math.random()으로 랜덤값을 생성, 입력받은 숫자를 곱하고 1을 더해 floor로 소수점을 버린다.
const targetNum = Math.floor(Math.random() * maximum) + 1;
let count = 1;

console.log(targetNum);

let guess = prompt('랜덤수를 정했습니다. 숫자를 맞춰주세요');
// 유저 입력값이 target값과 일치할때까지 반복
while (parseInt(guess) !== targetNum) {
    // guess가 `q`일때 게임 종료
    if (guess === `q`) {
        break;
    }
    count ++
    if (guess > targetNum ) {
        guess = prompt('그 숫자보다 작습니다.');
    }
    else {
        guess = prompt('그 숫자보다 큽니다.');
    }
}
if (guess === 'q') {
    console.log(`게임을 종료합니다.`);
}
else {
    console.log(`축하합니다. ${count}번 만에 맞췄습니다.`);
}
```

## for...of 루프
- 열거 가능한 오브젝트에 사용가능
- 배열 뿐만아니라 문자열등등 열거가능하면 사용가능 (문자열이 오브젝트인 이유는 나중에 알아보자)
```js
const subReddits = [`cooking`, `books`, `chickens`, `life`, `pics`];

// subReddits의 길이만큼 반복하며 선언해준 변수에 저장
for (let subReddit of subReddits) {
    console.log(subReddit);
}
```
```js
const seatingChart = [
    [`A`,`B`,`C`],
    [`D`,`E`,`F`],
    [`G`,`H`,`I`]
];
// seatingChart의 길이만큼 반복하며 변수 row에 저장
for (let row of seatingChart) {
    // row의 길이 (예를들어 0번쨰 [`A`,`B`,`C`] -> 3) 번만큼 반복 요소를 Al에 저장
    for (let Al of row) {
        console.log(Al);
    }
}
```

## オブジェクトの中をイテレート(iterate)(반복하다.)

```js
const testScores = {
    ken: 80,
    yuki: 67,
    taro: 89,
    ryota: 91,
    yuko: 74,
    chiaki: 96,
    koki: 60,
    saeko: 69,
    kota: 99
}

for (let x of testScores) {
    console.log(x);
}
오류!  
오브젝트는 원래 열거가능한 요소가 아니라 for...of로 호출 불가능
```

**Object.keys는 오브젝트의 키값을 배열로 만들어준다.**
```js
console.log(Object.keys(testScores));
// ['ken', 'yuki', 'taro', 'ryota', 'yuko', 'chiaki', 'koki', 'saeko', 'kota']
```
```js
// 배열로 바뀐 testScores의 길이만큼반복 , key값(지금은 이름)을 student에 저장
for (let student of Object.keys(testScores)) {
    // {이름}씨는 {데이터}(오브젝트 접근법을 사용)
    console.log(`${student}씨는${testScores[student]}`);
}
```