// pages/api/hi.js
export default function handler(req, res) {
  console.log("Inside hi api handler");
  res.status(200).json({ message: "Hi from the API" });
}
