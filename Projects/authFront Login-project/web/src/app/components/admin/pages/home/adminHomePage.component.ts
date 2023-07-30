import { Component } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './adminHomePage.component.html',
  styleUrls: ['./adminHomePage.component.scss']
})

export class AdminHomePage {

  constructor(
    public authService :AuthService
  ){}

  public logOut(){
    this.authService.signOut();
  }

}
