import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class MenuService {

    info: any = [];

    constructor(private http: HttpClient) {
        
        http.get("../../../../assets/data/menu.json")
            .subscribe(resp => {
                this.info = resp;
            });

    }
}

