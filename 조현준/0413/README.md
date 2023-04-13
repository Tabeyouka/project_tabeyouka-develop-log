## input과 change이벤트

**change**
```js
const input = document.querySelector('input');
const h1 = document.querySelector('h1');
input.addEventListener('change', function(e) {
    // change이벤트는 input 내용물이 바뀌고 input의 포커스가 해제되어야 발동된다.
    console.log('change'); 
    // 이러한 동작을 이용하는 경우도있지만 지금 하고싶은것은 입력때마다 이벤트가 발동해야한다.
})

```
**input**
```js
input.addEventListener('input', function(e) {
    // 입력때마다 이벤트가 발생
    h1.innerText = input.value; // 그때마다 input.value를 h1에 대입
})
```

## 이벤트의 버블링
- 이벤트는 발동하면 발동된 요소의 최고부모까지 올라가며 이벤트를 전부 발동시켜버린다...
[버블링] https://ko.javascript.info/bubbling-and-capturing

```js
<body>
    <section onclick="alert('섹션 클릭')"   >
        여긴 섹션
        <p onclick="alert('단락 클릭')">
            여긴 단락
            <button onclick="alert('버튼 클릭')">클릭</button>
        </p>
    </section>
</body>
```
**위 코드 실행시 버튼 클릭, 단락 클릭, 섹션 클릭 button의 모든 부모 이벤트가 발동되버린다.**
- 거의 모든 이벤트가 이런 버블링이 발생된다.
  - focus이벤트등 몇몇개를 제외

```js
const button = document.querySelector('#changeColor');
const container = document.querySelector('#container');

button.addEventListener('click', function() {
    container.style.backgroundColor = makeRandColor();
})
// div를 가리려고 hide(css .hide display: none)를 적용하기위해
container.addEventListener('click', function() {
    // hide클래스를 추가
    container.classList.add('hide');
})

const makeRandColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}
```
**위에서도 설명했지만 색을 바꾸려고 버튼을 누르는순간 hide도 바로 발동되어 모두 사라져버린다..**
거기서 등장한것이..

### stopPropagation
- 더이상 버블이 퍼져나가는것을 막아주는 메서드

## event delegation
- 아래는 이전에 만들어본것과 비슷한 예제다. (60번 연습문제 참조)
- 아래 생성된 트윗을 클릭해서 삭제하려면 어떻게 해야할까?
- 심플하게 생각해보자
```js
// 모든 li를 가져온다.
const lis = document.querySelectorAll('li');
// li갯수의 length만큼 반복하며 click시 li가 remove되는 이벤트
for (let li of lis) {
    li.addEventListener('click', function() {
        li.remove();
    })
}

const tweetForm = document.querySelector('#tweetForm');
const tweetsContainer = document.querySelector('#tweets');

tweetForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const usernameInput = tweetForm.elements.username;
    const tweetInput = tweetForm.elements.tweet;
    addTweet(usernameInput.value, tweetInput.value);

    usernameInput.value = '';
    tweetInput.value = '';
})

const addTweet = (username, tweet) => {
    const newTweet = document.createElement('li');
    const bTag = document.createElement('b');
    bTag.append(username);
    newTweet.append(bTag);
    newTweet.append(` - ${tweet}`);
    tweetsContainer.append(newTweet);
}
```
하지만..  
위 코드대로면 기존에있던 li에만 정상적으로 동작하게된다..  

**그러므로 ul을 통해 li를 지워보자..**
```js
// ul에 event를 추가
tweetsContainer.addEventListener('click', function(e) {
    console.log('ul내부클릭');
    // tweetsContainer(ul)의 이벤트를 들여다보면?
    console.log(e);
    // target값이 li로 설정되어있는것을 알수있다.
})
```
**여기서 중요한점은**
### target값은 실제로 이벤트가 발생한 요소가 들어간다는것!!

**remove**
- tweetsContainer(ul)에 이벤트를 추가했지만 실제 이벤트가 발생한곳은 li니까 지워지는 target은 li
```js
// ul에 event를 추가
tweetsContainer.addEventListener('click', function(e) {
    // 이벤트가 발생한 (클릭된) 요소의 target을 remove
    e.target.remove();
})
```
- **문제점이 생겼다.**
- 트윗(li태그)에는 (b태그)가 포함되어있다.
- click이벤트로 (li태그)를 클릭하면 자식인 b까지 삭제되지만
- (b태그)를 클릭하면 (b태그)의 target값만이 삭제되어 (li태그)는 남아있다는 점..

```js
// ul에 event를 추가
tweetsContainer.addEventListener('click', function(e) {
    // nodeName이외에도 tagName등 event요소에 여러가지있다 잘 보고 골라쓰자
    if (e.target.nodeName === 'LI') {
        e.target.remove();
    }
    // 만약 B태그를 눌렀을때도 remove를 하고싶으면
    else if (e.target.nodeName === 'B') {
        // (B)의 부모는 LI
        e.target.parentElement.remove();
    }
    // 위 조건문을 간단하게 생략하면
    // e.target.nodeName === 'LI' && e.target.remove();
})
```
**정말 간단하게 해보면**
```js
tweetsContainer.addEventListener('click', function(e) {
    if (e.target.nodeName === 'LI' || e.target.nodeName === 'B') {
        // target의 가장 가까이있는 요소를 가져온다.
        e.target.closest('LI').remove();
    }
})
```

## BULMA 사용해보기
- **卓球特典表실습으로 대체**


## **비동기 자바스크립트**

## call stack (コールスタック)
- 인터프리터의 구조중 하나로, 복수계층의 함수를 호출한 스크립트내의 위치를 계속 추적하는 것
- 어느 함수가 현재 실행되고있는가, 그 함수안에서 어떤 함수가 호출되었는가 등
- 책을 읽으며 주석을보고 그 부분을 손가락으로 가르키고
뒤쪽을 보고 다 보면 다시 돌아와 가르키고있던 부분을 다시보는 느낌이다.

**stack 이란?**
- LIFO(후입 선출) : 마지막으로 넣은것이 제일먼저 나오는 구조

## JavaScript는 single thread (シングルスレッド)
- Js에서는 아무리 컴퓨터가 고성능이여도 한번에 한가지작업밖에 할 수 없다.

```js
console.log('서버에 리퀘스트를 송신');
setTimeout(() => {
    console.log('서버에서 레스폰스가 왔습니다.');
}, 3000);

console.log('여기가 파일의 말단');

// 서버에 리퀘스트를 송신
// 여기가 파일의 말단
// 서버에서 레스폰스가 왔습니다.
```
- 한가지일밖에 못한다면서 어떻게 setTimeout을 관리하며 아래의 console.log()를 출력했을까?
- **브라우저가 실행하는것**
- web API를 호출하면 Js는 내가 못하니까 처리해줘!!하고 브라우저에 처리를 맡긴다.
  - 함수가 call stack에 쌓이게되고 Js의 call stack이 web API를 인식하면 브라우저에 처리를 의뢰한다.  
  - 이 처리가 뒤에서 이루어진다.
- setTimeout도 이 web API에 해당한다.
  - setTimeout으로 3초지나면 알려줘 브라우저~ 라고 의뢰
  - 3초가 지나면 setTimeout에 건네진 call back함수는 call stack에 돌아오고
  - 그걸 감지한 Js의 call stack은 그 함수를 실행

## call back 지옥 (コールバック地獄)
- 배경색을 1초마다 바꿔보자
```js
setTimeout(() => {
    document.body.style.backgroundColor = 'red';
}, 1000);

setTimeout(() => {
    document.body.style.backgroundColor = 'orange';
}, 2000);

setTimeout(() => {
    document.body.style.backgroundColor = 'yellow';
}, 3000);
```
- 이런식이면 끝이없다.. 시간도계산해야하고 난감하다
- setTimeout안에 setTimeout을 호출하는것이 가능하다!
```js
setTimeout(() => {
    document.body.style.backgroundColor = 'red';
    setTimeout(() => {
        document.body.style.backgroundColor = 'orange';
        setTimeout(() => {
            document.body.style.backgroundColor = 'yellow';
        }, 1000);
    }, 1000);
}, 1000);
```
- 훨씬 낫다!! 고 생각했냐?
- 코드의 중복은 지옥과 다름없다. 야무지게 함수를 써보자
```js
setTimeout(() => {
            document.body.style.backgroundColor = 'yellow';
        }, 1000);

delayedColorChange('olive', 2000); // 2초 후 olive로 변함
```
- 그럼이제 색을 바꿔볼까~
```js
delayedColorChange('olive', 2000);
delayedColorChange('teal', 2000);
```
**어림도 없다 같은 시간이 설정되어있어 teal이 이겨버린다.**
- 여기서 고계함수가 등장한다...
```js
const delayedColorChange = (newColor, delay, doNext) => {
    setTimeout(() => {
        document.body.style.backgroundColor = newColor;
        // 함수를 잘 받았는지 체크
        doNext && doNext();
    }, delay);
}

delayedColorChange('red', 1000, () => {
    delayedColorChange('orange', 1000, () => {
        delayedColorChange('yellow', 1000, () => {
            delayedColorChange('green', 1000, () => {
                delayedColorChange('blue', 1000, () => {
                    delayedColorChange('purple', 1000, () => {
        
                    });
                });
            });
        });
    });
});
```
- 정말 끔찍하고 이게뭐야하겠지만 실제로도 이렇게 쓰인다고한다.
- 비동기한 코드가 끝나고 다음 코드를 진행시키고싶으면 반드시 call back함수가 관련된다.
- 말그대로 끝나면 부르고 끝나면 부르고 (call back)

**좀더 실용성있는 코드를 써보자**
- 영화를 검색하는 함수가 있다고 치고 귀멸의 칼날을 검색하고싶다고 치자
- 그럼 검색이 끝나고 실행하고싶은 처리가 있다고 치고 call back함수를 넘겨준다.
- 그리고 그걸 내 DB에 저장하고싶다고 치자
- saveToMyDB에 검색결과로 나온 movies를 보존한다.
```js
searchMovieAPI('귀멸의 칼날', (movies) => {
    // 검색에 성공했을 경우의 처리

    // DB를 보존하는데도 시간이 걸린다고 치자
    // 그 안에 또 call back함수를 넘겨준다.
    saveToMyDB(movies, () => {
        // 보존을 성고했을 경우의 처리

    }, () => {
        // 보존을 실패했을 경우의 처리

    })
}, () => {
    // 검색에 실패했을 경우의 처리
})
```
- 이제 뭐가뭔지 모를 코드가되었다고 생각하겠지만
실제로 정말 평범하게 쓰인다고한다....
- delayedColorChange()와 같은 call back 덩어리의 코드는 좋다고는 말 못하지만
call back안에 함수 call back안에 함수는 정말 자주있는 일이다.
- 이러한 개선해주는것이 이 뒤에 배울 Promise, Async 다.

## PROMISE
- 비동기처리의 최종적 완료 혹은 실패를 알리는 요소

```js
// コールバック版
const fakeRequestCallback = (url, success, failure) => {
    const delay = Math.floor(Math.random() * 4500) + 500;
    setTimeout(() => {
        if (delay > 4000) {
            // 실패했을 경우
            failure('コネクションタイムアウト')
        } else {
            // 성공했을 경우
            success(`ダミーデータ(${url})`)
        }
    }, delay)
}

fakeRequestCallback('naver.com', function(response) {
    console.log('성공!'); // 4초이내면 성공
    console.log(response); // 성공!  ダミーデータ(naver.com)
}, function(err) {
    console.log('에러!', err); // 4초가 지나면 실패
})
```
- 여기서 다음 페이지에 request를 던진다 치면..?
```js
fakeRequestCallback('naver.com/page1', function(response) {
    console.log('성공!'); // 4초이내면 성공
    console.log(response); // 성공!  ダミーデータ(naver.com/page1)
    fakeRequestCallback('naver.com/page2', function(response) {
        console.log('성공!2'); // 4초이내면 성공
        console.log(response); // 성공!  ダミーデータ(naver.com/page2)
        fakeRequestCallback('naver.com/page3', function(response) {
            console.log('성공!3'); // 4초이내면 성공
            console.log(response); // 성공!  ダミーデータ(naver.com/page3)
        }, function(err) {
            console.log('에러!3', err); // 4초가 지나면 실패
        })
    }, function(err) {
        console.log('에러!2', err); // 4초가 지나면 실패
    })
}, function(err) {
    console.log('에러!', err); // 4초가 지나면 실패
})
```
- 성공할지 실패할지 항상 양쪽다 생각하는것이 중요하다.
- 이번에도 말도안되는 코드처럼 보이지만 call back 3개는 평범하다고한다..

## promise를 사용해보자
- promise는 Js의 object다.
- pending (대기) : 대기상태. 성공도 실패도 하지않음 (이 뒤 어딘가에서 비동기처리가 끝남)
- fulfilled (만족) : 처리가 성공되어 완료한 상태
- rejected (거절) : 처리가 실패된것을 알리는 상태

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

const request = fakeRequestPromise('yelp.com/api/coffee');
// 성공했을때 실행할 call back함수를 등록
request.then(() => {
    console.log('성공!');
    // 성공했을 경우
    // request를 들여다보면?
    // Promise {<fulfilled>: 'ダミーデータ(yelp.com/api/coffee)'}
    // [[Prototype]]: Promise
    // [[PromiseState]]: "fulfilled" <- 성공한 상태인것을 알 수 있다.
    // [[PromiseResult]]: "ダミーデータ(yelp.com/api/coffee)"
}).catch(() => {
    console.log('실패!!');
    // 실패했을 경우 <에러!!!!>
    // request를 들여다보면?
    // Promise {<rejected>: 'コネクションタイムアウト'}
    // [[Prototype]]: Promise
    // [[PromiseState]]: "rejected"
    // [[PromiseResult]]: "コネクションタイムアウト"
})
```

- 복수의 request를 요청해보자
```js
fakeRequestPromise('yelp.com/api/coffee/page1')
    .then(() => {
        console.log('성공!! 1');
        // 성공시 다음 request
        fakeRequestPromise('yelp.com/api/coffee/page2')
        .then(() => {
            console.log('성공!! 2');
            // 성공시 다음 request
            fakeRequestPromise('yelp.com/api/coffee/page3')
            .then(() => {
                console.log('성공!! 3');       
            })
            .catch(() => {
                console.log('실패!! 3');
            });
        })
        .catch(() => {
            console.log('실패!! 2');
        });
    })
    .catch(() => {
        console.log('실패!! 1');
    })
```
