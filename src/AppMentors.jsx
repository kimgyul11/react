import React, { useState } from "react";

export default function AppMentor() {
  const userObj = {
    id: "rlarbf",
    nickname: "김귤",
    post: [
      {
        title: "불변성이란..",
        data: "2023.3.15",
      },
    ],
  };
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
  const [person, setPerson] = useState(initialPerson);

  const handleChange = () => {
    const prevName = prompt("누구의 이름을 바꿀껀가요?");
    const checkName = person.mentors.some((mentor) => mentor.name === prevName);
    if (!checkName) {
      alert("해당 아이디가 없습니다.");
      return;
    }
    const currentName = prompt("변경할 이름을 적으세요");
    setPerson((person) => ({
      ...person,
      mentors: person.mentors.map((mentor) => {
        if (mentor.name === prevName) {
          return { ...mentor, name: currentName };
        }
        return mentor;
      }),
    }));
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
      <button>멘토 추가하기</button>
      <button>멘토 삭제하기</button>
    </div>
  );
}

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
