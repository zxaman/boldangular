import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { CountdownTimerComponent } from '../countdown-timer/countdown-timer.component';
import { CarouselComponent } from "../carousel/carousel.component";
import { RouterLink } from '@angular/router';
import { LoginComponent } from '../pages/login/login.component';
import { Router } from '@angular/router';
import { routes } from '../app.routes';



@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatMenuModule,
    MatSidenavModule,
    MatListModule,
    CountdownTimerComponent,
    CarouselComponent,
    RouterLink,
    LoginComponent,
    
],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  menuItems: string[] = [
    'Silver', 'Gold', 'Platinum', 'Copper', 'Jewelry', 'Best Seller',
    'Collectors', 'Investor\'s Guide', 'IRA', 'More', 'Deals', 'Sell To Us'
  ];
  constructor(private route: Router){}
  onbutton(){
    this.route.navigate(['/login']);
  }
}
