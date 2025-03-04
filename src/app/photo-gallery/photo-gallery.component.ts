import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, transition, style, animate } from '@angular/animations';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-photo-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './photo-gallery.component.html',
  styleUrls: ['./photo-gallery.component.css'],
  encapsulation: ViewEncapsulation.None ,
  animations: [
    trigger('slideAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(100%)' }),
        animate('300ms ease-out', style({ opacity: 1, transform: 'translateX(0)' }))
      ]),
      transition(':leave', [
        animate('300ms ease-in', style({ opacity: 0, transform: 'translateX(-100%)' }))
      ])
    ])
  ]
})
export class PhotoGalleryComponent {
  photos = [
    { src: 'images/Photo_001.jpg', title: 'Our first Selfie', quote: 'Let’s call it First of Millions' },
    { src: 'images/Photo_002.jpg', title: 'Kutty trip', quote: 'Remember our Kutty Trip and your kutty driving demo?' },
    { src: 'images/Photo_003.jpg', title: 'Kutty trip', quote: 'It all feels just like Yesterday' },
    { src: 'images/Photo_004.jpg', title: 'The Actual First Trip', quote: 'Every mile with you feels like a new chapter in our love story.' },
    { src: 'images/Photo_005.jpg', title: 'The Actual First Trip', quote: 'Dancing in the rain, loving in the storm' },
    { src: 'images/Photo_006.jpg', title: 'The Actual First Trip', quote: 'Your hand in mine, the best scene of all' },
    { src: 'images/Photo_007.jpg', title: 'The Actual First Trip', quote: 'The road feels shorter when you’re with me' },
    { src: 'images/Photo_008.jpg', title: 'The Actual First Trip', quote: 'Waves may crash, but my love for you never will' },
    { src: 'images/Photo_009.jpg', title: 'The Actual First Trip', quote: 'Even the moon envied our endless conversations' },
    { src: 'images/Photo_010.jpg', title: 'The Actual First Trip', quote: 'Every sunset feels warmer with you' },
    { src: 'images/Photo_011.jpg', title: 'The Actual First Trip', quote: 'Every beat of the song echoes my heart’s rhythm for you' },
    { src: 'images/Photo_012.jpg', title: 'The Actual First Trip', quote: 'Celebrating us, brighter than any fireworks' },
    { src: 'images/Photo_013.jpg', title: 'Random selfie', quote: 'Your smile — the best gift I’ve ever received' },
    { src: 'images/Photo_014.jpg', title: 'Chumma oorsuthing', quote: 'Doing nothing but loving you' },
    { src: 'images/Photo_015.jpg', title: 'Dhevadhai in Saree', quote: 'The way you can rock in both saree and a Tshirt ' },
    { src: 'images/Photo_016.jpg', title: 'Dhevadhai in Saree', quote: '' },
    { src: 'images/Photo_017.jpg', title: 'Beach Walk', quote: 'Another day, another reason to love you more' },
    { src: 'images/Photo_018.jpg', title: 'Beach Walk', quote: 'Love is in the little moments' },
    { src: 'images/Photo_019.jpg', title: 'Beach Walk', quote: 'Every step with you is a step into forever' },
    { src: 'images/Photo_020.jpg', title: 'Match and Match', quote: 'That Jodi Porutham ' },
    { src: 'images/Photo_021.jpg', title: 'Yen endraal un Pirandha Naal !', quote: 'Bday Surprises Gone wrong' },
    { src: 'images/Photo_022.jpg', title: 'Yen endraal un Pirandha Naal !', quote: 'A new dawn, a new way to love you' },
    { src: 'images/Photo_023.jpg', title: 'Random selfie', quote: 'Lost in books, found in love' },
    { src: 'images/Photo_024.jpg', title: 'Random selfie', quote: 'Buying things, collecting memories' },
    { src: 'images/Photo_025.jpg', title: 'Random selfie', quote: 'You’re the candle that lights up my world' },
    { src: 'images/Photo_026.jpg', title: 'Random selfie', quote: 'Feasting on food and our love' },
    { src: 'images/Photo_027.jpg', title: 'Random selfie', quote: 'Winning or losing, I still have you' },
    { src: 'images/Photo_028.jpg', title: 'Beach Again !', quote: 'Counting stars, but you outshine them all' },
    { src: 'images/Photo_029.jpg', title: 'Beach Again !', quote: 'Escaping the world, building our own' },
    { src: 'images/Photo_030.jpg', title: 'Random selfie', quote: 'Stirring pots, blending hearts' },
    { src: 'images/Photo_031.jpg', title: 'Random selfie', quote: 'Growing together like the trees we passed' },
    { src: 'images/Photo_032.jpg', title: 'Random selfie', quote: 'Our hearts, wilder than the animals we met' },
    { src: 'images/Photo_033.jpg', title: 'Hello Hyderabad !', quote: 'Start of a Long Distance Love Story' },
    { src: 'images/Photo_034.jpg', title: 'Hello Hyderabad !', quote: 'Unexpected moments, unforgettable kisses' },
    { src: 'images/Photo_035.jpg', title: 'Hello Hyderabad !', quote: 'New places, same heartbeat' },
    { src: 'images/Photo_036.jpg', title: 'Hello Hyderabad !', quote: 'Seasons change, my love remains' },
    { src: 'images/Photo_037.jpg', title: 'Hello Hyderabad !', quote: 'The city glows, but you shine brighter' },
    { src: 'images/Photo_038.jpg', title: 'Hello Hyderabad !', quote: 'Your arms — my favorite place' },
    { src: 'images/Photo_039.jpg', title: 'Hello Hyderabad !', quote: 'Our hidden place, where only love lives' },
    { src: 'images/Photo_040.jpg', title: 'Nam Samayal Arayil !', quote: 'Will be forever grateful for that Rasagulla and all the good food that you  make (Sometimes)' }
  ];

  currentIndex = 0;

  nextPhoto() {
    this.currentIndex = (this.currentIndex + 1) % this.photos.length;
  }

  prevPhoto() {
    this.currentIndex = (this.currentIndex - 1 + this.photos.length) % this.photos.length;
  }
}
