// // // import { DataTypes } from "sequelize";
// // // import sequelize from "./db";

// // // // Define the UserChats model
// // // const UserChats = sequelize.define(
// // //   "UserChats",
// // //   {
// // //     userId: {
// // //       type: DataTypes.STRING(100),
// // //       allowNull: false,
// // //     },
// // //   },
// // //   { timestamps: true }
// // // );

// // // // Define the Chats model
// // // const Chats = sequelize.define(
// // //   "Chats",
// // //   {
// // //     title: {
// // //       type: DataTypes.STRING,
// // //       allowNull: true,
// // //     },
// // //     createdAt: {
// // //       type: DataTypes.DATE,
// // //       defaultValue: DataTypes.NOW, // Use Sequelize's default timestamp
// // //     },
// // //   },
// // //   { timestamps: false } // Disable automatic timestamps for this model
// // // );

// // // // Establish relationships
// // // UserChats.hasMany(Chats, { foreignKey: "userChatId", as: "chats" });
// // // Chats.belongsTo(UserChats, { foreignKey: "userChatId", as: "userChat" });

// // // export { UserChats, Chats };


// // import { DataTypes, ENUM } from "sequelize";
// // import sequelize from "./db";
// // import { types } from "pg";

// // const userChats =sequelize.define('',{
// //     userId:{
// //         type: DataTypes.STRING(100),
// //         allowNull: false,
// //     },
// //     history:[{
// //         role:{
// //             type: DataTypes.STRING,
// //             enum: ['user',"model"],
// //             allowNull:true,
// //         },
// //         parts:[{
// //             text:{
// //                 type: DataTypes.STRING,
// //                 allowNull: true,
// //             }
// //         }],
// //         img:{
// //             type: DataTypes.STRING,
// //             allowNull: false,
// //         }
// //     }]

// // }, {timestamps:true})

// // export default userChats


// import { DataTypes,Model, Sequelize } from "sequelize";
// import { Attribute, NotNull, Table } from '@sequelize/core/decorators-legacy';
// import { PostgresDialect } from "@sequelize/postgres";
// import { attribute } from "@sequelize/core/_non-semver-use-at-your-own-risk_/expression-builders/attribute.js";


// const sequelize = new Sequelize ({dialect: PostgresDialect});

// export class userChats extends Model{
//   @attribute(DataTypes.STRING(100))
//   @NotNull
//   userID;

//   @attribute(DataTypes.)

//  // history:[{
//     //         role:{
//     //             type: DataTypes.STRING,
//     //             enum: ['user',"model"],
//     //             allowNull:true,
//     //         },
//     //         parts:[{
//     //             text:{
//     //                 type: DataTypes.STRING,
//     //                 allowNull: true,
//     //             }
//     //         }],

// }


import { DataTypes, Model, Sequelize } from "sequelize";
import { Attribute, NotNull, Table, PrimaryKey, AutoIncrement } from "@sequelize/core/decorators-legacy";
import { PostgresDialect } from "@sequelize/postgres";

// Initialize the Sequelize instance with PostgreSQL dialect
const sequelize = new Sequelize({
  dialect: PostgresDialect,
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT || 5432,                   // Default PostgreSQL port
});

// Define the UserChats model
@Table({ tableName: "UserChats", timestamps: true })
export class UserChats extends Model {
  @Attribute(DataTypes.STRING(100))
  @NotNull
  userId;
}

// Define the Chats model
@Table({ tableName: "Chats", timestamps: false })
export class Chats extends Model {
  @PrimaryKey
  @AutoIncrement
  @Attribute(DataTypes.INTEGER)
  id;

  @Attribute(DataTypes.STRING)
  title;

  @Attribute(DataTypes.DATE)
  createdAt = DataTypes.NOW; // Use Sequelize's default timestamp
}

// Establish relationships
UserChats.hasMany(Chats, { foreignKey: "userChatId", as: "chats" });
Chats.belongsTo(UserChats, { foreignKey: "userChatId", as: "userChat" });

// Initialize the models with the Sequelize instance
(async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection established successfully.");

    await sequelize.sync({ alter: true }); // Sync models with the database
    console.log("Database synchronized successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
})();
