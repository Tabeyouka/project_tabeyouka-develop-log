## mapの演習問題

`firstNames`という変数を定義してください。  
`fullNames`に`map`をかけて、名前（`first`）だけを取り出して`firstNames`に代入してください。  


```js
const fullNames = [{first: 'Albus', last: 'Dumbledore'}, {first: 'Harry', last: 'Potter'}, {first: 'Hermione', last: 'Granger'}, {first: 'Ron', last: 'Weasley'}, {first: 'Rubeus', last: 'Hagrid'}, {first: 'Minerva', last: 'McGonagall'}, {first: 'Severus', last: 'Snape'}];

const firstNames = fullNames.map(function(fullName) {
    return fullName.first;
})
```

## アロー関数の演習問題

**アロー関数の関数式**を`greet`という変数に代入してください。  
人の名前を表すStringを引数として一つ受け取って、  
英語の挨拶のStringを以下のように返してください：  

- greet("Hagrid") //"Hey Hagrid!" 
- greet("Luna") //"Hey Luna!"

```js
const greet = (string) => {
    return `Hey ${string}!`;
}
```

## filterの演習問題

`filter`メソッドの練習をしましょう。  
`validUserNames`という関数を作ってください。  
この関数はStringの配列を引数として受け取って、  
**Stringの長さが10文字未満の値だけが入っている新しい配列を返してください。**  

```js
// 함수이름          매개변수(배열을 받을)
const validUserNames = arr => {
    // arr = ['tanaka', 'suzuki1979', 'q29832128238983', 'hogemoge', 'kimetsu']

    // 변수 = 받은 배열.filter((매개변수) => {})
    // filter는 나열요소에서 하나씩 매개변수에 뽑아온다.
    let answer = arr.filter((num) => {
        // 뽑아온 요소의 길이를 비교
        return num.length < 10;
    });
    // filter를 사용해 새로 만들어진 배열을 반환.
    return answer;
}
```

## someとeveryの演習問題

`allEvens`という関数を定義してください。  
この関数は配列を一つ引数として受け取って、  
**その配列の中身がすべて偶数であれば`true`を返してください。**  
**そうでない場合は`false`を返してください。**  
`some`あるいはeveryメソッドを使いましょう！  

```js
const allEvens = nums => {
    let bol = nums.every(num => num % 2 === 0)
    return bol;
}
```