import { inject, Injectable } from '@angular/core';
import { ErrorService } from '../shared/error.service';
import { HttpClient } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';
import { map } from 'rxjs/operators';
import { DogInterface } from '../types/dog';

@Injectable({
  providedIn: 'root'
})
export class DogService {
  private errorService = inject(ErrorService);
  private httpClient = inject(HttpClient);

  loadAvailableDogs(limit:number=100) {
    return this.fetchAvailableDogs('https://dog.ceo/api/breed/hound/images', 'Something went wrong!',limit);
  }
  loadAvailableDogsCategory(limit:number=100) {
    return this.fetchAvailableDogs('https://dog.ceo/api/breed/hound/images/random/5', 'Something went wrong!',limit);
  }

  loadAvailableDogsCategoryName(limit:number=100) {
    return this.fetchAvailableDogs('https://dog.ceo/api/breeds/list/all', 'Something went wrong!',limit);
  }

  fetchAvailableDogs(url: string, message: string,limit: number) {
    return this.httpClient.get<DogInterface>(url)
      .pipe(
        map(responseData => responseData.message.slice(0, limit)),
        catchError((error) => {
          this.errorService.showError(error);
          return throwError(() => new Error(message));
        })
      );
  }



}
