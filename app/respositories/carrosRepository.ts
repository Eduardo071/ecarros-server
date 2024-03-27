import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class carrosRepository {
    public async findAll() {
        const carros = await prisma.carros.findMany({
            orderBy: {
                ds_modelo: 'asc'
            },
            include: {
                categorias: true
            }
        })

        return carros;
    }
}

export { carrosRepository };