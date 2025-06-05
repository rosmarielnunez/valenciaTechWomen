import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ModalHomeComponent } from './components/share/modal-home/modal-home.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,
            ModalHomeComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'valenciaTechWomen';
  isModalVisible = true;
  ngOnInit() {
    const alreadyVisited = localStorage.getItem('alreadyVisited');
    if (alreadyVisited) {
      this.isModalVisible = false;
    }else {
      localStorage.setItem('alreadyVisited', 'true');
      this.isModalVisible = true;
    }
  }
}
