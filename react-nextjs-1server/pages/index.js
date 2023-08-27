// pages/index.js
import React from "react";
import ClientRendered from "../src/components/ClientRendered";
import SSRPage from "./SSRPage";
import About from "./About";
import Link from "next/link";

const FrontendApp = () => (
  <div>
    <h1>Frontend React App</h1>
    <ClientRendered />
    <SSRPage />
    <About />
  </div>
);

export default FrontendApp;
