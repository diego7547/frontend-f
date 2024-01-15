import {  Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { LoginService } from 'src/app/core/services/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{


  constructor(private fb:FormBuilder,private service:LoginService,private router:Router,private cookie:CookieService){}
  valido:boolean = true;
  ngOnInit(): void {
    this.user = this.initForm();
  }


  user!:FormGroup;


  initForm(){
   return this.fb.group({
      username:['',[Validators.required]],
      password:['',[Validators.required]]
    });
  }

   enviar (){
    const username = this.user.get('username')?.value;
    const password = this.user.get('password')?.value;

    this.service.login(username,password).subscribe({
      next:({token,status})=>{
        
        if(status){
          this.cookie.set('token',token);
          this.router.navigate(['/pages/dashboard']);
        }else{
          this.limpiar();
        }


      },
      error:(err)=> console.log(err)
      }
      );
      
      
    } 
    
    limpiar(){
    this.user.reset();
    this.valido = false;
  }
}
