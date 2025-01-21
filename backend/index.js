import express from 'express';
import ImageKit from "imagekit"
import cors from 'cors';
import sequelize from './Models/db.js';
import dotenv from 'dotenv';
dotenv.config();


const port = process.env.PORT || 3000;
const app = express();

app.use(cors({
    origin:process.env.CLIENT_URL,
}));

app.use(express.json());

const imagekit = new ImageKit({
    urlEndpoint: process.env.IMAGE_KIT_ENDPOINT,
    publicKey: process.env.IMAGE_KIT_PUBLIC_KEY,
    privateKey: process.env.IMAGE_KIT_PRIVATE_KEY
  });

app.get("/api/upload",(req,res)=>{
    const result = imagekit.getAuthenticationParameters();
  res.send(result);
})

app.post("/api/chat",(req,res)=>{
  const {text} = req.body
  console.log(text)
})


sequelize.sync({ force: false }).then(() => {
    app.listen(port, () => console.log(`Server running on port ${port}`));
}).catch(err => console.error('Failed to sync database:', err));