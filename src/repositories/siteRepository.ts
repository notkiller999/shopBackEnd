import mongoose from "mongoose";

export const siteRepository = () => {

    const settingsSchema = new mongoose.Schema(
    {
        id: String,
        // header: Object,
        // bloks: Object,
        // contacts: Object,
        // social: Object
    }
    // { strict: false }
  )

    const Settings = mongoose.model('Settings', settingsSchema, 'site')

    const getSettings = async (id:string | null | undefined) => {
        const site = await Settings.findOne({id});        
        return site
    }

    return {getSettings}
}