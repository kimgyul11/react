import React, { useState } from "react";
import "./App.css";
import Counter from "./components/Counter";

export default function AppCounter() {
  //전체 카운트를 위한 state
  const [totalCount, setTotalCount] = useState(0);
  const handleClick = () => {
    setTotalCount((prev) => prev + 1);
  };
  return (
    <div className="container">
      <div className="banner">
        TotalCount : {totalCount} {totalCount > 10 ? "🔥" : "🤔"}
      </div>
      <div className="counters">
        <Counter total={totalCount} onClick={handleClick} />
        <Counter total={totalCount} onClick={handleClick} />
      </div>
    </div>
  );
}
