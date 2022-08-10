const express = require("express");

const app = express();

const bodyParser = require('body-parser');

const admin = require("./routes/admin");
const market = require("./routes/market");

app.use(bodyParser.urlencoded({ extended: false }));
app.use("/admin", admin);
app.use(market);

app.listen(4000);
