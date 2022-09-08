import DiaryItem from "./DiaryItem";

const DiaryList = ({ diaryList, onDelete }) => {
  return (
    <div className="DiaryList">
      <h2>일기 리스트</h2>
      <h4>{diaryList.length}개의 일기가 있습니다.</h4>
      <div>
        {diaryList.map((it) => (
          // 객체 구조분해하여 props로 넘겨주기
          <DiaryItem key={it.id} {...it} onDelete={onDelete} />
          // key로 인덱스 값을 사용하면 배열 수정, 삭제 시에 문제 발생 가능
        ))}
      </div>
    </div>
  );
};

// props의 값으로 undefined 넘어왔을 때 default 값 설정
DiaryList.defaultProps = {
  diaryList: [],
};

export default DiaryList;
// es 모듈 시스템의 내보내기
