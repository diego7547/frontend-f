import { Component } from '@angular/core';
import { dataLogin } from 'src/app/core/utils/dataNavbar';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  collapse = false;
  navData = dataLogin;
}
