// pages/api/user.ts

import pool from '@/libs/db';
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  name: string;
};

type ErrorResponse = {
  error: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data | ErrorResponse>,
) {
  if (req.method === 'GET') {
    try {
      const result = await pool.query('SELECT name FROM company LIMIT 1');
      const companyName = result.rows[0]?.name || 'Initial Name';
      res.status(200).json({ name: companyName });
    } catch (error) {
      console.error('Database query error:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  } else if (req.method === 'POST') {
    const { name } = req.body;
    
    if (typeof name === 'string' && name.trim()) {
      try {
        await pool.query('UPDATE company SET name = $1 WHERE id = 1', [name]);
        res.status(200).json({ name });
      } catch (error) {
        console.error('Database update error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
    } else {
      res.status(400).json({ error: 'Invalid name provided' });
    }
  } else {
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).json({ error: `Method ${req.method} Not Allowed` });
  }
}
