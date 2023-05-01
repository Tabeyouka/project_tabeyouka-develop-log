## 리액트를 이용해 TODO 작성

```jsx
export const App = () => {
  return (
    <>
      <div className="input-area">
        <input placeholder="TODO를 입력" />
        <button>추가</button>
      </div>

      <div className="incomplete-area">
        <p className="title">미완료 TODO</p>
        <ul>
          <div className="list-row">
            <li>아아아</li>
            <button>완료</button>
            <button>삭제</button>
          </div>
    
          <div className="list-row">
            <li>으어어</li>
            <button>완료</button>
            <button>삭제</button>
          </div>
        </ul>
      </div>
      );
  };
```
- 위와같이 Todo를 어플의 html을 작성하였다.
- 미완료 Todo가 늘어날때마다 html을 추가해야한다.
- 아래와같이 바꿔보자
```jsx
export const App = () => {
  // incompleteTodos에는 초기값으로 설정한 '아아아'와 '으어어'가 들어가있다.
  // setIncompleteTodos는 State값을 변경하기위한 함수
  const [incompleteTodos, setIncompleteTodos] = useState(['아아아', '으어어']);
  return (
    <>
      <div className="input-area">
        <input placeholder="TODO를 입력" />
        <button>추가</button>
      </div>

      <div className="incomplete-area">
        <p className="title">미완료 TODO</p>
        <ul>
          배열을 이용해 새 배열을 작성
          {incompleteTodos.map((todo) => {
            return (
              // React에서 이런식으로 루프를 이용해(map) 처리할때
              // 루프내에서 반환하는 제일 처음 태그에 key값을 설정해줄 필요가 있다.
              // 리액트의 뒤편에서 일하는 가상 DOM은 변경전과 변경후 값의 차이만큼 실제 DOM에 적용되기때문에
              // 이러한 루프처리는 몇번째 처리인지 정확히 비교하기위해 표시를 해줄 필요가 있다.
              <div key={todo} className="list-row">
                초기값으로 설정한 글자를 {자바스크립트를 이용}해 사용가능
                <li>{todo}</li>
                <button>완료</button>
                <button>삭제</button>
              </div>
            )
          })}
        </ul>
      </div>
  )
}
```

- 입력값을 받아보자
- 다음은 TODO를 입력하는 부분이다.
```jsx
export const App = () => {
  // input의 text값을 받기위해 새로운 useState를 정의했다.
  const [todoText, setTodoText] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState(["아아아", "아아아"]);
  const [completeTodos, setcompleteTodos] = useState(["아아아"]);
  // 실제 State변화시에 사용하는 setTodoText를 사용 todoText를 변경하는 함수를 작성
  const onChangeTodoText = (event) => setTodoText(event.target.value);

  return (
    <>
      <div className="input-area">
        <input
          placeholder="TODO를 입력"
          // input의 value(입력값)을 todoText에 넘겨준다.
          // 이것만으로는 todoText는 변화하지않는다.
          value={todoText}
          // 함수를 사용하여 값을 변경.
          onChange={onChangeTodoText}
        />
        <button>추가</button>
      </div>
```
- 추가, 삭제버튼을 구현해보자
```jsx
export const App = () => {
  const [todoText, setTodoText] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState(["아아아", "아아아"]);
  const [completeTodos, setcompleteTodos] = useState(["아아아"]);

  const onChangeTodoText = (event) => setTodoText(event.target.value);

  const onClickAdd = () => {
    // todoText(input의 값)이 빈문자열이면 추가 X
    if (todoText === "") return;
    // 기존State값을 스프레드문을 이용해 todoText(input의 값)을 붙여준다.
    const newTodos = [...incompleteTodos, todoText];
    // 새로운 배열을 State값으로 설정한다.
    setIncompleteTodos(newTodos);
    // 위 과정이 끝나면 input을 빈칸으로 만듦
    setTodoText("");
  };

  const onClickDelete = (index) => {
    // 스프레드문으로 기존의 state배열을 가져온다.
    const newTodos = [...incompleteTodos];
    // splice로 클릭된 index의 todo를 삭제한다.
    newTodos.splice(index, 1);
    // 새로운 배열로 State를 갱신
    setIncompleteTodos(newTodos);
  };

  return (
    <>
      <div className="input-area">
        <input
          placeholder="TODO를 입력"
          value={todoText}
          onChange={onChangeTodoText}
        />
        버튼 클릭시 onClickAdd함수 호출
        <button onClick={onClickAdd}>추가</button>
      </div>

      <div className="incomplete-area">
        <p className="title">미완료 TODO</p>
        <ul>
          몇번째 todo인지 구분하기위해 map의 파라미터로 Index를 받아올 필요가있다.
          {incompleteTodos.map((todo, index) => {
            return (
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button>완료</button>
                onClickDelete함수의 인수로index를 넣어준다 이때 그대로 넣으면 함수가 바로 발동되기떄문에
                 화살표함수로 onClickDelete를 호출하도록 작성
                <button onClick={() => onClickDelete(index)}>삭제</button>
              </div>
            );
          })}
        </ul>
      </div>
```

- 완료버튼을 구현
```jsx
const [todoText, setTodoText] = useState("");
const [incompleteTodos, setIncompleteTodos] = useState(["으어어어", "이에에에"]);
const [completeTodos, setcompleteTodos] = useState(["아아아"]);

const onClickComplete = (index) => {
    // 기존의 State로 새로운 배열을 만든다
    const newIncompleteTodos = [...incompleteTodos];
    // 새로운 배열은 delete와 동일하게 해당 index의 todo를 삭제
    newIncompleteTodos.splice(index, 1);
    // 기존 완료todo와 완료를 누른index의 미완료 todo를 합친다.
    const newCompleteTodo = [...completeTodos, incompleteTodos[index]];
    // 미완료todo를 삭제후상태로 갱신
    setIncompleteTodos(newIncompleteTodos);
    // 완료todo를 새로운 배열로 갱신
    setcompleteTodos(newCompleteTodo);
};

<div className="incomplete-area">
  <p className="title">미완료 TODO</p>
  <ul>
    {incompleteTodos.map((todo, index) => {
      return (
        <div key={todo} className="list-row">
          <li>{todo}</li>
          Delete와 동일하게 함수정의 후 index를 받아온다.
          <button onClick={() => onClickComplete(index)}>완료</button>
          <button onClick={() => onClickDelete(index)}>삭제</button>
        </div>
      );
    })}
  </ul>
</div>
```