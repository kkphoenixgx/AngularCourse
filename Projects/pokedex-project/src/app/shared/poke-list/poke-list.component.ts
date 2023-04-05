import { Component, OnInit } from '@angular/core';
import { PokeApiService } from 'src/app/service/poke-api.service';

@Component({
  selector: 'poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss']
})
export class PokeListComponent implements OnInit {

  public allPokes: any
  public getAllPokes: any

  public apiError :boolean = false

  constructor(
    private pokeApiService: PokeApiService
  ) { }

  ngOnInit(): void {
    this.pokeApiService.listPokes.subscribe(
      res => {
        this.allPokes = res.results;
        this.getAllPokes = this.allPokes;
      },
      error => {
        this.apiError = true
      }
    );

  }

  public getSearch(poke: string) {
    const filter = this.allPokes.filter( (res: any) => {
      return !res.name.indexOf(poke.toLowerCase());
    })
    this.getAllPokes = filter;
  }

}
