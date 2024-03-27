import { carrosRepository } from "../respositories/carrosRepository";
import { BusinessException } from "../utils/BusinessException";

export const findAll = async () => {
    const carrosrepository = new carrosRepository();
    const result = await carrosrepository.findAll();

    return result;
};