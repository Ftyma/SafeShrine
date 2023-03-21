const express = require("express");
const mongoose = require("mongoose");
const app = express();
const Product = require("./models/productModel");

// app.get("/api", (req, res) => {
//   res.json({ users: ["user1", "user2", "user3"] });
//   console.log(error);
// });

app.use(express.json());

app.get("/api", (req, res) => {
  res.json({ users: ["hello", "hello2"] });
});

app.get("/product", async (req, res) => {
  try {
    const product = await Product.find({});
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get("/product/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.post("/product", async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(200).json(product);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

//update a product
app.put("/product/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body);

    //we can't find any prod in database
    if (!product) {
      return res
        .status(404)
        .json({ message: `cannnot find any product with ID ${id}` });
    }
    const updatedProduct = await Product.findById(id);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//delete a product
app.delete("/product/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndDelete(id);
    if (!product) {
      return res
        .status(400)
        .json({ message: `cant find any product with ID ${id} ` });
    }
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

mongoose
  .connect(
    "mongodb+srv://admin:12345admin@cluster0.avq7kyp.mongodb.net/Node-API?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("connected to MongoDB");
    app.listen(5000, () => {
      console.log("server is on port 5000");
    });
  })
  .catch(() => {
    console.log(error());
  });
