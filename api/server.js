const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const rootRouter = require("./routes");

const NODE_ENV = process.env.NODE_ENV;
const MONGO_URL = process.env.COFFEE_ESHOP_HARDCODED_MONGO_URL;
const PORT = process.env.COFFEE_ESHOP_HARDCODED_API_PORT;

if (NODE_ENV !== "development" && NODE_ENV !== "production")
  throw new Error("Set NODE_ENV to 'development' or 'production'");

// to supress a warning
mongoose.set("strictQuery", true);

mongoose
  .connect(MONGO_URL)
  .then(() => console.log(`Connected to the MongoDB: ${MONGO_URL}`))
  .catch((err) =>
    console.error(
      `error occurred during connecting to MongoDB ${MONGO_URL}:\n` + err
    )
  );

const app = express();

app.use(cors());

app.use(express.json({ limit: "10mb" }));

if (NODE_ENV === "development") {
  app.use((req, res, next) => {
    console.log(`got request: ${req.method} ${req.url}`);
    next();
  });
}

app.use("/", rootRouter);

app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));

module.exports = app;
