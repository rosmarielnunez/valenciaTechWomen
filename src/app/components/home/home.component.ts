import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { BodyComponent } from '../body/body.component';

@Component({
  selector: 'app-home',
  imports: [
    HeaderComponent,
    BodyComponent,
    FooterComponent
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {

}
