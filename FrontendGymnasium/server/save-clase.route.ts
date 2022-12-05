import { Request, Response } from 'express';
import { findClaseById } from '../src/db-data';


export function saveClase(req: Request, res: Response) {

    const clase = findClaseById(parseInt(req.params["id"]));

    clase.description = req.body.description;

    res.status(200).json(clase);

}
