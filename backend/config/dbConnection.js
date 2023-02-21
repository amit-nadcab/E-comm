const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
exports.connectDB = () => {
  mongoose
    .connect(process.env.DB_URI)
    .then((data) => {
      console.log(`MongoDB connected  with server: ${data.connection.host}`);
    })
    .catch((err) => {
      console.log(err);
    });
};
