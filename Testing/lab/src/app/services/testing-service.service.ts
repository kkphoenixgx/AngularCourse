import { Injectable, OnInit, EventEmitter } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IResponse } from '../model/IResponse';

@Injectable({
  providedIn: 'root'
})
export class TestingServiceService{

  private _url :string = "http://localhost:3000/"

  constructor(
    public http :HttpClient
  ) {}

  getItensOfDB() :Observable< Array<IResponse> >{
    return this.http.get <Array <IResponse> >(`${this._url}serverResponse`).pipe(
      response => { console.log(response); return response },
      error    => error
    )
  }

  addToDB(data :string, id :number) :Observable<IResponse>{
		return this.http.post<IResponse>(`${this._url}serverResponse`,{ name: data, id: id })
    .pipe(
			response => response,
			error => error
		)
  }

  // ----------- getters and setters -----------
  get url(){ return this._url }

}
