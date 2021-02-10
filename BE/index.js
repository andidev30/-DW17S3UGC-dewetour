require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = 3008;

var allowedOrigins = [
  "https://dewetour.andidev.xyz",
  "https://www.dewetour.andidev.xyz"
];

app.use(
  cors({
    origin: function (origin, callback) {
      // allow requests with no origin
      // (like mobile apps or curl requests)
      if (!origin) return callback(null, true);
      if (allowedOrigins.indexOf(origin) === -1) {
        var msg =
          "The CORS policy for this site does not " +
          "allow access from the specified Origin.";
        return callback(new Error(msg), false);
      }
      return callback(null, true);
    },

    exposedHeaders: ["Content-Length", "X-Foo", "X-Bar"],

    credentials: true,
  })
);

app.use(bodyParser.json());

// app.use('/Images', express.static("Images"))
app.use("/uploads", express.static("uploads"));

const routerv1 = require("./routes/routerv1");
app.use("/api/v1", routerv1);

app.use("/", (req, res) => {
  res.send("hello-world");
});

app.listen(port, () => console.log(`listening on port ${port}`));
