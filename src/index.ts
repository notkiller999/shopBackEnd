// server-mongoose.js
import mongoURI from './mongoURI.js';
import express from 'express';
import mongoose from 'mongoose';
import { productsRouter } from './routes/productsRouter.js';
import { categoriesRouter } from './routes/categoriesRouter.js';
import { tabsRouter } from './routes/tabsRouter.js';
import { siteRouter } from './routes/siteRouter.js';

const app = express();
const uri = mongoURI;

app.use(express.json());

mongoose.connect(uri)
  .then(() => console.log("Connected to MongoDB"))
  .catch(console.error);

app.use('/site', siteRouter)

app.use('/products', productsRouter);

app.use('/categories', categoriesRouter);

app.use('/tabs', tabsRouter);

// app.post('/products', async (req, res) => {
//   const newProduct = new Product(req.body);
//   await newProduct.save();
//   res.status(201).send("Product added");
// });

app.listen(3000, () => console.log("Server running on http://localhost:3000"));

