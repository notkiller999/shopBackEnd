import mongoose from "mongoose";
export declare const tabRepository: () => {
    findAllTabs: () => Promise<(mongoose.Document<unknown, {}, {
        id?: string | null;
        title?: string | null;
    }, {}, mongoose.DefaultSchemaOptions> & {
        id?: string | null;
        title?: string | null;
    } & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    })[]>;
};
//# sourceMappingURL=tabsRepository.d.ts.map