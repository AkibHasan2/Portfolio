import sql from "mssql";
import "dotenv/config";

const config = {
  server: process.env.DB_SERVER,
  port: Number(process.env.DB_PORT || 1433),
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  options: {
    encrypt: process.env.DB_ENCRYPT !== "false",
    trustServerCertificate: process.env.DB_TRUST_CERT !== "false",
  },
  pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 30000,
  },
};

let poolPromise;

/**
 * Returns a singleton, lazily-initialized connection pool.
 * Every controller should `await getPool()` rather than opening its own connection.
 */
export function getPool() {
  if (!poolPromise) {
    poolPromise = new sql.ConnectionPool(config)
      .connect()
      .then((pool) => {
        console.log(`[db] Connected to ${config.database} on ${config.server}`);
        return pool;
      })
      .catch((err) => {
        poolPromise = undefined; // allow retry on next request
        console.error("[db] Connection failed:", err.message);
        throw err;
      });
  }
  return poolPromise;
}

export { sql };
