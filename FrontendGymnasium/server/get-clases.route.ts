import { Request, Response } from 'express';
import { CLASES } from '../src/db-data';


export function getAllClases(req: Request, res: Response): void {
    
    res.status(200).json( Object.values( CLASES.filter( (x: any) => { return x !== undefined; } ) ) );
    
}


export function getClaseById(req: Request, res: Response): void {

    const clases: any = Object.values(CLASES.filter((x: any) => x));

    res.status(200).json(clases.find( (clase: { id: string; }) => clase.id == req.params['id'] ));

}
