const dotenv = require("dotenv");
dotenv.config({ path: "backend/config/config.env" });
const express = require("express");
const app = express();
const errorMiddleware = require("./middlewares/error");
const { connectDB } = require("./config/dbConnection");

// handling Uncaught Exception
process.on("uncaughtException",(err)=>{
  console.log(`Error: ${err}`);
  console.log('Shutting down the server due to uncaught Exception');
  process.exit(1)
})
app.use(express.json());

const product = require("./routes/productRoute");

app.use("/api/v1", product);
connectDB();
const server =  app.listen(process.env.PORT, () => {
  console.log("App is running", process.env.PORT);
});

app.use(errorMiddleware);

// Unhandled Promise Rejection
process.on("unhandledRejection",(err)=>{
  console.log(`Error: ${err.message}`);
  console.log(`Shuting down the server due to unhandled Promise Rejection`);
  server.close(()=>{
    process.exit(1)
  })
})
