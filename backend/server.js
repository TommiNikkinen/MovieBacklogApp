const express = require("express");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 5000;
const bodyParser = require("body-parser");
const { errorHandler } = require("./middleware/errorMiddleware");

const app = express();

app.use(bodyParser.json());

app.use("/api/movies", require("./routes/movieRoutes"));

app.use(errorHandler);

app.listen(port, () => console.log(`Server running on port ${port}`));
