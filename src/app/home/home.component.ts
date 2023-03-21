import { Component, OnInit } from '@angular/core';
import { Movie } from '../Movie';
import { MovieService } from '../movie.service';
import { RentalListService } from '../rental-list.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'fb-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  protected flops$: Observable<Movie[]> = new Observable();
  protected rentalList: Movie[] = [];
  protected sort: "title" | "stars" = "title";

  constructor(
    private movieService: MovieService,
    private rentalListService: RentalListService,
    private router: Router
  ) {}

  ngOnInit() {
    this.flops$ = this.movieService.getMovies();
    this.getRentalList();
  }

  private getRentalList(invalidateCache: boolean = false) {
    this.rentalListService.getRentalList(invalidateCache).subscribe((rentals:Movie[]) => { this.rentalList = rentals; });
  }

  protected rentMovie(movie: Movie) {
    if(this.rentalListService.alreadyRented(movie, this.rentalList)) {
      return;
    }

    this.rentalListService.rentMovie(movie).subscribe((resp:Movie) => {
      this.getRentalList(true);
    });
  }

  protected returnMovie(movie: Movie) {
    this.movieService.returnMovie(movie).subscribe((resp:Movie) => {});
  }

  protected deleteRental(rental: Movie) {
    this.rentalListService.deleteMovie(rental).subscribe((movie:Movie) => {
      this.getRentalList(true);
    });
  }

  protected checkout() {
    this.router.navigate(['/cart']);
  }

  protected showDetails(movie: Movie) {
    this.router.navigate(['/movie-details', movie.id]);
  }
}
