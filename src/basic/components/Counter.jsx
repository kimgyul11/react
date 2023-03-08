import React, { useState } from "react";

export default function Counter({ onClick, totalCount }) {
  const [oneCounter, setOneCounter] = useState(0);
  const oneClickHandler = () => {
    setOneCounter((prev) => prev + 1);
    onClick();
  };
  return (
    <div>
      <span>
        {oneCounter}/{totalCount}
      </span>
      <button onClick={oneClickHandler}>카운트업!</button>
    </div>
  );
}
