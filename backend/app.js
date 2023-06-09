const express = require("express");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");
const cors =  require("cors");

// const path = require("path");
const app = express();
// Config

if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({ path: "backend/config/config.env" });
}
const errorHandler = require("../backend/middleware/error");

app.use(express.json());
app.use(cookieParser()); // it must be here before routes
app.use(cors({ origin: true, credentials: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileUpload());
// Routes
const product = require("./routes/productRoute");
const user = require("./routes/userRoute");
const order = require("./routes/orderRoute");
const contact = require("./routes/contactRoute");
const payment = require("./routes/paymentRoute");
const farmerQnA = require("./routes/farmerQnA_Route");
app.use("/api/v1", product);
app.use("/api/v1", user);
app.use("/api/v1", order);
app.use("/api/v1", contact);
app.use("/api/v1", payment);
app.use("/api/v1", farmerQnA);

// app.use(express.static(path.join(__dirname, "../frontend/build")));

// app.get("*", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "../frontend/build/index.html"));
// });

// middleware for errors
app.use(errorHandler);

module.exports = app;
