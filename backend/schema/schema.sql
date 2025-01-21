-- Create UserChats Table if not exists
CREATE TABLE IF NOT EXISTS "UserChats" (
  "id" SERIAL PRIMARY KEY,
  "userId" VARCHAR(100) NOT NULL,
  "createdAt" TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

-- Create Chats Table if not exists
CREATE TABLE IF NOT EXISTS "Chats" (
  "id" SERIAL PRIMARY KEY,
  "userChatId" INTEGER NOT NULL,
  "title" VARCHAR,
  "createdAt" TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT "fk_userChatId" FOREIGN KEY ("userChatId") REFERENCES "UserChats"("id") ON DELETE CASCADE
);

-- Create ChatHistory Table if not exists
CREATE TABLE IF NOT EXISTS "ChatHistory" (
  "id" SERIAL PRIMARY KEY,
  "role" VARCHAR(10) CHECK ("role" IN ('user', 'model')) NOT NULL,
  "text" VARCHAR,
  "userChatId" INTEGER NOT NULL,
  "createdAt" TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT "fk_userChatId_chatHistory" FOREIGN KEY ("userChatId") REFERENCES "UserChats"("id") ON DELETE CASCADE
);
