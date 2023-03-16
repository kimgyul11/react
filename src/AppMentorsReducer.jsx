import React, { useReducer, useState } from "react";
import personReducer from "./reducer/person-reducerr";

export default function AppMentorReducer() {
  const [person, dispatch] = useReducer(personReducer, initialPerson);
  //dispatch를 사용해서 액션을 수행
  const handleChange = () => {
    const prevName = prompt("누구의 이름을 변경할건가요?");
    const checkName = person.mentors.some((mentor) => {
      return (mentor.name = prevName);
    });
    if (!checkName) {
      return alert("해당 아이디가 존재하지 않습니다.");
    }
    const currentName = prompt("어떤이름으로 바꿀껀가요?");
    dispatch({ type: "updated", prevName, currentName });
  };
  const handleAdd = () => {
    const addName = prompt("이름");
    const addTitle = prompt("타이틀");
    dispatch({ type: "added", addName, addTitle });
  };

  const handleDelete = () => {
    const mentorName = prompt("누구의 이름을 삭제할건가요?");
    const checkName = person.mentors.some(
      (mentor) => mentor.name === mentorName
    );
    if (!checkName) {
      return alert("그런이름 없어 돌아가");
    }
    dispatch({ type: "deleted", mentorName });
  };

  return (
    <div>
      <h1>
        {person.name}는 {person.title}
      </h1>
      <p>{person.name}의 멘토는:</p>
      <ul>
        {person.mentors.map((mentor, index) => (
          <li key={index}>
            {mentor.name} ({mentor.title})
          </li>
        ))}
      </ul>
      <button onClick={handleChange}>멘토의 이름을 바꾸기</button>
      <button onClick={handleAdd}>멘토 추가하기</button>
      <button onClick={handleDelete}>멘토 삭제하기</button>
    </div>
  );
}
const initialPerson = {
  name: "엘리",
  title: "개발자",
  mentors: [
    {
      name: "밥",
      title: "시니어 개발자.",
    },
    {
      name: "제임스",
      title: "시니어 개발자.",
    },
  ],
};
