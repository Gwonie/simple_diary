import { useRef, useState } from "react";

const DiaryEditor = () => {
  // useRef(): html DOM 요소로 접근할 수 있는 기능 가짐
  const authorInput = useRef();
  const contentInput = useRef();

  // 동작이 비슷한 state는 하나로
  const [state, setState] = useState({
    author: "",
    content: "",
    emotion: 1,
  });

  // 상태변화 이벤트 핸들러 묶음
  const handleChangeState = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = () => {
    if (state.author.length < 1) {
      authorInput.current.focus();
      return;
    }
    if (state.content.length < 5) {
      contentInput.current.focus();
      return;
    }
    alert("저장 성공");
  };

  return (
    <div className="DiaryEditor">
      <h2>오늘의 일기</h2>
      <div>
        <input
          ref={authorInput}
          name="author"
          value={state.author}
          // 이벤트: 사용자가 어떤 행동을 한 것
          onChange={
            // 콜백함수: 나중에 호출되는 함수
            handleChangeState
          }
        />
      </div>
      <div>
        <textarea
          ref={contentInput}
          name="content"
          value={state.content}
          onChange={handleChangeState}
        />
      </div>
      <div>
        <select
          name="emotion"
          value={state.emotion}
          onChange={handleChangeState}
        >
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </select>
      </div>
      <div>
        <button onClick={handleSubmit}>일기 저장하기</button>
      </div>
    </div>
  );
};

export default DiaryEditor;
