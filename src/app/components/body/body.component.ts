import { Component } from '@angular/core';
import { CarouselComponent } from '../share/carousel/carousel.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-body',
  imports: [
    CarouselComponent,
    TranslateModule
  ],
  templateUrl: './body.component.html'
})
export class BodyComponent {

}
