## Promise의 진정한 힘

```js
// Promise版
const fakeRequestPromise = (url) => {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * (4500)) + 500;
        setTimeout(() => {
            if (delay > 4000) {
                reject('コネクションタイムアウト')
            } else {
                resolve(`ダミーデータ(${url})`)
            }
        }, delay)
    })
}

// page1성공시 then
fakeRequestPromise('yelp.com/api/coffee/page1')
    .then((data) => {
        console.log('성공1');
        console.log(data); // ダミーデータ(yelp.com/api/coffee/page1)
        // page2성공시 then
        return fakeRequestPromise('yelp.com/api/coffee/page2')
    })
    .then((data) =>{
        console.log('성공2');
        console.log(data); // ダミーデータ(yelp.com/api/coffee/page2)
        // page3성공시 then
        return fakeRequestPromise('yelp.com/api/coffee/page3')
    })
    .then((data) =>{
        console.log('성공3');
        console.log(data); // ダミーデータ(yelp.com/api/coffee/page3)
    })
    .catch((err) => {
        console.log('실패!!!!!!');
        console.log(err); // コネクションタイムアウト
    });
```
- promise는 신이다..
- 반환된 fakeRequestPromise를 다음 then이 받는다.
- 문제가 일어난경우 그 문제를 catch하기위해 catch메서드를 적어 call back

### 자작 promise

```js
// Promise오브젝트의 파라미터 resolve, reject 이름은 바꿔도 상관없다. (이게 자주쓰임)
// resolve : 성공했을경우 호출  reject : 실패했을경우 호출
new Promise((resolve, reject) => {
    
})
```

```js
const fakeRequest = (url) => {
    return new Promise((resolve, reject) => {
        const rand = Math.random();
        setTimeout(() => {
            // resolve한뒤 함수가 끝나야하기때문에 return을 해주던 else문을 써주던지 처리해준다.
            if (rand < 0.7) {
                // 성공시 resolve
                resolve('더미데이터');
                // return
            }
            else {
                // 실패시 reject
                reject('커넥션 타임아웃');
            }
        }, 1000)
    })
}

fakeRequest('/hoge')
    .then((data) => {
        console.log('성공');
        console.log(data);
    })
    .catch((err) => {
        console.log('에러!!', err)
    });
```
**1초마다 화면색을 바꾸기 다시해봐야지?**
```js
// call back 버전
const delayedColorChange = (newColor, delay, doNext) => {
    setTimeout(() => {
        document.body.style.backgroundColor = newColor;
        doNext && doNext();
    }, delay)
}
// promise 버전
// const delayedColorChange = (color, delay) => {
//     // Promise object 생성
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             document.body.style.backgroundColor = color;
//             // 성공을 알린다.
//             resolve();
//         }, delay)
//     })
// }

const delayedColorChange = (color, delay) => {
    // Promise object 생성
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            // 성공을 알린다.
            resolve();
        }, delay)
    })
}

delayedColorChange('red', 1000)
    // 이렇게 써도됨
    // .then(() => {
    //     return delayedColorChange('orange', 1000);
    // }) 
    // return값이 하나기때문에 아래와같이 화살표함수의 암묵적리턴을 사용해도된다.
    .then(() => delayedColorChange('orange', 1000))
    .then(() => delayedColorChange('yellow', 1000))
    .then(() => delayedColorChange('green', 1000))
    .then(() => delayedColorChange('blue', 1000))
    .then(() => delayedColorChange('indigo', 1000))
    .then(() => delayedColorChange('violet', 1000))
    // 여기선 문제생길일이 없지만 문제가 생기면 여기에 .catch
```

## async
- 비동기 처리를 좀더 깔끔하게 적을 수 있는 구문
- async
  - async(비동기)를 함수앞에 정의해주는 것이 async function
  - async 함수는 자동적으로 promise를 반환한다.
```js
async function hello() {
    
    }
// hello() 호출시 promise를 반환
// Promise {<fulfilled>: undefined}

// 화살표함수도 가능
const sing = async () => {
    
    }
```
  - 함수가 값을 반환하면 promise는 그 값으로 resolve 한다.
  - 함수가 에러라르 throw했을 경우 promise는 그 에러로 reject한다.
```js
const sing = async () => {
    throw new Error('에러');
    // sing()
    // Promise {<rejected>: Error: 에러
    // at sing (http://127.0.0.1:5500/udemy-Study/jsSection/Async_JS_CODE/Async_JS_CODE/Asyn…}
    return 'rarra';
}

sing()
    .then((data) => {
        console.log('성공 : ', data);
    })
    .catch((err) => {
        console.log('에러!!')
        console.log(err);
    })
    // Error: 에러
    // at sing (app.js:8:11)
    // at app.js:13:1
```

```js
const login = async (username, password) => {
    // username 혹은 password가 없으면
    if(!username || !password) {
        // 에러를 던진다
        throw new Error('유저명 또는 비밀번호가 없습니다.');
    }
    // password가 secret이면 
    if (password === 'secret') {
        // '환영합니다' 반환
        return '환영합니다.';
    }
    // 그외는 에러를 던진다 (비밀번호가 다름)
    throw new Error('비밀번호가 다릅니다.')
}

// username, password가 있고 password가 'secret' 조건을 만족하기 때문에 진행
login('hoge' , 'secret')
    .then(msg  => {
        console.log('로그인 성공'); 
        // msg ==== 반환받은 '환영합니다'
        console.log(msg);
    })
    // 조건불만족, 에러 발생시
    .catch(err => {
        console.log('에러!!');
        console.log(err);
    });
```

## await
- await은 반드시 async함수안에서만 사용가능하다.
- await은 promise가 resolve 혹은 reject할때까지 async함수 실행을 일시적으로 정지한다.

**
```js
const delayedColorChange = (color, delay) => {
    // Promise object 생성
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            // 성공을 알린다.
            resolve();
        }, delay)
    })
}

async function rainbow() {
    // await은 반드시 async 함수에서만 사용가능하다
    // delayedColorChange의 promise가 resolve되거나 reject되기를 await(기다린)다.
    await delayedColorChange('red', 1000);
    await delayedColorChange('orange', 1000);
    await delayedColorChange('yellow', 1000);
    await delayedColorChange('green', 1000);
    await delayedColorChange('blue', 1000);
    await delayedColorChange('indigo', 1000);
    await delayedColorChange('violet', 1000);
}   

async function printRainbow() {
    await rainbow(); // rainbow()가 끝나면 promise가 반환되어 끝을 알린다.
    console.log('레인보우 끝');
}

printRainbow();
```

- resolve했을때의 값을 가져와보자.

```js
const fakeRequest = (url) => {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * (4500)) + 500;
        setTimeout(() => {
            if (delay > 4000) {
                reject('コネクションタイムアウト')
            } else {
                resolve(`ダミーデータ(${url})`)
            }
        }, delay)
    })
}

async function makeRequest() {
    // fakeRequest가 resolve한 값을 가져온다
    const data1 = await fakeRequest('/hoge');
    console.log(data1); // 'ダミーデータ(/hoge)'
}

makeRequest();
```

### **promise가 reject되었을때 어떻게해야하는가?**
- 여기서 try, catch가 재등장한다.
```js
const fakeRequest = (url) => {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * (4500)) + 500;
        setTimeout(() => {
            if (delay > 4000) {
                reject('コネクションタイムアウト')
            } else {
                resolve(`ダミーデータ(${url})`)
            }
        }, delay)
    })
}

async function makeRequest() {
    try{
        // fakeRequest가 reject하면 catch로 날아간다.
        const data1 = await fakeRequest('/hoge1');
        console.log(`data1 : ${data1}`); // 'ダミーデータ(/hoge1)'
        // fakeRequest가 reject하면 catch로 날아간다.
        const data2 = await fakeRequest('/hoge2');
        console.log(`data1 : ${data2}`); // 'ダミーデータ(/hoge2)'
    }
    catch(e){
        console.log('에러 발생!!');
        // e는 promise가 reject되었을때 반환하는 값.
        console.log(e); // 'コネクションタイムアウト'
    }
    
}

makeRequest();
```

