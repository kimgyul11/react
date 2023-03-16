import React, { useState } from "react";

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
  const [person, setPerson] = useState(initialPerson);

  const handleChange = () => {
    const prevName = prompt("누구의 이름을 변경할건가요?");
    const checkName = person.mentors.some((mentor) => {
      mentor.name = prevName;
    });
    if (!checkName) {
      return alert("해당 아이디가 존재하지 않습니다.");
    }
    const cuurentName = prompt("변경할 이름을 선택하세요");
    setPerson((person) => ({
      ...person,
      mentors: person.mentors.map((mentor) => {
        if (mentor.name === prevName) {
          return { ...mentor, name: cuurentName };
        }
        return mentor;
      }),
    }));
  };
  const handleAdd = () => {
    const addName = prompt("이름");
    const addTitle = prompt("타이틀");
    setPerson((prevPerson) => ({
      ...prevPerson,
      mentors: [
        { name: "추가 된거 확인", title: "메롱" },
        ...prevPerson.mentors,
      ],
    }));
  };

  const handleDelete = () => {
    const mentorName = prompt("누구의 이름을 삭제할건가요?");
    const checkName = person.mentors.some(
      (mentor) => mentor.name === mentorName
    );
    if (!checkName) {
      return alert("그런이름 없어 돌아가");
    }
    setPerson((prev) => ({
      ...prev,
      mentors: prev.mentors.filter((mentor) => {
        return mentor.name !== mentorName;
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
      title: "시니어개발자",
    },
    {
      name: "제임스",
      title: "시니어개발자",
    },
  ],
};
