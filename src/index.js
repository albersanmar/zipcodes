require("dotenv").config();

const express = require("express");
const cors = require("cors");
const routes = require("./routes");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use("/api/v1", routes);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
