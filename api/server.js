const express = require("express");

const rootRouter = require("./routes");

if (
  process.env.NODE_ENV != "development" &&
  process.env.NODE_ENV != "production"
) {
  process.env.NODE_ENV = "development";
}
const NODE_ENV = process.env.NODE_ENV;
const PORT = process.env.API_PORT;

const app = express();

if (NODE_ENV === "development") {
  app.use((req, res, next) => {
    console.log(`got request: ${req.method} ${req.url}`);
    next();
  });
}

app.use("/", rootRouter);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

module.exports = app;
