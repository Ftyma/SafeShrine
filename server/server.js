const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

const Product = require("./models/productModel");
const Letter = require("./models/letterModel");

app.use(cors());
app.use(express.json());

//create new letter
app.post("/post-letter", async (req, res) => {
  try {
    const letter = await Letter.create(req.body);
    res.status(200).json(letter);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

//get all letter
app.get("/get-letter", async (req, res) => {
  try {
    const letter = await Letter.find({});
    res.status(200).json(letter);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//get letter by id
app.get("/get-letter/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const letter = await Letter.findById(id);

    console.log(id);
    if (!letter) {
      return res.status(404).json({ message: "Item not found" });
    }

    res.status(200).json(letter);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//delete
app.delete("/delete-letter/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const letter = await Letter.findByIdAndDelete(id);

    if (!letter) {
      return res
        .status(400)
        .json({ message: `cant find any product with ID ${id} ` });
    }
    res.status(200).json(letter);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//update a product
app.put("/update-letter/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const letter = await Letter.findByIdAndUpdate(id, req.body);

    //we can't find any prod in database
    if (!letter) {
      return res
        .status(404)
        .json({ message: `cannnot find any product with ID ${id}` });
    }
    const updatedLetter = await Letter.findById(id);
    res.status(200).json(letter);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// app.get("/letter", async (req, res) => {
//   try {
//     const letter = await Letter.find({});
//     res.status(200).json(letter);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// app.post("/post-letter", async (req, res) => {
//   try {
//     const letter = await Letter.create(req.body);
//     res.status(200).json(letter);
//   } catch (error) {
//     console.log(error.message);
//     res.status(500).json({ message: error.message });
//   }
// });

// //example
// app.get("/product", async (req, res) => {
//   try {
//     const product = await Product.find({});
//     res.status(200).json(product);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// app.get("/product/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const product = await Product.findById(id);
//     res.status(200).json(product);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// app.post("/product", async (req, res) => {
//   try {
//     const product = await Product.create(req.body);
//     res.status(200).json(product);
//   } catch (error) {
//     console.log(error.message);
//     res.status(500).json({ message: error.message });
//   }
// });

// //update a product
// app.put("/product/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const product = await Product.findByIdAndUpdate(id, req.body);

//     //we can't find any prod in database
//     if (!product) {
//       return res
//         .status(404)
//         .json({ message: `cannnot find any product with ID ${id}` });
//     }
//     const updatedProduct = await Product.findById(id);
//     res.status(200).json(product);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// //delete a product
// app.delete("/product/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const product = await Product.findByIdAndDelete(id);
//     if (!product) {
//       return res
//         .status(400)
//         .json({ message: `cant find any product with ID ${id} ` });
//     }
//     res.status(200).json(product);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

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
