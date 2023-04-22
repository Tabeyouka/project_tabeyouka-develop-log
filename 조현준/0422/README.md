## default export와 export
- React에서 export 문을 사용하여 모듈을 내보낼 때,
일반적으로 기본(default) 내보내기와 명명된(named) 내보내기 두 가지 방법이 있다.

1. 기본 내보내기
**ColorfullMessage.jsx**
```js
const ColorfullMessage = (props) => {
  const { color, children } = props;
  console.log(props);
  const contentLadyStyle = {
    color,
    fontSize: "18px",
  };
  return <p style={contentLadyStyle}>{children}</p>;
};

export default ColorfullMessage;
```
**App.js**
```js
import ColorfullMessage from "./components/ColorfullMessage";
```
- 기본 내보내기 (default)에서는 import할때 {}(중괄호)를 사용하지 않아도된다.

2. 명명된 내보내기 (Named Export)
**ColorfullMessage.jsx**
```js
// 함수앞에 export
export const ColorfullMessage = (props) => {
  const { color, children } = props;
  console.log(props);
  const contentLadyStyle = {
    color,
    fontSize: "18px",
  };
  return <p style={contentLadyStyle}>{children}</p>;
};
```
**App.jsx**
```js
import {ColorfullMessage} from "./components/ColorfullMessage";
```
- 중괄호를 사용하여 가져온다. 여러개면 {ColorfullMessage, hoge, ...}