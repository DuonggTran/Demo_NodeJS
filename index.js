const express = require("express");
const database = require("./config/database")
require("dotenv").config();
const route = require("./routes/client/client.route");
const app = express();
const port = process.env.PORT;

database.connect();

app.set("views", "./views");
app.set("view engine", "pug");

app.use(express.static("public"));

route(app);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
