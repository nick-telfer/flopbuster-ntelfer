import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie } from './Movie';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  constructor(private http: HttpClient) {}

  public getMovies() {
    return this.http.get<Movie[]>('http://localhost:3000/movies')
      .pipe(
        map(
          (movies:Movie[]) => {
            movies.map( (movie) => {
              let starIcons = [];
              for(let i = 0; i < Math.floor(movie.stars); i++) {
                starIcons.push('star_rate');
              }

              if (movie.stars % 1 > 0) {
                starIcons.push('star_half');
              }

              movie.starIcons = starIcons;
              movie.flopId = movie.id;
            });
            
            return movies;
          }
        )
      );
  }

  public returnMovie(movie: Movie): Observable<Movie> {
    movie.checkedOut = false;
    return this.save(movie);
  }

  public save(movie: Movie): Observable<Movie>{
    return this.http.put<Movie>(`http://localhost:3000/movies/${movie.id}`, movie);
  }
}
