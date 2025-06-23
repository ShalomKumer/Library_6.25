const mongoose = require("mongoose");
let Schema = mongoose.Schema;

let BookSchema = new Schema({
  imageURL: {
    type: String,
    required: [true, "image URL is required"],
    trim: true,
  },
  alt: String,
  book_name: {
    type: String,
    required: [true, "book must have a name!"],
  },
  description: String,
  price: {
    type: Number,
    required: [true, "book must have a price!"],
    min: [33, "min price is $33"],
  },
  year: Number,
  writer: String,
});

module.exports = mongoose.model("Library", BookSchema);
