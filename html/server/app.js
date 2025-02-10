import express from "express";
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

const PORT = 5001;

app.use(express.static(path.join(__dirname, "build")));
app.get("/suhail", (req, res) => {
  res.status(200).json({ message: "HELLO SUHAIL" });
});

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});
app.listen(PORT, () => {
  console.log(`Server is up and listening`);
});