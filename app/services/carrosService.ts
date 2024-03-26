import { carrosRepository } from "../respositories/carrosRepository";
import { BusinessException } from "../utils/BusinessException";

export const findAll = async () => {
    const carrosrepository = new carrosRepository();
    const result = await carrosrepository.findAll();

    if (result.length <= 0) {
        return BusinessException("NOT_FOUND","Os carros não foram encontrados.");
    }
    return result;
};