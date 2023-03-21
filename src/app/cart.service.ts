import { Injectable } from '@angular/core';
import { forkJoin, merge, mergeAll, Observable } from 'rxjs';
import { Movie } from './Movie';
import { MovieService } from './movie.service';
import { RentalListService } from './rental-list.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(
    private rentalListService: RentalListService,
    private movieService: MovieService
  ) { }

  public checkout(rentalList: Movie[]) {
    let checkoutObservables: Observable<Movie>[] = [];

    rentalList.forEach((rental) => {
      let movie = {...rental};
      movie.checkedOut = true;
      movie.id = rental.flopId;
      checkoutObservables.push(this.movieService.save(movie));
    });

    return forkJoin(checkoutObservables);
  }

  public clearCart(rentalList: Movie[]) {
    let deleteObservables: Observable<Movie>[] = [];

    rentalList.forEach((movie) => {
      deleteObservables.push(this.rentalListService.deleteMovie(movie));
    });

    return forkJoin(deleteObservables);
  }
}
