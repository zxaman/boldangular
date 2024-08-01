import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Card {
  imgSrc: string;
  text: string;
}

@Component({
  selector: 'app-silver-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './silver-page.component.html',
  styleUrls: ['./silver-page.component.scss']
})
export class SilverPageComponent implements OnInit {
  cards: Card[] = [
    { imgSrc: '../../assets/silver1.png', text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.' },
    { imgSrc: '../../assets/silver2.png', text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.' },
    { imgSrc: '../../assets/silver3.png', text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.' },
    { imgSrc: '../../assets/silver4.png', text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.' },
    { imgSrc: '../../assets/silver5.jpeg', text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.' },
    { imgSrc: '../../assets/silver1.png', text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.' },
    { imgSrc: '../../assets/silver2.png', text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.' },
    { imgSrc: '../../assets/silver3.png', text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.' },
    { imgSrc: '../../assets/silver3.png', text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.' },
    { imgSrc: '../../assets/silver4.png', text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.' },
    { imgSrc: '../../assets/silver5.jpeg', text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.' },
    { imgSrc: '../../assets/silver1.png', text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.' },
    { imgSrc: '../../assets/silver2.png', text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.' },
    { imgSrc: '../../assets/silver5.jpeg', text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.' },
    { imgSrc: '../../assets/silver1.png', text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.' },
    { imgSrc: '../../assets/silver2.png', text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.' },
    // Add more cards as needed
  ];
  displayedCards: Card[] = [];
  itemsPerSlide = 6;
  currentIndex = 0;

  ngOnInit() {
    this.updateDisplayedCards();
  }

  updateDisplayedCards() {
    this.displayedCards = this.cards.slice(this.currentIndex, this.currentIndex + this.itemsPerSlide);
  }

  prevSlide(event: Event) {
    event.preventDefault();
    if (this.currentIndex > 0) {
      this.currentIndex -= this.itemsPerSlide;
      this.updateDisplayedCards();
    }
  }

  nextSlide(event: Event) {
    event.preventDefault();
    if (this.currentIndex + this.itemsPerSlide < this.cards.length) {
      this.currentIndex += this.itemsPerSlide;
      this.updateDisplayedCards();
    }
  }
}
