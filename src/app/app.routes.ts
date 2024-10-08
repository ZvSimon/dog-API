import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DogSearchComponent } from './components/dog-search/dog-search.component';
import { AvailableDogsComponent } from './components/available-dogs/available-dogs.component';

export const routes: Routes = [
  {
    path: '',
    component:AvailableDogsComponent ,
  },

];
