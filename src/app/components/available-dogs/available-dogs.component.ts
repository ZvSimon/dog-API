import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { DogService } from '../../services/dog.service';
import { HomeComponent } from '../../pages/home/home.component';
import { DogsContainerComponent } from '../dogs-container/dogs-container.component';
import { DogSearchComponent } from '../dog-search/dog-search.component';


@Component({
  selector: 'app-available-components',
  standalone: true,
  imports: [HomeComponent, DogsContainerComponent, DogSearchComponent],
  templateUrl: './available-dogs.component.html',
  styleUrl: './available-dogs.component.css'
})
export class AvailableDogsComponent implements OnInit{
  dogs = signal<string[] | undefined>( undefined) ;
  isFetching = signal<boolean>(true);
  error = signal<string>('');
  private dogService = inject(DogService);
  private destroyRef : DestroyRef = inject(DestroyRef);
  ngOnInit() {
    this.dogService.loadAvailableDogs().subscribe(
      {
      next : (dogs ) => {
        this.dogs.set(dogs);
      },
      complete : () => {
        this.isFetching.set(false);
      },
      error : (error) => {
        this.error.set(error.message);
      }
    });

  }

}
