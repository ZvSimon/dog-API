import { Component, computed, input, signal } from '@angular/core';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NgForOf,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  dogs = input<string[]>([]);
  selectedDog = signal<string | null>(null);
  limitedDogs = computed(() => {
    return this.dogs()
      .map(image => ({ image, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .slice(0,24)
      .map(({ image }) => image);
  });
  onSelectDog(dogs:string) {
    this.selectedDog.set(dogs);
  }
  clearSelectedDog() {
    this.selectedDog.set(null);
  }
}
