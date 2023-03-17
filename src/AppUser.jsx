import React, { useState } from "react";

export default function AppUser() {
  const userObj = {
    id: "rlarbf",
    nickname: "김귤",
    posts: [
      {
        title: "즐",
        content: "와",
      },
      {
        title: "공부중",
        content: "야호",
      },
    ],
  };

  const [user, setUser] = useState(userObj);
  const postChange = () => {
    const postName = prompt("포스트 명 입력");
    const changeName = prompt("바꿀제목");
    setUser((user) => ({
      ...user,
      posts: user.posts.map((post) => {
        if (post.title === postName) {
          return { ...post, title: changeName };
        }
        return post;
      }),
    }));
  };

  return (
    <div>
      <h1>
        아이디:{user.id},닉네임:{user.nickname}의
        <br /> 마이페이지
      </h1>
      <p>{user.nickname}이 작성한 글</p>
      <ul>
        {user.posts.map((post, index) => (
          <li key={index}>
            {post.title}({post.content})
          </li>
        ))}
      </ul>
      <button onClick={postChange}>포스트 제목 수정</button>
      <button>포스트 추가하기</button>
      <button>포스트 삭제하기</button>
    </div>
  );
}
