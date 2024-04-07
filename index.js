require("dotenv").config();
const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(cors());
app.use(express.json());

//---------------GET CHARACTER---------------//
app.get("/characters", async (req, res) => {
  try {
    const name = req.query.name || "";
    const skip = req.query.skip || "0";
    const limit = req.query.limit || "100";

    const response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/characters?apiKey=${process.env.API_KEY}&name=${name}&skip=${skip}&limit=${limit}`
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}); //------------------------------------------------//

//---------------GET COMICS ---------------//
app.get("/comics", async (req, res) => {
  try {
    const name = req.query.name || "";
    const skip = req.query.skip || "0";
    const limit = req.query.limit || "100";

    const response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/comics?apiKey=${process.env.API_KEY}&name=${name}&skip=${skip}&limit=${limit}`
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
//------------------------------------------------//

//---------------GET CHARACTER BY ID---------------//
app.get(`/character/:id`, async (req, res) => {
  const id = req.params.id;
  console.log(id);
  try {
    const response = await axios.get(
      `
      https://lereacteur-marvel-api.herokuapp.com/character/${id}?apiKey=${process.env.API_KEY}     `
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
//------------------------------------------------//

//---------------GET COMICS BY CHARARCTER_ID---------------//
app.get(`/comics/:id`, async (req, res) => {
  const id = req.params.id;
  try {
    const response = await axios.get(
      `
      https://lereacteur-marvel-api.herokuapp.com/comics/${id}?apiKey=${process.env.API_KEY}     `
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
//------------------------------------------------//

//---------------GET COMICS BY COMICS_ID---------------//
app.get(`/comic/:id`, async (req, res) => {
  const id = req.params.id;
  try {
    const response = await axios.get(
      `
      https://lereacteur-marvel-api.herokuapp.com/comic/${id}?apiKey=${process.env.API_KEY}     `
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
//------------------------------------------------//

app.all("*", (req, res) => {
  res.status(404).json({ message: "This route does not exist" });
});


app.listen(process.env.PORT, () => {
  console.log("Server started  🚀🚀🚀🚀 ");
});
