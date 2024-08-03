import Sequelize from "sequelize";

const conf = {
  username: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  host: process.env.MYSQL_HOST,
  port: 3306,
  dialect: 'mysql',
};
export const db = new Sequelize(conf.database, conf.username, conf.password, {
  host: conf.host,
  port: conf.port,
  dialect: conf.dialect,
});
