import mysql from "mysql2/promise";

const connection = await mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "manager",
  database: "movie_system",
});

// A simple SELECT query

export default connection;
