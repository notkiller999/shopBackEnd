import { Router } from "express";
import { siteRepository } from "../repositories/siteRepository.js";

const {getSettings} = siteRepository();

export const siteRouter = Router({});

siteRouter.get('/', async (req, res) => {
    const settings = await getSettings(req.query.id?.toLocaleString());

    if(!settings) {
        res.sendStatus(404);
        return;
    } else {
        res.status(200);
        res.json(settings);
        return
    }
})