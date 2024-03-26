import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class carrosRepository {
    public async findAll() {
        const carros = await prisma.carros.findMany({
            orderBy: {
                ds_modelo: 'asc'
            },
        })

        return carros;
    }
}

export { carrosRepository };