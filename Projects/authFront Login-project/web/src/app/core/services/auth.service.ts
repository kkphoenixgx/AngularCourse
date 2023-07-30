import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable, catchError, map, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private URL :string = 'http://localhost:3000'
  public readonly errorMessage :string = "No momento, não estamos conseguindo validar sua conta, tente novamente mais tarde"

  constructor(
    private httpClient :HttpClient,
    private router :Router
  ) { }

  public sigIn(payload :{ email:string, password :string }) :Observable<any> {
    
    return this.httpClient.post<{ token :string }>(`${this.URL}/sign`, payload).pipe(

      map((res) =>{
        localStorage.removeItem('access_token')
        localStorage.setItem('access_token', res.token)

        return this.router.navigate(['admin'])        
      }),
      catchError( (err)=>{
        if(err) return throwError( () => err);
        return throwError( () => this.errorMessage)
      })

    )
    
  }

  public signOut(){
    localStorage.removeItem('access_token')
    return this.router.navigate([''])        
  }

  public isAuthenticated() :boolean{
    const token = localStorage.getItem("access_token")
    if(!token) return false
    
    const jwtHelper = new JwtHelperService()

    return !jwtHelper.isTokenExpired(token)
  }

}
