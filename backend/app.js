const express = require("express");
const authRoutes = require("./routes/auth");
const app = express();

app.use(express.json());
app.use("/api/auth", authRoutes);

app.listen(3001, () => {
  console.log("Backend running on http://localhost:3001");
});
