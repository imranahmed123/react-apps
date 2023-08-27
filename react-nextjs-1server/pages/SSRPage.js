// pages/SSRPage.js
import React from "react";

const SSRPage = ({ message }) => (
  <div>
    <h1>ServerSideRendering for SSRPage</h1>
    <p>Message from the API: {message}</p>
  </div>
);

export async function getServerSideProps() {
  console.log("Inside getServerSideProps");
  const response = await fetch("/api/hi");
  const data = await response.json();
  console.log(data.message);
  const message = data;
  console.log(message);

  return {
    props: {
      message,
    },
  };
}

export default SSRPage;
