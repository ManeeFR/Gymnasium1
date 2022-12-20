import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Centro } from '../centro-model/centro.interface';

@Injectable({
    providedIn: 'root',
})

export class CentrosService {

    constructor(private http: HttpClient) { }


    loadCentros(): Observable<Centro[]> {
        
        const params = new HttpParams().set("page", "1").set("pageSize", "10");

        return this.http.get<Centro[]>("http://localhost:8000/api/centros", { params } );

    }

    // saveCentro(centro: Centro): Observable<Object> {

    //     const headers = new HttpHeaders().set("X-Auth", "centroId");

    //     return this.http.put(`http://localhost:8000/api/centros/${centro.id}`, centro, { headers } );
        
    // }

}
