import { DataTypes } from "sequelize";

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

export { UserChats, Chats };





