// src/index.ts
import express from "express";

const app = express();

app.use(express.json());


app.get("/", (req, res) => {
  res.send("oiiiii laura bl kla");
});


const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});