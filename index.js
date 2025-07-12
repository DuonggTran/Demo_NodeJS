const express = require("express");
const flash = require('express-flash');   
const cookieParser = require('cookie-parser'); 
const session = require('express-session'); 
const methodOverride = require('method-override');
require("dotenv").config();

const database = require("./config/database")
const route = require("./routes/client/client.route");
const routeAdmin = require("./routes/admin/admin.route");
const systemConfig = require("./config/system");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT;


database.connect();
app.set("views", "./views");
app.set("view engine", "pug");
app.use(express.static("public"));
app.use(methodOverride('_method')); 
app.use(bodyParser.urlencoded({extended: false})); 

app.locals.prefixAdmin = systemConfig.prefixAdmin;

app.use(cookieParser("A"));
app.use(session({cookie:{maxAge:60000}}));
app.use(flash());

route(app);
routeAdmin(app);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
