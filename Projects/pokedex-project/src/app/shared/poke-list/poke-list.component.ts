import { Component, OnInit } from '@angular/core';
import { PokeApiService } from 'src/app/service/poke-api.service';

@Component({
  selector: 'poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss']
})
export class PokeListComponent implements OnInit {
  
  public getAllPokes :any
  
  constructor(
    private pokeApiService :PokeApiService
  ){}

  ngOnInit(): void {
    this.pokeApiService.listPokes.subscribe(
      res => {
        this.getAllPokes = res.results;
        console.log(this.getAllPokes);
      }
    );
    
  }

}