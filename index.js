const express = require("express");
require("dotenv").config();
const route = require("./routes/client/client.route");
const app = express();
const port = process.env.PORT;

app.set("views", "./views");
app.set("view engine", "pug");

app.use("/",route)

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
