const { Pool } = require('pg');

const pool = new Pool({
  connectionString:  "postgresql://neondb_owner:npg_YPOqy5XGv0lA@ep-winter-butterfly-a8j8wdga-pooler.eastus2.azure.neon.tech/neondb?sslmode=require",
  ssl: {
    rejectUnauthorized: false,
  },
});

pool.connect()
  .then(async (client) => {
    const result = await client.query("SELECT current_database()");
    console.log(`✅ Connected to Neon PostgreSQL Database: ${result.rows[0].current_database}`);
    client.release(); // Release the client back to the pool
  })
  .catch(err => console.error("❌ Connection error:", err.message));

module.exports = pool;
