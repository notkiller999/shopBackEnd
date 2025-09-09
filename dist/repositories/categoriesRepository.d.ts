import mongoose from "mongoose";
export declare const categoriesRepository: () => {
    getAllCategories: () => Promise<(mongoose.Document<unknown, {}, {
        subCategories: any[];
        id?: string | null;
        title?: string | null;
    }, {}, mongoose.DefaultSchemaOptions> & {
        subCategories: any[];
        id?: string | null;
        title?: string | null;
    } & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    })[]>;
};
//# sourceMappingURL=categoriesRepository.d.ts.map