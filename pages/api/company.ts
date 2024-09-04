// pages/api/user.ts
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

let companyName = "Initial Name"; 

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  if (req.method === "GET") {
    res.status(200).json({ name: companyName });
  } else if (req.method === "POST") {
    const { name } = req.body;
    if (name) {
      companyName = name;
      res.status(200).json({ name: companyName });
    } else {
      res.status(400).json({ name: "Invalid name" });
    }
  } else {
    res.setHeader("Allow", ["GET", "POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
