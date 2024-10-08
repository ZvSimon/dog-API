import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { DogService } from '../../services/dog.service';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-dog-search',
  standalone: true,
  imports: [
    ReactiveFormsModule,
  ],
  templateUrl: './dog-search.component.html',
  styleUrl: './dog-search.component.css'
})
export class DogSearchComponent implements OnInit{
  dogs = signal<string[] | undefined>( undefined) ;
  isFetching = signal<boolean>(true);
  error = signal<string>('');
  private dogService = inject(DogService);
  private destroyRef : DestroyRef = inject(DestroyRef);
  ngOnInit() {
    const subscription = this.dogService.loadAvailableDogsCategoryName().subscribe(
      {
        next : (dogs ) => {
          this.dogs.set(dogs);
          console.log(dogs);
        },
        complete : () => {
          this.isFetching.set(false);

        },
        error : (error) => {
          this.error.set(error.message);
        }
      });
    this.destroyRef.onDestroy(() => {
      subscription.unsubscribe();
    });
  }
  onSelectSearch(){
    this.dogService.loadAvailableDogs().subscribe({
      next : (dogs)=>{
        this.dogs.set(dogs)
        console.log(dogs)
      },
    })
  }
}
