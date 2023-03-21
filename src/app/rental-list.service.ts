import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from './Movie';

@Injectable({
  providedIn: 'root'
})
export class RentalListService {
  private rentalList: Observable<Movie[]> | null = null;

  constructor(private http: HttpClient) { }

  public getRentalList(invalidateCache: boolean = false): Observable<Movie[]> {
    if(invalidateCache) {
      this.rentalList = null;
    }

    if(this.rentalList) return this.rentalList;

    this.rentalList = this.http.get<Movie[]>('http://localhost:3000/rentalList');

    return this.rentalList;
  }

  public rentMovie(movie: Movie) {
    return this.http.post<Movie>('http://localhost:3000/rentalList', movie);
  }

  public deleteMovie(movie: Movie) {
    return this.http.delete<Movie>(`http://localhost:3000/rentalList/${movie.id}`);
  }

  public clearRentalList() {
    return this.http.delete<Movie[]>('http://localhost:3000/rentalList');
  }

  public alreadyRented(movie: Movie, rentalList: Movie[]) {
    return rentalList.some((rental) => rental.flopId === movie.id);
  }
}
