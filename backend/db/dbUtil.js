import mysql from "mysql2/promise";
import { envConfig } from "../util/env.config.js";

const connection = await mysql.createConnection({
  host: envConfig.MYSQL_CONFIG.host,
  user: envConfig.MYSQL_CONFIG.user,
  password: envConfig.MYSQL_CONFIG.password,
  database: envConfig.MYSQL_CONFIG.database,
});


export default connection;
