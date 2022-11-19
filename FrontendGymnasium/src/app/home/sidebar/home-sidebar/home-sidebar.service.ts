import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class SidebarService {

    info: any = [];

    constructor(private http: HttpClient) {
        
        http.get("../../../../assets/data/sidebar.json")
            .subscribe(resp => {
                this.info = resp;
            });

    }
}
