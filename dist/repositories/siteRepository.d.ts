import mongoose from "mongoose";
export declare const siteRepository: () => {
    getSettings: (id: string | null | undefined) => Promise<(mongoose.Document<unknown, {}, {
        id?: string | null;
    }, {}, mongoose.DefaultSchemaOptions> & {
        id?: string | null;
    } & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }) | null>;
};
//# sourceMappingURL=siteRepository.d.ts.map