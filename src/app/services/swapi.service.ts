import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Filme,Nave, RespostaAPI } from "../shared/models/interface";
import { Observable } from "rxjs";


@Injectable ({
  providedIn:'root',
})
export class SwapiService {
  private api_url ='https://swapi.dev/api';

  constructor(private http: HttpClient){}

    getFilms(filterTitle?: string): Observable<RespostaAPI<Filme>>{
      let url = `${this.api_url}/films`;
      if(filterTitle){
        url += `?search=${filterTitle}`
      }
      return this.http
       .get<RespostaAPI<Filme>>(url);
  }

  getStarships(pages:number){
    const url = `${this.api_url}/starships/?page=${pages}`;
    return this.http.get<RespostaAPI<Nave>>(url);
  }
}
