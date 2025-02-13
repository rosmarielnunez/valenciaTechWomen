import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-carousel',
  imports: [],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss'
})
export class CarouselComponent {
  @Input() images: string[] = []; // Recibe imágenes desde el padre
  @Input() autoPlay: boolean = true; // Habilitar autoplay
  @Input() interval: number = 3000; // Intervalo de autoplay (ms)

  currentIndex: number = 0;
  intervalId: any;

  ngOnInit() {
    if (this.autoPlay) {
      this.startAutoPlay();
    }
  }

  ngOnDestroy() {
    this.stopAutoPlay();
  }

  startAutoPlay() {
    this.intervalId = setInterval(() => {
      this.nextSlide();
    }, this.interval);
  }

  stopAutoPlay() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  goToSlide(index: number) {
    this.currentIndex = index;
    this.stopAutoPlay(); // Detiene autoplay al hacer clic
    this.startAutoPlay();
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  prevSlide() {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
  }

}
