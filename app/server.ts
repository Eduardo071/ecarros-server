import express from 'express'
import bodyParser from 'body-parser';
import cors from 'cors';
import usuariosController from './controllers/usuariosController';
import carrosController from './controllers/carrosController';
import swaggerUi from 'swagger-ui-express';
import swaggerDocs from './swagger.json';


const port = 8081;
const app = express();


app.use(bodyParser.json());

app.use(cors());

app.use('/usuarios', usuariosController);

app.use('/carros', carrosController);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.listen(port, () => console.log(`Servidor em execução na porta ${port}`));