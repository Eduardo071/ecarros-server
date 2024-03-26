import express from 'express'
import bodyParser from 'body-parser';
import cors from 'cors';
import usuariosController from './controllers/usuariosController';
import carrosController from './controllers/carrosController';


const port = 8081;
const app = express();


app.use(bodyParser.json());

app.use(cors());

app.use('/usuarios', usuariosController);

app.use('/carros', carrosController);

app.listen(port, () => console.log(`Servidor em execução na porta ${port}`));