## Props 
- 컴포넌트에 건네는 인수와 같은 것

```jsx
const App = () => {
  const onClickButton = () => alert();
  const contentStyle = {
    color: "blue",
    fontSize: "18px",
  };
  const contentLadyStyle = {
    color: "pink",
    fontSize: "18px",
  };
  return (
    <>
      <h1 style={{ color: "red" }}>머고</h1>
      <p style={contentStyle}>머선129</p>
      <p style={contentLadyStyle}>머선129</p>
      <button onClick={onClickButton}>버튼</button>
    </>
  );
};
```
- 이런식으로 새로운 스타일을 적용할때마다 귀찮아진다..
- 컴포넌트화해서 색과 문장을 props로 받아보자
- 새롭게 jsx파일을 만든다.
**ColorfullMessage.jsx**
```jsx
import React from "react";

const ColorfullMessage = () => {
  const contentLadyStyle = {
    color: "pink",
    fontSize: "18px",
  };
  return <p style={contentLadyStyle}>안녕하세요</p>;
};

export default ColorfullMessage;
```
**App.js**
```jsx
import React from "react";
// ColorfullMessage를 import한다.
import ColorfullMessage from "./components/ColorfullMessage";

const App = () => {
  const onClickButton = () => alert();
  const contentStyle = {
    color: "blue",
    fontSize: "18px",
  };

  return (
    <>
      <h1 style={{ color: "red" }}>머고</h1>
      <p style={contentStyle}>머선129</p>
      // 태그로 사용가능
      <ColorfullMessage />
      <button onClick={onClickButton}>버튼</button>
    </>
  );
};

export default App;
```

- 이대로면 분홍색 `안녕하세요`만 계속 사용할 수 밖에 없다.
- props로 조건을 넘겨 동적으로 바꿔보자

**App.js**
```jsx
import React from "react";
import ColorfullMessage from "./components/ColorfullMessage";

const App = () => {
  const onClickButton = () => alert();
  const contentStyle = {
    color: "blue",
    fontSize: "18px",
  };

  return (
    <>
      <h1 style={{ color: "red" }}>머고</h1>
      <p style={contentStyle}>머선129</p>
      // ColorfullMessage뒤에 오브젝트에 들어갈 내용을 정의한다고 생각하면 편하다.
      <ColorfullMessage color="pink" message="안녕하세요" />
      <ColorfullMessage color="blue" message="하하핳핳핳" />
      <button onClick={onClickButton}>버튼</button>
    </>
  );
};

export default App;
```

**ColorfullMessage.jsx**
```jsx
import React from "react";

const ColorfullMessage = (props) => {
  console.log(props); (props에는 위에서 정의한 오브젝트가 들어있다.)
  const contentLadyStyle = {
    color: props.color, (props.color의 경우 App.js에서 pink로 정의했기때문에 pink가된다.)
    fontSize: "18px",
  };
  (props.message의 경우 App.js에서 "안녕하세요"로 정의했기떄문에 안녕하세요가된다.)
  return <p style={contentLadyStyle}>{props.message}</p>;
};

export default ColorfullMessage;
```

**children**
- ColorfullMessage에 props.message를 이용하여 문자를 보여주고있지만
p태그이기때문에 굳이 message를 지정해주지않고 사용할 수 있다.


```jsx
const App = () => {
  return (
    <>
      <h1 style={{ color: "red" }}>머고</h1>
      <ColorfullMessage color="blue">하하핳핳핳</ColorfullMessage>
      <ColorfullMessage color="pink">안녕하세요</ColorfullMessage>
    </>
  );
};
```
- 위와같이 html태그와같이 /ColorfullMessage로 닫아 내용을 넣는다.
- message=""는 불필요해졌기에 삭제  

**ColorfullMessage.jsx**
```jsx
const ColorfullMessage = (props) => {
  console.log(props);
  const contentLadyStyle = {
    color: props.color,
    fontSize: "18px",
  };
  return <p style={contentLadyStyle}>{props.children}</p>;
};
```
- props.children을 사용하면 <ColorfullMessage\>여기에 들어간</ColorfullMessage>값을 불러온다.

*응용*
**ColorfullMessage**
- 분할대입을 이용해 코드를 깔끔하게 정리
```jsx
const ColorfullMessage = (props) => {
    (props에서 color, children을 불러와 변수처럼 사용)
  const { color, children } = props;
  console.log(props);
  const contentLadyStyle = {
    (Javascript에서는 오브젝트에 키와 데이터의 이름이 같으면 한쪽은 생략이 가능하다 (태크닉))
    color, // color: color, 가 생략됨 
    fontSize: "18px",
  };
  return <p style={contentLadyStyle}>{children}</p>; (props. 를 붙이지않아도된다!)
};
```