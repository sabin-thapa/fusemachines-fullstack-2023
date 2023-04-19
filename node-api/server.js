const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}))
const mongoose = require("mongoose");

const Product = require("./models/productModel");

const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Response from the server!");
});


// GET Request Implementation
app.get("/products", async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
});

//Get a specific product
app.get('/products/:id', async (req, res) => {
    try {
        const product = await Product.findById(req.params.id)
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
})

// POST Request Implementation
app.post("/products", async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(200).json(product);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
});

//Update/Edit PUT Request implementation

app.put('/products/:id', async (req, res) => {
    try {
        const product = await Product.findByIdAndUpdate(req.params.id, req.body)
        
        //if the product does not exist in the database:
        if(!product) {
           return res.status(404).json(`The product with the ID ${res.params.id} does not exist!`)
        }

        const updatedProduct = await Product.findById(req.params.id)

        res.status(200).json(updatedProduct)
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
})


// DELETE API for products

app.delete('/products/:id', async(req, res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id)

        //If the product does not exist
        if(!product) {
            return res.status(404).json(`The product with the ID ${req.params.id} does not exist`)
        }

        res.status(200).json(product)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

mongoose.set("strictQuery", false);
mongoose
  .connect(
    "mongodb+srv://admin:therealadmin@internship.ddm4lh4.mongodb.net/nodeAPI?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Connected to the DB!");
  })
  .catch((err) => {
    console.log("Error: ", err);
  });

app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});
