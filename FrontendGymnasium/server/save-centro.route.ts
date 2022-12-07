import { Request, Response } from 'express';
import { findCentroById } from '../src/db-data';


export function saveCentro(req: Request, res: Response) {

    const centro = findCentroById(parseInt(req.params["id"]));

    centro.description = req.body.description;

    res.status(200).json(centro);

}
