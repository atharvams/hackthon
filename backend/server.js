import express from "express";
import authRouter from "./auth/authRouter.js";
import movieRouter from "./resource/movie/moviesRoutes.js";
import { envConfig } from "./util/env.config.js";

const app = express();

app.use(express.json());
app.use("/auth", authRouter);
app.use("/movies", movieRouter);

app.get("/", (req, res) => {
  res.send("Hello!");
});

app.listen(envConfig.PORT, () => {
  console.log(`Listening to port ${envConfig.PORT}.`);
});
