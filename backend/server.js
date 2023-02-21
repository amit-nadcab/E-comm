const dotenv = require("dotenv");
dotenv.config({ path: "backend/config/config.env" });
const express = require("express");
const app = express();
const errorMiddleware = require("./middlewares/error");
const { connectDB } = require("./config/dbConnection");
app.use(express.json());
app.use(errorMiddleware);

const product = require("./routes/productRoute");

app.use("/api/v1", product);
connectDB();
app.listen(process.env.PORT, () => {
  console.log("App is running", process.env.PORT);
});
