import { Request, Response } from 'express';
import { COURSES } from '../src/db-data';


export function getAllCourses(req: Request, res: Response): void {
    
    res.status(200).json( Object.values( COURSES.filter( (x: any) => { return x !== undefined; } ) ) );
    
}


export function getCourseById(req: Request, res: Response): void {

    const courses: any = Object.values(COURSES.filter((x: any) => x));

    res.status(200).json(courses.find( (course: { id: string; }) => course.id == req.params['id'] ));

}
