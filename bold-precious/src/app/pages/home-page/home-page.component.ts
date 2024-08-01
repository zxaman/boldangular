import { Component } from '@angular/core';
import { HeaderComponent } from "../../header/header.component";
import { CommonModule } from '@angular/common';
import { CarouselComponent } from '../../carousel/carousel.component';
import { RouterOutlet } from '@angular/router';
import { SilverPageComponent } from "../silver-page/silver-page.component";


@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [HeaderComponent, CommonModule, CarouselComponent, RouterOutlet, SilverPageComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

}
