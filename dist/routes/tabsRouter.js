import { Router } from "express";
import { tabRepository } from "../repositories/tabsRepository.js";
export const tabsRouter = Router({});
const { findAllTabs } = tabRepository();
tabsRouter.get('/', async (req, res) => {
    const allTabs = await findAllTabs();
    res.json(allTabs);
});
//# sourceMappingURL=tabsRouter.js.map