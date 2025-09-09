import { Router } from "express";
import { categoriesRepository } from "../repositories/categoriesRepository.js";

const {getAllCategories} = categoriesRepository()

export const categoriesRouter = Router({});

categoriesRouter.get('/', async (req, res) => {
    const allCategories = await getAllCategories();
    res.json(allCategories)
});