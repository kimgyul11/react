import logo from "./logo.svg";
import "./App.css";

function AppJSX() {
  const list = ["우유", "딸기", "바나나", "요거트"];
  const name = "기율킴";
  return (
    <>
      <h1 className="orange">{`Hello ${name}`}</h1>
      <p>{name}</p>
      <ul>
        {list.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default AppJSX;
