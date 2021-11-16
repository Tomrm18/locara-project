const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const CarsModel = require("./models/cars");
const cors = require("cors");

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());

// connecting to the mongodb database
mongoose.connect(
  `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@cluster0.gmlrq.mongodb.net/locara-cars`
);

// starting the server
app.listen(`${process.env.PORT}`, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});

// test get route to mongodb database
app.get("/cars", (req, res) => {
  CarsModel.find({}, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
});

app.get("/cars/:carID", (req, res) => {
  const { carID } = req.params;
  CarsModel.find({ id: carID }, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
});

app.post("/submit", async (req, res) => {
  const car = req.body;
  const newCar = new CarsModel(car);
  await newCar.save();

  res.json(car);
});
