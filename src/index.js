import React from "react";
import ReactDOM from "react-dom/client";
import AppForm from "./AppForm";
import AppMentor from "./AppMentor";
import AppMentors from "./AppMentors";
import AppTheme from "./AppTheme";
import AppWrap from "./AppWrap";
import AppMentorsBtn from "./AppMentorsBtn";
import AppProducts from "./basic/AppProducts";
import AppCounter from "./basic/AppCounter";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppMentors />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
