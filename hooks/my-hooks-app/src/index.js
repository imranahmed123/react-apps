import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
//import App from "./App";
import Counter from "./01-UseState-Counter";
import CounterWithReducer from "./02-Reducer-CounterWithReducer";
import Timer from "./03-useeffect-timer-app";
import AThemeContextApp from "./04-a-use-context-theme-app";
import BThemeContextApp from "./04-b-use-context-theme-app";
import TextInput from "./05-use-ref-textinput-app";
import MemoizedComponent from "./06-use-callback-memoized-app";
import RandomNumber from "./07-use-memo-randonnumber";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Counter />
    <CounterWithReducer />
    <Timer />
    <AThemeContextApp />
    <BThemeContextApp />
    <TextInput />
    <MemoizedComponent />
    <RandomNumber />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
