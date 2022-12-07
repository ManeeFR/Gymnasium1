import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Clase } from '../model/clase.interface';

@Injectable({
    providedIn: 'root',
    // useClass: '',
    // useFactory: '', 
    // deps: ''
})

export class ClasesService {

    constructor(private http: HttpClient) { }


    loadClases(): Observable<Clase[]> {
        
        const params = new HttpParams().set("page", "1").set("pageSize", "10");

        return this.http.get<Clase[]>('http://localhost:8000/api/clases', { params } );

        // this.http.get('/api/courses', { params } ).subscribe(res => 
        //     this.listCourses = JSON.parse(JSON.stringify(res))
        // );

    }

    saveClase(clase: Clase): Observable<Object> {

        const headers = new HttpHeaders().set("X-Auth", "claseId");

        return this.http.put(`/api/clases/${clase.id}`, clase, { headers } );
        
    }

}
