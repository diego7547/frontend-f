import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/core/services/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{


  constructor(private fb:FormBuilder,private service:LoginService,private router:Router){}
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
          localStorage.setItem('token_personal',token);
          this.router.navigate(['/pages/personal']);
        }else{
          this.limpiar();
        }


      }
      }
      );
      
      
    } 
    
    limpiar(){
    this.user.reset();
    this.valido = false;
  }
}
