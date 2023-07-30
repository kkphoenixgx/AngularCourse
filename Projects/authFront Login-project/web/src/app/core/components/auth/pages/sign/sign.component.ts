import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';


@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.scss']
})
export class SignComponent {

  public errorMessage!:string;

  public formAuth :FormGroup = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]]
  })

  constructor(
    private formBuilder :FormBuilder,
    private authService :AuthService
  ){}

  public subimitForm(){
    if(this.formAuth.invalid) return 

    this.authService.sigIn({
      email: this.formAuth.value.email,
      password: this.formAuth.value.password
    })
    .subscribe({
      next: (res) => res,
      error: (e) => this.errorMessage = e.error.message
    })
  }

}
