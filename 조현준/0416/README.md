## JSX기법의 룰을 알아보자
- 규칙은 외우는수밖에 없다.

- react를 불러온다.
```js
import React from "react";
import ReactDom from "react-dom";
```

- root id를 읽어와서 읽는다(render)
```html
<div id="root"></div>
```
```js
ReactDom.render(<App />, document.getElementById("root"));
```

- 자바스크립트안에 return해서 그 안에 html코드를 쓰는게 JSX기법
```js
const App = () => {
    return (<h1>안녕하세요</h1>;)
}
```

- **에러!**
- JSX의 기법의 룰로 return하는 html의 코드는 하나로 묶어야한다.
```js
const App = () => {
  return (
    <h1>머고</h1>
    <p>머선129</p>
  );
};
```
- 이런식으로 div로 감싸던 하나의 태그의 안에 다른 태그가있어야한다..
```js
const App = () => {
  return (
    <div>
      <h1>머고</h1>
      <p>머선129</p>
    </div>
  );
};
```

- 아무기능도없이 에러를 회피하기위해 React.Fragment를 하나의 테두리로 사용가능하다.
```js
const App = () => {
  return (
    <React.Fragment>
      <h1>머고</h1>
      <p>머선129</p>
    </React.Fragment>
  );
};
```

- 세상이 좋아져서 아무것도안쓰면 React.Fragment와 동일한기능을 한다.
```js
const App = () => {
  return (
    <>
      <h1>머고</h1>
      <p>머선129</p>
    </>
  );
};
```

## 컴포넌트의 사용법을 알아보자

- App.js라는 파일을 새로 만든다. (기존에는 index.js사용)
- **App.js**
```js
import React from 'react';
// App 이라는 함수를 작성했다.
const App = () => {
    return (
        <>
         <h1>머고</h1>
         <p>머선129</p>
        </>
    );
};
export default App;
```
**export default**
1. 일반적으로 해당 모듈엔 하나의 개체(변수, 클래스, 함수 등)만 있다는 의미로 받아들여진다. 

2. 따라서 해당 모듈의 전체 개체를 export 한다는 의미를 갖는다.

3. 원하는 이름으로 import가 가능하다.(ex. import ThisIsSample from "경로")

**export**
1. 복수의 개체가 있는 라이브러리 형태의 모듈에서 가져오기 할 때 사용된다.

2. 특정 개체만 가져오는게 가능하다. 

3. 원하는 이름으로 import가 불가능하다.

- **index.js**
```js
import App from './App';
```
- 정의한 함수를 export해서 다른파일에서 import해서 사용가능하다.

- **컴포넌트 이름은 반드시 첫글자가 대문자!!(파스칼 케이스로 작성)**

### 이벤트를 추가해보자
- React에서는 html태그에 카멜케이스를 이용해 이벤트를 추가하는것이 가능하다.
```js
const App = () => {
  const onClickButton = () => alert();
  return (
    <>
      <h1>머고</h1>
      <p>머선129</p>
      // 버튼 클릭시 onclickButton함수 호출 
      <button onClick={onClickButton}>버튼</button>
    </>
  );
};
```
### 스타일을 적용해보자

```js
const App = () => {
  const onClickButton = () => alert();
  // 오브젝트를 선언
  const contentStyle = {
    color: "blue",
    fontSize: "18px",
  };
  return (
    <>
            // {{}} <-의미는 {자바스크립트를{오브젝트} 사용하겠다.}
            // 이런식으로 직접 스타일을 줘도되지만 따로 오브젝트를 선언해도된다.
      <h1 style={{ color: "red" }}>머고</h1>
      // 선언한 오브젝트를 사용
      <p style={contentStyle}>머선129</p>
      <button onClick={onClickButton}>버튼</button>
    </->
  );
};
```