import { Request, Response } from 'express';
import { findCourseById } from '../src/db-data';
// import { Clase } from '../src/app/clases/model/clase.interface';


export function saveCourse(req: Request, res: Response) {

    const course = findCourseById(parseInt(req.params["id"]));

    course.description = req.body.description;

    res.status(200).json(course);

}
