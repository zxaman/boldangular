import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-carousel',
  standalone: true,
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  imports: [CommonModule, MatIcon]
})
export class CarouselComponent implements OnInit {
  images = [
    'assets/falling-money.webp',
    'assets/images.jpeg',
    'assets/diamond.webp',
    'assets/offer.png',
    'assets/gold.jpg'
  ];
  currentIndex: number = 0; // Add this line

  constructor() {}

  ngOnInit(): void {
    this.startAutoSlide();
  }

  prevSlide(): void {
    this.currentIndex = (this.currentIndex > 0) ? this.currentIndex - 1 : this.images.length - 1;
  }

  nextSlide(): void {
    this.currentIndex = (this.currentIndex < this.images.length - 1) ? this.currentIndex + 1 : 0;
  }

  startAutoSlide(): void {
    setInterval(() => {
      this.nextSlide();
    }, 2000);
  }
}
