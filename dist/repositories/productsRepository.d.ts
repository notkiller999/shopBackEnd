import mongoose from "mongoose";
export declare const productRepository: () => {
    findById: (id: string | null | undefined) => Promise<(mongoose.Document<unknown, {}, {
        aditional_section: any[];
        id?: string | null;
        title?: string | null;
        price?: string | null;
        oldPrice?: string | null;
        currency?: string | null;
        show?: string | null;
        description?: string | null;
        avaiability?: string | null;
        section?: string | null;
        photo?: string | null;
        colors?: any;
        characters?: any;
    }, {}, mongoose.DefaultSchemaOptions> & {
        aditional_section: any[];
        id?: string | null;
        title?: string | null;
        price?: string | null;
        oldPrice?: string | null;
        currency?: string | null;
        show?: string | null;
        description?: string | null;
        avaiability?: string | null;
        section?: string | null;
        photo?: string | null;
        colors?: any;
        characters?: any;
    } & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }) | null>;
    filterBySection: (section: string | null | undefined) => Promise<(mongoose.Document<unknown, {}, {
        aditional_section: any[];
        id?: string | null;
        title?: string | null;
        price?: string | null;
        oldPrice?: string | null;
        currency?: string | null;
        show?: string | null;
        description?: string | null;
        avaiability?: string | null;
        section?: string | null;
        photo?: string | null;
        colors?: any;
        characters?: any;
    }, {}, mongoose.DefaultSchemaOptions> & {
        aditional_section: any[];
        id?: string | null;
        title?: string | null;
        price?: string | null;
        oldPrice?: string | null;
        currency?: string | null;
        show?: string | null;
        description?: string | null;
        avaiability?: string | null;
        section?: string | null;
        photo?: string | null;
        colors?: any;
        characters?: any;
    } & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    })[]>;
    findAllProducts: () => Promise<(mongoose.Document<unknown, {}, {
        aditional_section: any[];
        id?: string | null;
        title?: string | null;
        price?: string | null;
        oldPrice?: string | null;
        currency?: string | null;
        show?: string | null;
        description?: string | null;
        avaiability?: string | null;
        section?: string | null;
        photo?: string | null;
        colors?: any;
        characters?: any;
    }, {}, mongoose.DefaultSchemaOptions> & {
        aditional_section: any[];
        id?: string | null;
        title?: string | null;
        price?: string | null;
        oldPrice?: string | null;
        currency?: string | null;
        show?: string | null;
        description?: string | null;
        avaiability?: string | null;
        section?: string | null;
        photo?: string | null;
        colors?: any;
        characters?: any;
    } & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    })[]>;
};
//# sourceMappingURL=productsRepository.d.ts.map