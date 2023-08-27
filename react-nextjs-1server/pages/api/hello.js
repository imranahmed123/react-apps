// pages/api/hello.js
export default function handler(req, res) {
  console.log("Inside hello api handler");
  res.status(200).json({ message: "Hello from the API" });
}
