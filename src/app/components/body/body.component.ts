import { Component } from '@angular/core';
import { CarouselComponent } from '../share/carousel/carousel.component';

@Component({
  selector: 'app-body',
  imports: [
    CarouselComponent
  ],
  templateUrl: './body.component.html',
  styleUrl: './body.component.scss'
})
export class BodyComponent {

}
