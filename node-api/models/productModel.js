const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    name: {
        type: String,
        required: [true, "Please enter the product name!"]
    },
    quantity: {
        type: Number,
        required: [true, 'Enter the quantity!'],
        default: 0
    },
    image: {
        type: String, 
        required: false
    },
    price: {
        type: Number,
        required: true 
    }
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model('Product', productSchema)

module.exports = Product;