import * as express from 'express';
import { Application } from "express";
import { getAllClases } from './server/get-clases.route';
import { saveClase } from './server/save-clase.route';

const cors = require('cors');

const bodyParser = require('body-parser');

const app: Application = express();


app.use(cors({ origin: true }));
app.use(bodyParser.json());

app.route('/api/courses').get(getAllClases);

app.route('/api/courses/:id').put(saveClase);



const httpServer = app.listen(9000, () => {
    // console.log("HTTP REST API Server running at http://localhost:" + httpServer.address().port);
});



