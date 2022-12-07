import * as express from 'express';
import { Application } from "express";
import { getAllClases } from './server/get-clases.route';
import { saveClase } from './server/save-clase.route';
import { getAllCentros } from './server/get-centros.route';
import { saveCentro } from './server/save-centro.route';

const cors = require('cors');

const bodyParser = require('body-parser');

const app: Application = express();


app.use(cors({ origin: true }));
app.use(bodyParser.json());

app.route('/api/clases').get(getAllClases);

app.route('/api/clases/:id').put(saveClase);

app.route('/api/centros').get(getAllCentros);

app.route('/api/centros/:id').put(saveCentro);



const httpServer = app.listen(9000, () => {
    // console.log("HTTP REST API Server running at http://localhost:" + httpServer.address().port);
});



