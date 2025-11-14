import express from "express";
import connection from "../../db/dbUtil.js";
const movieRouter = express.Router();

movieRouter.get("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const [result] = await connection.query(
      "SELECT * FROM movies WHERE movie_id = ?;",
      [id]
    );

    if (result.length > 0) {
      res.send({ movie: result[0] }).status(200);
    } else {
      res.send({ error: "Movie not found" }).status(404);
    }
  } catch (err) {
    console.log(err);
    res.send({ error: "Error fetching movie" }).status(500);
  }
});

movieRouter.get("/", async (req, res) => {
  try {
    const [results] = await connection.query("SELECT * FROM movies;");

    if (results.length > 0) {
      res.send({ results }).status(200);
    }
  } catch (err) {
    console.log(err);
    res.send({ error: "Error fetching movies" }).status(500);
  }
});

export default movieRouter;
