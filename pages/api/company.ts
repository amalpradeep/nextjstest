// pages/api/user.ts
import type { NextApiRequest, NextApiResponse } from "next";
import db from "../db/database";

type Data = {
  name: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "GET") {
    // Fetch the company name from the database
    const stmt = db.prepare("SELECT name FROM company ORDER BY id DESC LIMIT 1");
    const result = stmt.get();

    if (result) {
      res.status(200).json({ name: result.name });
    } else {
      res.status(404).json({ name: "No company name found" });
    }
  } else if (req.method === "POST") {
    const { name } = req.body;

    if (name) {
      // Insert or update the company name in the database
      const insertStmt = db.prepare("INSERT INTO company (name) VALUES (?)");
      insertStmt.run(name);

      res.status(200).json({ name });
    } else {
      res.status(400).json({ name: "Invalid name" });
    }
  } else {
    res.setHeader("Allow", ["GET", "POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
