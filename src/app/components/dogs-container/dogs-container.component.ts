import { Component, input } from '@angular/core';

@Component({
  selector: 'app-components-container',
  standalone: true,
  imports: [],
  templateUrl: './dogs-container.component.html',
  styleUrl: './dogs-container.component.css'
})
export class DogsContainerComponent {
  title =input.required<string>();

}
