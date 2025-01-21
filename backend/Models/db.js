 import dotenv from 'dotenv';
dotenv.config();
import { Sequelize } from '@sequelize/core';
import { PostgresDialect } from '@sequelize/postgres';

const sequelize = new Sequelize({
  dialect: PostgresDialect,
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT || 5432,
  ssl: false,
  clientMinMessages: 'notice',
});

sequelize
.authenticate()
.then(()=>console.log("database connected..."))
.catch(err => console.error('unable to connect to the database', err));

export default sequelize;