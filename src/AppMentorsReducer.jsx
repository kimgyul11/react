import React, { useReducer, useState } from "react";
import personReducer from "./reducer/person-reducerr";
const initialPerson = {
  name: "엘리",
  title: "개발자",
  mentors: [
    {
      name: "밥",
      title: "시니어개발자",
    },
    {
      name: "제임스",
      title: "시니어개발자",
    },
  ],
};
export default function AppMentor() {
  // const [person, setPerson] = useState(initialPerson);
  const [person, dispach] = useReducer(personReducer, initialPerson);

  const handleUpdate = () => {
    const prev = prompt(`누구의 이름을 바꾸고 싶은가요?`);
    const checkName = person.mentors.some((mentor) => mentor.name === prev);
    if (!checkName) {
      alert("이름이 없다.");
      return;
    }
    const current = prompt(`뭘로 바꿀꺼냐`);
    dispach({ type: "updated", prev, current });
  };
  const handleAdd = () => {
    const name = prompt("추가할 이름");
    const checkName = person.mentors.some((mentor) => mentor.name === name);
    if (!checkName) {
      alert("이름이 없다.");
      return;
    }
    const title = prompt("변경할 이름");
    dispach({ type: "added", name, title });
  };
  const handleDel = () => {
    const name = prompt("누구를 삭제할거냐?");
    dispach({ type: "deleted", name });
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
      <button onClick={handleUpdate}>멘토의 이름을 바꾸기</button>
      <button onClick={handleAdd}>멘토추가하기</button>
      <button onClick={handleDel}>멘토삭제하기</button>
    </div>
  );
}
