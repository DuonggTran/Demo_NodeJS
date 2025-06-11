const express = require("express");
require("dotenv").config();

const database = require("./config/database")
const route = require("./routes/client/client.route");
const routeAdmin = require("./routes/admin/admin.route");
const systemConfig = require("./config/system")
const app = express();
const port = process.env.PORT;
database.connect();
app.set("views", "./views");
app.set("view engine", "pug");
app.use(express.static("public"));

app.locals.prefixAdmin = systemConfig.prefixAdmin;

route(app);
routeAdmin(app);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
