import mongoose from "mongoose";

export const categoriesRepository = () => {
    const categoriesSchema = new mongoose.Schema({
        id: String,
        title: String,
        subCategories: Array
    });

    const Categories = mongoose.model('Categories', categoriesSchema);

    const getAllCategories = async () => {
        const allCategories = await Categories.find();
        return allCategories
    }

    return {getAllCategories}
}