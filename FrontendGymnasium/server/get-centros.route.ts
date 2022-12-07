import { Request, Response } from 'express';
import { CENTROS } from '../src/db-data';


export function getAllCentros(req: Request, res: Response): void {
    
    res.status(200).json( Object.values( CENTROS.filter( (x: any) => { return x !== undefined; } ) ) );
    
}


export function getCentroById(req: Request, res: Response): void {

    const centros: any = Object.values(CENTROS.filter((x: any) => x));

    res.status(200).json(centros.find( (centro: { id: string; }) => centro.id == req.params['id'] ));

}
