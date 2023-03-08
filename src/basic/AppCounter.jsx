import React, { useState } from "react";
import "./App.css";
import Counter from "./components/Counter";

export default function AppCounter() {
  const [totalCount, setTotalCount] = useState(0);
  const onClickHandler = () => {
    setTotalCount((prev) => prev + 1);
  };
  return (
    <div>
      <header>{totalCount}</header>
      <button onClick={onClickHandler}>토탈카운트 증가합니다!</button>
      <Counter onClick={onClickHandler} totalCount={totalCount} />
      <Counter onClick={onClickHandler} totalCount={totalCount} />
    </div>
  );
}
