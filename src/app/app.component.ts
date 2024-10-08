import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AvailableDogsComponent } from './components/available-dogs/available-dogs.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AvailableDogsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'DogAPI';
}
