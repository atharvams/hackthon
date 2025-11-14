import "dotenv/config";

export const envConfig = {
  PORT: process.env.PORT,
  JWT_SECRET: process.env.JWT_SECRET || "xfhgcjvbkfjchgkvbljngjhkbnds12334",
  MYSQL_CONFIG: {
    host: process.env.MYSQL_HOST || "localhost",
    user: process.env.MYSQL_USER || "root",
    password: process.env.MYSQL_PASSWORD || "manager",
    database: process.env.MYSQL_DATABASE || "movie_system",
  },
};
