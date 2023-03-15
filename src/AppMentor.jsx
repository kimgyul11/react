import React, { useState } from "react";

export default function AppMentor() {
  const [person, setPerson] = useState({
    name: "엘리",
    title: "개발자",
    mentor: {
      name: "밥",
      title: "시니어개발자",
    },
  });
  const handleChangeTitle = () => {
    const title = prompt("변경할 타이틀을 입력해주세요");
    setPerson((person) => ({
      ...person,
      mentor: { ...person.mentor, title },
    }));
  };
  const handleChnageMentor = () => {
    const name = prompt("변경할려는 멘토 이름 입력");
    setPerson((person) => ({
      ...person,
      mentor: { ...person.mentor, name },
    }));
  };
  return (
    <div>
      {/* 타이틀 나오는 부분 */}
      <h1>
        {person.name}는 {person.title}
      </h1>
      {/* 멘토 설명 나오는 부분 */}
      <p>
        {person.name}의 멘토는 {person.mentor.name} ({person.mentor.title})
      </p>
      <button onClick={handleChnageMentor}>멘토 이름 바꾸기</button>
      <button onClick={handleChangeTitle}>멘토 타이틀 바꾸기</button>
    </div>
  );
}
