**카운트다운(num)이 3일때만 이모티콘을 표시해보자**
```jsx
const App = () => {
  const [num, setNum] = useState(0);

  const [faceShowFlag, setFaceShowFlag] = useState(false);

  const onClickCountUp = () => {
    setNum(num + 1);
  };

  const onClickSwitchShowFlag = () => {
    setFaceShowFlag(!faceShowFlag);
  };

    // 0일때 표시하지않도록 미리 걸러준다.
  if (num > 0) {
    // 3의 배수일때만 표시되도록 조건을 걸어줌
    if (num % 3 === 0) {
        // 이모티콘 표시!
      setFaceShowFlag(true);
    } 
    // 표시 X
    else {
      setFaceShowFlag(false);
    }
  }

  return (
    <>
      <button onClick={onClickCountUp}>카운트업</button>
      <p>{num}</p>
      <br />

      <button onClick={onClickSwitchShowFlag}>on/off</button>
      {faceShowFlag && <p>Σ(ﾟДﾟ)</p>}
    </>
  );
};
```

**에러!!! Too many re-renders!!**
- 너무많은 재랜더링이 일어나고있어서 에러가났다.
- 조건에 만족한 행동을 할때마다 State의 값이 변경되어 페이지가 재 랜더링되는 불상사가 일어나버린 것..
- 조건문을 이용해 에러를 막아보자
```jsx
if (num > 0) {
    if (num % 3 === 0) {
        // 왼쪽이 false일때 오른쪽을 반환
      faceShowFlag || setFaceShowFlag(true);
    } 
    // 왼쪽이 true면 오른쪽을 반환
    else {
      faceShowFlag && setFaceShowFlag(false);
    }
  }
```
- 이런식으로 State의 값이 필요할때만 변경되어 재랜더링되게되었다.  

**문제점이 또 생겼다**
- num이 3일때 표정이나오는건 구현했지만 on/off 버튼을 눌렀을때
- faceShowFlag를 반대로 바꿔주는 함수가 먹통이되었다.
- 그 이유는?
- on/off버튼은 분명 faceShowFlag를 바꿔주지만 그렇게되면 재랜더링된다.
- 다시 if문에 걸러져서 num의 3의배수일때만 이모티콘을 표시하게된다..
- 이때나오는것이..!
## useEffect
```jsx
useEffect(() => {
    console.log("useEffect");
// useEffect는 두번째 파라미터로 배열을 받는다.
// 빈 배열을 정의하면 최초1회만 useEffect를 실행 재랜더링해도 "useEffect"라는 log는 안나온다.
  }, []);
```
- useEffect의 2번째 파라미터인 배열에 들어가는 값은 이 useEffect가 관심을 가지는
- 즉 이곳에만 관심을 가지고 나머지는 관심없다는 것이다.

```jsx
const [num, setNum] = useState(0);
  const [faceShowFlag, setFaceShowFlag] = useState(false);

  const onClickCountUp = () => {
    setNum(num + 1);
  };

  const onClickSwitchShowFlag = () => {
    setFaceShowFlag(!faceShowFlag);
  };

  useEffect(() => {
    if (num > 0) {
      if (num % 3 === 0) {
        faceShowFlag || setFaceShowFlag(true);
      } else {
        faceShowFlag && setFaceShowFlag(false);
      }
    }
  }, [num]);
```
- num을 설정해줌으로써 num의 state가 변경되었을때만 반응하게되어
- faceShowFlag의 값이 변경되어도 이 useEffect는 반응하지않는다.



