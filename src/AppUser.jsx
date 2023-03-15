import React, { useState } from "react";

export default function AppUser() {
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

  const [user, setUser] = useState(userObj);

  return (
    <div>
      <h1>
        {user.id}는 {user.nickname}
      </h1>
      <p>
        {user.nickname}이 작성한 글:{user.post.length}
      </p>
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
