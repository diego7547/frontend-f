import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input()
  sidenav!:MatSidenav;
  cerrarSesion(){
    // Redirige al usuario a la página de inicio de sesión
    this.cookie.delete('token');
    this.cookie.deleteAll();
     this.router.navigate(['/auth/login']);
    
  }

  constructor(private cookie:CookieService,private router:Router){
    
  }
}
