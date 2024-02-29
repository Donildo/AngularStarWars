import { SwapiService } from 'src/app/services/swapi.service';
import { Component, OnInit } from '@angular/core';
import { Nave } from 'src/app/shared/models/interface';

@Component({
  selector: 'app-starships',
  templateUrl: './starships.component.html',
  styleUrls: ['./starships.component.scss']
})
export class StarshipsComponent implements OnInit{
  resultStarships: Nave[] = [];

  colunas: string[] = ['name', 'model', 'manufacturer', 'hyperdrive_rating'];
  showSpinner = false;


  constructor(private swapiService: SwapiService) {}
  ngOnInit(){
      this.getStarShips();
  }

  getStarShips() {
    this.showSpinner = true;
    this.swapiService.getStarships().subscribe((res) => {
      this.resultStarships = res.results;
      this.showSpinner = false;
    });
  }
}
