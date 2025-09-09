import mongoose from "mongoose";
export const tabRepository = () => {
    const tabsSchema = new mongoose.Schema({
        title: String,
        id: String
    });
    const Tabs = mongoose.model('Tabs', tabsSchema);
    const findAllTabs = async () => {
        const tabs = await Tabs.find();
        return tabs;
    };
    return { findAllTabs };
};
//# sourceMappingURL=tabsRepository.js.map