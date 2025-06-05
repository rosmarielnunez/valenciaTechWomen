import { Component } from '@angular/core';

@Component({
  selector: 'app-modal-home',
  imports: [],
  templateUrl: './modal-home.component.html',
  styleUrl: './modal-home.component.scss'
})
export class ModalHomeComponent {
  isVisible = true;

  constructor() { }

  closeModal() {
    this.isVisible = false;
  }
}
