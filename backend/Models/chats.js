import { DataTypes } from "sequelize";
import sequelize from "./db";

// Define the UserChats model
const chat = sequelize.define(
  "Chats",
  {
    userId: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    img: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { timestamps: true }
);

// Define the ChatHistory model
const ChatHistory = sequelize.define(
  "ChatHistory",
  {
    role: {
      type: DataTypes.ENUM("user", "model"),
      allowNull: false,
    },
    text: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    userChatId: {
      type: DataTypes.INTEGER,
      references: { model: UserChats, key: "id" },
      onDelete: "CASCADE",
    },
  },
  { timestamps: true }
);

// Establish associations
UserChats.hasMany(ChatHistory, {
  foreignKey: "ChatId",
  as: "history", // Alias for easier access
});
ChatHistory.belongsTo(UserChats, {
  foreignKey: "ChatId",
  as: "Chat",
});

export { chat, ChatHistory };
