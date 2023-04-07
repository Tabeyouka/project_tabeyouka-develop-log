## forEach 메서드
- forEach() 메서드는 주어진 함수를 배열 요소 각각에 대해 실행합니다.

- 매개변수
- current
  - Value 처리할 현재 요소.
- index 
  - 처리할 현재 요소의 인덱스.
- array 
  - forEach()를 호출한 배열.

```js
const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];


function print(element) {
    console.log(element);
}

print(number[0]);
print(number[1]);
// forEach는 함수를 받아서 그 함수를 배열의 요소 하나하나에 대입해준다.
number.forEach(function (element) {
    console.log(element);
});

for (let elem of number) {
    console.log(elem);
}
```

```js
const movies = [ 
    {
        title: 'Amadeus',
        score: 99
    },
    
    {
        title: 'Stand By Me',
        score: 85
    },
    
    {
        title: 'Parasite',
        score: 95
    },
    
    {
        title: 'Alien',
        score: 90
    }
]

// Amadeus = 99/100
// forEach가 하나의 요소해대해 함수를 실행 함수내용은 아래와 같음
movies.forEach(function(movie) {
    console.log(`${movie.title} - ${movie.score}/100`)
})
// for...of 가 나온이후로는 위와같이는 잘 쓰지않는다. (String에서도 사용가능하기떄문에)
```

## map 메서드
- call back 함수

```js
const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

// 함수에 number의 요소가 하나하나 들어온다. 파라미터(num)
// map이 return하는건 number와 다른 완전히 새로운 배열이다.
const double = number.map(function(num) {
    return num * 2;
})

console.log(double);
// double = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40]
// number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
```

```js
const movies = [ 
    {
        title: 'Amadeus',
        score: 99
    },
    
    {
        title: 'Stand By Me',
        score: 85
    },
    
    {
        title: 'Parasite',
        score: 95
    },
    
    {
        title: 'Alien',
        score: 90
    }
]

const mvTitle = movies.map(function(movie) {
    return movie.title;
})

console.log(mvTitle);
// ['Amadeus', 'Stand By Me', 'Parasite', 'Alien']
```

## 화살표 함수
- 인터넷 익스플로러에서 사용 불가

```js
일반적인 함수 식
const add = function(x, y) {
    return x + y;
}

화살표 함수를 사용
const add = (x, y) => {
    return x + y;
}

const square = (num) => {
    return num ** 3;
}
console.log(square(2)); // 8
```

```js
파라미터가 없는 경우에도 명시적으로 ()를 붙혀줘야함
const rollDie = () => {
    return Math.floor(Math.random() * 10) + 1; 
}

파라미터가 하나인 경우는 괄호를 생략하고 파라미터 이름만 적어줘도된다!.
const square = num => {
    return num ** 3;
}
```

### 암묵적인 리턴

```js
암묵적인 리턴으로 아래와같이 더 생략해서 적을 수 있다.
()를 이용하면 하나의 값만 돌아온다.
const rollDie = () => (
    Math.floor(Math.random() * 10) + 1
)
여기서 더! 더! 생략을 하면 ()자체를 없애버릴 수 있다!!
그러면 아래와같이 파격적인 길이가 나온다..
const add = (x, y) => x + y;
```
**하지만 이러한 생략형은 회사의 판단, 혹은 적재적소에서 사용할때 유효하다..(전부 생략한다고 좋은게 아님)**  
**암묵적인 리턴은 하나밖에 식이 없다. (평가하는 것) 아래는 쓰래기코드**
```js
const rollDie = () => (
    Math.floor(Math.random() * 10) + 1;
    x + y;
)
// <!-- 불가능!!!! -->
```

## setTimeout과 setInterval
- setTimeout, setInterval도 call back 함수다.

```js
// setTimeout(함수, 얼마나 기다리는지)
setTimeout(() => {
    console.log('야호~~');
}, 3000);
// 3초기다리고 야호~ 출력

setInterval(함수, 몇초마다 실행하는지)
setInterval(() => {
    console.log(Math.random());
}, 2000);
```

```js
// setInterval을 멈추는 메서드 clearInterval()
// setInterval은 실행될때 ID를 발행한다.
// clearInterval은 setInterval의 ID를 이용해 특정 setInterval을 정지시킨다.
const id = setInterval(() => {
    console.log(Math.random());
}, 2000);
clearInterval(id); // 정지
// clearTimeout()도 있다.
```

## filter 함수
- 조건에 맞춰 새로운 배열을 반환하는 call back함수

```js
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

// 10 보다 작은 수를 가진 배열을 반환.
numbers.filter((num) => {
    return num < 10;
}) 
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
        score: 95,
        year: 2004
    },
    
    {
        title: 'Alien',
        score: 90,
        year: 1995
    },
    {
        title: 'Attack On titan',
        score: 95,
        year: 2015
    }
]

// 80점 이상인 영화 목록을 goodMovies에 저장
const goodMovies = movies.filter(movie => {
    return movie.score > 80;
})

console.log(goodMovies);
// 0 : {title: 'Amadeus', score: 99, year: 1984}
// 1 : {title: 'Stand By Me', score: 85, year: 2013}
// 2 : {title: 'Parasite', score: 95, year: 2004}
// 3 : {title: 'Alien', score: 90, year: 1995}
// 4 : {title: 'Attack On titan', score: 95, year: 2015}

const recentMovies = movies.filter((year) => {
    return year.year > 2000
})
console.log(recentMovies);
```

```js
// map과 연계해서 사용할 수 있다.
// 80점 이상인 movies에서 title만을 뽑아 goodMovies에 대입
const goodMovies = movies
    .filter(movie =>movie.score > 80)
    .map(movie => movie.title);

console.log(goodMovies);
// ['Amadeus', 'Stand By Me', 'Parasite', 'Alien', 'Attack On titan']
```

## every와 some
- map과는 다르게 boolean을 반환한다.
- every : 모든 요소가 callback함수를 만족하면 true를 반환.
```js
const exams = [80, 98, 92, 89, 72, 83, 81, 66, 62]

const test = exams.every(exam => exam >= 75);
console.log(test); // false
```
- some : 요소중에서 하나라도 callback함수를 만족하면 true를 반환.
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
        score: 95,
        year: 2004
    },
    
    {
        title: 'Alien',
        score: 90,
        year: 1995
    },
    {
        title: 'Attack On titan',
        score: 95,
        year: 2015
    }
]

// 2015이상인 영화가 **하나라도 있으면** true를 반환!
const newMovie = movies.some(movie => movie.year >= 2015);
console.log(newMovie); // true
```

## reduce 메서드

```js
const prices = [980, 1500, 1980, 4980, 2980];
// // 12420
let total = 0;
for (let price of prices) {
    total += price;
}

console.log(total);

// 12420
const total = prices.reduce((total, price) => {
    return total + price;
})
console.log(total);

const minPrice = prices.reduce((min, price) => {
    if (min > price) {
        return price;
    }
    return min;
})

console.log(minPrice);
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

const bestMovie = movies.reduce((maxScore, movie) => {
    if (maxScore.score < movie.score){
        return movie;
    }
    return maxScore;
})

console.log(bestMovie);
```

```js
const evens = [2, 4, 6, 8];
// call back함수 뒤에 들어가는 파라미터는 (초기값)이다 
const sum = evens.reduce((sum, num) => sum + num, 50);

console.log(sum); // 70
```


## 화살표 함수의 this
- 화살표 함수는 자신이 정의된 주변의 scope에 있는 this가 된다. (바깥은 window)
```js
const person = {
    firstName: 'taro',
    lastName: 'yamada',
    fullName: function() {
        return `${this.lastName} ${this.firstName}`
    }
}
console.log(person.fullName()); // yamada taro
```

```js
// window
console.log(this);

// 화살표 함수는 자신이 정의된 주변의 scope에 있는 this가 된다. (아래의 경우 person의 밖)
const person = {
    firstName: 'taro',
    lastName: 'yamada',
    fullName: function() {
        return `${this.lastName} ${this.firstName}`
    },
    // 2초 딜레이를 주고 fullName 함수를 호출
    delayName: function() {
        // !! 에러 !!
        // setTimeout(function() {
        //     console.log(this.fullName())
        // },2000); 
        // 에러!! 이 코드에서 this가 가리키는건 window

        setTimeout( () => {
            console.log(this.fullName())
        },2000);
        // 화살표 함수는 주변의 scope에 있는 this를 가리켜 이 경우엔 fullName함수가 된다.
    }
}

console.log(person.delayName()); // yamada taro
```