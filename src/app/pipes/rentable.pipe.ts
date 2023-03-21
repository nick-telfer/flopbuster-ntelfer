import { Pipe, PipeTransform } from '@angular/core';
import { Movie } from '../Movie';
import { RentalListService } from '../rental-list.service';

@Pipe({
  name: 'rentable'
})
export class RentablePipe implements PipeTransform {

  public constructor(private rentalListService: RentalListService) {}

  transform(movie: Movie, rentalList: Movie[]): boolean {
    return !this.rentalListService.alreadyRented(movie, rentalList);
  }
}
