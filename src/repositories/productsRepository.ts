import mongoose from "mongoose";

export const productRepository = () => {

    const productSchema = new mongoose.Schema({
        id: String,
        title: String,
        price: String,
        oldPrice: String,
        currency: String,
        show: String,
        description: String,
        avaiability: String,
        section: String,
        aditional_section: Array,
        photo: String,
        colors: Object,
        characters: Object
    })


    const Product = mongoose.model('Product', productSchema);

    const findById = async (id: string | null | undefined) => {        
        const product = await Product.findOne({id});
        return product;
    }

    const filterBySection = async(section: string | null | undefined) => {
        const products = await Product.find({section});
        return products
    }

    const findAllProducts = async () => {        
        const allProducts = await Product.find();        
        return allProducts;
    }

    return {findById, filterBySection, findAllProducts}
};