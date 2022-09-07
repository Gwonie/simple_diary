import "./App.css";
// es 모듈 시스템으로 불러와주기
import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DiaryList";

const dummyList = [
  {
    id: 1,
    author: "아무개1",
    content: "하이 1",
    emotion: 5,
    created_date: new Date().getTime(),
  },
  {
    id: 2,
    author: "아무개2",
    content: "하이 2",
    emotion: 4,
    created_date: new Date().getTime(),
  },
  {
    id: 3,
    author: "아무개3",
    content: "하이 3",
    emotion: 5,
    created_date: new Date().getTime(),
  },
  {
    id: 4,
    author: "아무개4",
    content: "하이 4",
    emotion: 3,
    created_date: new Date().getTime(),
  },
  {
    id: 5,
    author: "아무개5",
    content: "하이 5",
    emotion: 2,
    created_date: new Date().getTime(),
  },
];

function App() {
  return (
    <div className="App">
      <DiaryEditor />
      <DiaryList diaryList={dummyList} />
    </div>
  );
}

export default App;
