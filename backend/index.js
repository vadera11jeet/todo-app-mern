import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import * as dotenv from "dotenv";
import taskRoutes from "./routers/taskRoutes.js";

dotenv.config();
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ extended: true }));
app.use(cors());

const PORT = process.env.PORT || 5000;
app.use("/task", taskRoutes);

mongoose
  .connect(process.env.CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () => {
      console.log("successfully connected with database");
      console.log(`server is running on ${PORT}`);
    })
  )
  .catch((err) => console.log(err));
