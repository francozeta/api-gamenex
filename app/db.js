import MySQLDatabase from "./config/db";

export const config = {
  host: "localhost",
  user: "root",
  password: "toor",
  port: 3306,
  database: "red_social",
};

const mysqlConnection = new MySQLDatabase(config);

export default mysqlConnection;
