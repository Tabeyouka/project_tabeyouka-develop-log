## State
- 각 컴포넌트가 가지고있는 상태状態
- 조건에 따라 동적으로 변하는 부분을 State로 정의가능.

```js
// react안에 useState가 있기떄문에 분할대입으로 불러온다.
import React, { useState } from "react";

const App = () => {
  const onClickCountUp = () => {
    // 
    setNum(num + 1);
  };
  // 분할대입으로 useState에서 꺼낸다
  // num은 state로 사용될 변수명 (변수명은 자유)
  // setNum은 state를 변경하기위한 함수
  // useState에 초기값 설정가능
  const [num, setNum] = useState(0);
  return (
    <>
      <h1 style={{ color: "red" }}>머고</h1>
      <ColorfullMessage color="blue">하하핳핳핳</ColorfullMessage>
      <ColorfullMessage color="pink">안녕하세요</ColorfullMessage>
      버튼 클릭시 onClickCountUp 함수 호출
      <button onClick={onClickCountUp}>카운트업</button>
      <p>{num}</p>
    </>
  );
};
```

```js
const App = () => {
  const [num, setNum] = useState(0);
  const [faceShowFlag, setFaceShowFlag] = useState(true);

  const onClickCountUp = () => {
    setNum(num + 1);
  };

  const onClickSwitchShowFlag = () => {
    // true인 useState를 false로 변경 false를 true로 변경
    setFaceShowFlag(!faceShowFlag);
  };

  return (
    <>
      <h1 style={{ color: "red" }}>머고</h1>
      <ColorfullMessage color="blue">하하핳핳핳</ColorfullMessage>
      <ColorfullMessage color="pink">안녕하세요</ColorfullMessage>
      <button onClick={onClickCountUp}>카운트업</button>
      <p>{num}</p>
      <br />
      // 버튼클릭시 onClickSwitchShowFlag 함수 호출
      <button onClick={onClickSwitchShowFlag}>on/off</button>
      // 조건문 진짜의미에서 배운 &&는 왼편의 값이 true면 오른편을 반환
      {faceShowFlag && <p>Σ(ﾟДﾟ)</p>}
    </>
  );
};
```
- 새로고침도 안했는데 어떻게 화면이 바뀔까
- 그건 재 랜더링을 했기 때문
- 재 랜더링이란 React에서 특정조건이 성립하면(State변경등) 말그대로 재 랜더링 (App 함수를 재 실행한다.)
- 버튼을 누르면 이모티콘을 표시하는 useState가 false로 바뀌고 페이지가 재 랜더링된다.  
 