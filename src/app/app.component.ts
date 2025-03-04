import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PhotoGalleryComponent } from "./photo-gallery/photo-gallery.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PhotoGalleryComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'anniversary-gallery';
}
