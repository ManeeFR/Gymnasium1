import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ClasesService {

  info: any = [];

  constructor(private http: HttpClient) { 
    http.get("../../../../assets/data/clases.json")
    .subscribe(resp =>  {
      this.info = resp;
    });
    
  }

  
}
