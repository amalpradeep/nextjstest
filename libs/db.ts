// lib/db.js

import { Pool } from 'pg';

const pool = new Pool({
    connectionString: "postgres://default:xw0GpV2zhHFk@ep-polished-union-a45h11re-pooler.us-east-1.aws.neon.tech:5432/verceldb?sslmode=require?sslmode=require",
});

export default pool;
