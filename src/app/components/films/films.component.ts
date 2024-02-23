import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.scss']
})
export class FilmsComponent implements OnInit {
  constructor(
    private http: HttpClient
  ) {}

  urlJSONFilms ='assets/films.json';
  resultFilms: any;
  colunas: string[] = ['title', 'director', 'producer', 'release_date']

  getFilmes(){
    this.http.get<any>(this.urlJSONFilms).subscribe((res)=>{
      this.resultFilms = res.results;
      console.log(this.resultFilms)
    });
  }

  ngOnInit(): void {
    this.getFilmes()
  }
  formtarData(data: string) {
    const dataObj = new Date(data);
    return dataObj.toLocaleDateString('pt-BR');
  }
}