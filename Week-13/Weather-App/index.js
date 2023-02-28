const express = require("express");
const path = require("path");
// const { route } = require("./routes/city");
const port = 3000;
const app = express();

app.use(express.static(path.join(__dirname, "static")));

app.use("/", require("./routes/city"));
app.use("/forecast", require("./routes/forecastData"));

app.listen(port, () => {
  console.log(`This app running on http://localhost:${port}`);
});
