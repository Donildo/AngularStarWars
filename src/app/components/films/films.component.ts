import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SwapiService } from 'src/app/services/swapi.service';
import { Filme } from 'src/app/shared/models/interface';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.scss']
})
export class FilmsComponent implements OnInit {
  constructor(
    private swapiService: SwapiService
  ) {}

  resultsFilms: Filme[] = [];
  colunas: string[] = ['title', 'director', 'producer', 'release_date'];
  filterTitle = '';
  showSpinner = false;


  getFilms(filterTitle?: string){
    this.showSpinner = true
    this.swapiService.getFilms(filterTitle).subscribe(
     res => {
      this.resultsFilms = res.results;
      this.showSpinner = false;
     }
    )
  }

  ngOnInit(): void {
    this.getFilms()
  }
  filtrarPorTitulo(){
    this.getFilms(this.filterTitle);
  }
  formtarData(data: string) {
    const dataObj = new Date(data);
    return dataObj.toLocaleDateString('pt-BR');
  }
}
