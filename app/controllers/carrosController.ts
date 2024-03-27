import { Router } from "express";
import { findAll } from "../services/carrosService";
import { BusinessException } from "../utils/BusinessException";

const router = Router();

router.get('/', async (_, res) => {
    try {
        const result = await findAll();

        if (!result) {
            return res.status(404).json(BusinessException("NOT_FOUND", "Os carros não foram encontrados."));
        }

        return res.status(200).json(result);
    } catch (error) {
        console.error(error);
        return res.status(500).json(BusinessException("INTERNAL_SERVER_ERROR", "Erro interno do servidor."));
    }
})

export default router;