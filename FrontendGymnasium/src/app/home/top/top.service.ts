import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class TopService {

    info: any = [];

    constructor(private http: HttpClient) {

        http.get("../../../../assets/data/top.json")
            .subscribe(resp => {
                this.info = resp;
            });

    }
}
