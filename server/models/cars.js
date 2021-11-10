const mongoose = require("mongoose");

const CarsSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  odometer: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  transmission: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

const CarsModel = mongoose.model("cars", CarsSchema);

// exporting Cars model to be used elsewhere
module.exports = CarsModel;
