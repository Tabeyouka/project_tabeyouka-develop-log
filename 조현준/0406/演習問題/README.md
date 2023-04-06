## パラメータを使った関数の演習問題

`shout`という関数を作成し、`message`というパラメータを受け取れるようにしてください。  
この関数には英語の`message`が渡されると過程して、  
3回console.logで、`message`を**大文字に変換した内容**を出力してください。  
例えば、shout('hello world')が実行されたら以下が出力されます：  
- HELLO WORLD
- HELLO WORLD
- HELLO WORLD

```js
function shout(message) {
    for(let i = 0; i < 3; i++ ) {
        console.log(message.toUpperCase());
    }
}
```

## 複数パラメータの関数の演習問題

`isSameNumbers`という関数を作って、2つの引数を受け取れるようにしてください。 
2つの引数が両方とも同じ数字であれば`'ゾロ目'` と出力してください。 
そうでない場合は`'ゾロ目じゃない'`と出力してください。  

- isSameNumbers(1,1) //ゾロ目
- isSameNumbers(1,5) //ゾロ目じゃない
- isSameNumbers(4,5) //ゾロ目じゃない
- isSameNumbers(3,3) //ゾロ目

```js
function isSameNumbers(Arg1, Arg2) {
    if (Arg1 === Arg2) {
        console.log("ゾロ目");
    }
    else {
        console.log("ゾロ目じゃない");
    }
}
```

## 戻り値の演習問題

`multiply`という関数を作ってください。  
2つの数字を受け取って、その数字の乗算した値を`return`してください。  

```js
function multiply(Arg1, Arg2) {
    return Arg1 * Arg2;
}
```

## isShortsWeather Function

短パンででかけても良いような気温かどうかを判断する`isShortsWeather`という関数を作ってください！  

- パラメータは一つ受け取る関数にしてください。例えば`temperature`など

- `temperature`が**25以上**であれば、`true`を`return`してください

- そうでなければ`false`を`return`してください

```js
function isShortsWeather(temperature) {
    if (temperature >= 25) {
        return true;
    }
    return false;
}
```

## lastElement演習問題

`lastElemen`tという関数を作ってください。  
関数は一つの配列を引数として受け取ります。  
そして、受け取った配列の最後の要素を返してください。  
もし配列が空の場合は、関数は`null`を返してください。  

```js
function lastElement(Arg) {
    if (Arg.length === 0) {
        return null;
    }
    
    return Arg[Arg.length - 1];
}
```

## capitalize演習問題

`capitalize`という関数を作ってください。  
この関数は一つのStringを引数として受け取り、  
そのStringの**最初の文字を大文字にし**た値を返します。  

```js
function capitalize(Arg) {
    let Up = Arg.slice(0, 1).toUpperCase();
    let Down = Arg.slice(1);
    
    return Up + Down;
}
```

## 配列内の和を求める演習問題

`sumArray`という関数を定義してください。  
数字で構成された一つの配列を引数として受け取ります。  
そして、配列内の数字の和を返してください。  

```js
function sumArray(Arg) {
    let result = 0;
    for (let i = 0; i < Arg.length; i++ ) {
        result += Arg[i];
    }
    
    return result;
}
```

## 曜日を返す関数の演習問題

`returnDay`という関数を作ってください。  
この関数は一つの数字を引数として受け取ります（`1`から`7`の値）。  
そして、`1`から`7`に対応した曜日を返します（`1`なら`Monday`、`2`なら`Tuesday`、etc.）  
し数字が`1`より小さい、あるいは`7`より大きい場合は`null`を返します。  

```js
function returnDay(Arg) {
    const week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    if (Arg <= 0 || Arg >= 8) {
        return null;
    }
    return week[Arg - 1];
}
```

## 関数式の演習問題

数字の2乗した値を返す関数を定義してください。  
**関数は関数式で定義して、squareという変数に代入してください。**  

```js
const square = function (Arg) {
    return Math.pow(Arg, 2);
}
```

## メソッドの演習問題

`square`というオブジェクトを定義して、  
`area`と`perimeter`というメソッドをもたせてください。  

- `area`は`side`という引数を一つ受け取って、`side`を2乗した値を返します

- `perimeter`は`side`を受け取って、4を乗算した値を返します

```js
const square = {
    area(side) {
        return Math.pow(side, 2);
    },
    perimeter(side) {
        return side * 4;
    }
}
```

## メソッドのthisの演習問題

`hen`というオブジェクトを定義してください。  
2つのプロパティと、1つのメソッドを定義してください：  

- `name`は`'Helen'`にしてください

- `eggCount`は`0`にしてください

- `layAnEgg`というメソッドを定義してください。   
このメソッドは、自分の`eggCount`を`1`加算して、   
`'EGG'`という文字列を`return`してください。（`this`を使う必要があります）   

```js
const hen = {
    name: 'Helen',
    eggCount: 0,
    layAnEgg() {
        this.eggCount ++;
        return 'EGG';
    }
}
```