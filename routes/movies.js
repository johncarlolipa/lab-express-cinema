const express = require("express");
const router = express.Router();
const Movie = require("../models/Movie.model");

// Route to render the movies view
router.get("/movies", async (req, res) => {
  try {
    const movies = await Movie.find();

    res.render("movies", { title: "Movie List", movies });
  } catch (error) {
    console.error("Error fetching movies:", error);
    res.status(500).send("Internal Server Error");
  }
});

router.get("/movies/:id", async (req, res) => {
  const movieId = req.params.id;

  try {
    const movie = await Movie.findById(movieId);

    res.render("movie", { title: movie.title, movie });
  } catch (error) {
    console.error("Error fetching movie details:", error);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
