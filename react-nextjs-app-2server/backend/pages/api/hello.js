// pages/api/hello.js
import cors from "cors";
import { NextApiRequest, NextApiResponse } from "next";

const corsHandler = cors({
  origin: "http://localhost:3000",
  methods: ["GET", "HEAD", "OPTIONS", "POST"],
});

export default function handler(req, res) {
  corsHandler(req, res, () => {
    res.status(200).json({ message: "Hello from the backend API" });
  });
}
