import React, { useState } from "react";

export default function AppMentor() {
  const [person, setPerson] = useState(initialPerson);
  const handleUpdate = () => {
    const prev = prompt(`누구의 이름을 바꾸고 싶은가요?`);
    const current = prompt(`이름을 무엇으로 바꾸고 싶은가요?`);
    setPerson((person) => ({
      ...person,
      mentors: person.mentors.map((mentor) => {
        if (mentor.name === prev) {
          return { ...mentor, name: current };
        }
        return mentor;
      }),
    }));
  };
  const handleAdd = () => {
    const name = prompt(`멘토의 이름은?`);
    const title = prompt(`멘토의 직함은?`);
    setPerson((person) => ({
      ...person,
      mentors: [{ name, title }, ...person.mentors],
    }));
  };
  const handleDelete = () => {
    const name = prompt(`누구를 삭제하고 싶은가요?`);
    setPerson((person) => ({
      ...person,
      mentors: person.mentors.filter((m) => m.name !== name),
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
      <Button text="멘토 이름 바꾸기" onClick={handleUpdate} />
      <Button text="삭제하기" onClick={handleDelete} />
      <Button text="멘토 추가하기" onClick={handleAdd} />
    </div>
  );
}

function Button({ text, onClick }) {
  console.log("button", text, "re-rendering");
  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: "black",
        color: "white",
        borderRadius: "20px",
        margin: "0.4rem",
      }}
    >
      {text}
    </button>
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
