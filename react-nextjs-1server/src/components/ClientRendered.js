// src/components/ClientRendered.js
import React, { useState, useEffect } from "react";

const ClientRendered = () => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("/api/hello")
      .then((response) => response.json())
      .then((data) => setMessage(data.message))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
      <h1>Client-Side Rendered Component</h1>
      <p>Message from the API: {message}</p>
    </div>
  );
};

export default ClientRendered;
