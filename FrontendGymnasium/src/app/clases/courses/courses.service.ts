import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Clase } from '../model/clase.interface';


let counter = 0;


@Injectable({
    providedIn: 'root',
    // useClass: '',
    // useFactory: '', 
    // deps: ''
})



export class CoursesService {

    constructor(private http: HttpClient) {

    }


    loadCourses(): Observable<Clase[]> {
        
        const params = new HttpParams().set("page", "1").set("pageSize", "10");

        return this.http.get<Clase[]>('/api/courses', { params } );

        // this.http.get('/api/courses', { params } ).subscribe(res => 
        //     this.listCourses = JSON.parse(JSON.stringify(res))
        // );

    }

    saveCourse(course: Clase): Observable<Object> {

        const headers = new HttpHeaders().set("X-Auth", "userId");

        return this.http.put(`/api/courses/${course.id}`, course, { headers } );
        
    }

}
