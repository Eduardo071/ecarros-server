import { Router } from "express";
import { findAll } from "../services/carrosService";

const router = Router();

router.get('/', async (_, res) => {
    const response = await findAll();
    res.json(response);
})

export default router;