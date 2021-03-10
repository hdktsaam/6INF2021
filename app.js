const express = require("express");
const app = express();
const content = require("./routes/contentWebsite.js");
const mongoose = require("mongoose");

// mongoose.connect("mongodb://localhost:27017/uitlegeindwerk", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// connect to external monogdb
mongoose.connect(
  "mongodb+srv://TsaamAdmin:Tsaam2021@cluster0.xdnkn.mongodb.net/uitlegeindwerk",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(express.json());

app.use("/api/content", content);

// set PORT=4000 --> env variabelen staan vaak ingesteld op de machine waar het uiteindelijk zal werken
const port = process.env.PORT || 3003;
app.listen(port, () => console.log(`luistert naar poort ${port}`));
