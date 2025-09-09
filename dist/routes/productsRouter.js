import { Router } from "express";
import { productRepository } from "../repositories/productsRepository.js";
const { findById, filterBySection, findAllProducts } = productRepository();
export const productsRouter = Router({});
productsRouter.get('/', async (req, res) => {
    if (req.query.id) {
        const product = await findById(req.query.id?.toString());
        if (!product) {
            res.sendStatus(404);
            return;
        }
        else {
            res.status(200);
            res.json(product);
            return;
        }
    }
    if (req.query.section) {
        const products = await filterBySection(req.query.section?.toString());
        res.status(200);
        res.json(products);
        return;
    }
    const allProducts = await findAllProducts();
    res.json(allProducts);
});
productsRouter.get('/:id', async (req, res) => {
    const product = await findById(req.params.id?.toString());
    if (!product) {
        res.sendStatus(404);
        return;
    }
    else {
        res.status(200);
        res.json(product);
        return;
    }
});
//# sourceMappingURL=productsRouter.js.map