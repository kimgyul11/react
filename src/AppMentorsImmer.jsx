import React from "react";
import { useImmer } from "use-immer";

export default function AppMentor() {
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
  const [person, updatePerson] = useImmer(initialPerson);

  const handleChange = () => {
    const prevName = prompt("누구의 이름을 변경할건가요?");
    const cuurentName = prompt("변경할 이름을 선택하세요");
    updatePerson((person) => {
      const mentor = person.mentors.find((m) => m.name === prevName);
      mentor.name = cuurentName;
    });
  };
  const handleAdd = () => {
    const name = prompt("이름");
    const title = prompt("타이틀");
    updatePerson((person) => person.mentors.push({ name, title }));
  };

  const handleDelete = () => {
    const mentorName = prompt("누구의 이름을 삭제할건가요?");
    const checkName = person.mentors.some(
      (mentor) => mentor.name === mentorName
    );
    if (!checkName) {
      return alert("그런이름 없어 돌아가");
    }
    updatePerson((person) => {
      const index = person.mentors.findIndex((m) => m.name === mentorName);
      person.mentor.splice(index, 1);
    });
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
