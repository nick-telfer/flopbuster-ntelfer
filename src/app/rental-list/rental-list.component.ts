import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from '../Movie';
import { RentalListService } from '../rental-list.service';

@Component({
  selector: 'fb-rental-list',
  templateUrl: './rental-list.component.html',
  styleUrls: ['./rental-list.component.scss']
})
export class RentalListComponent implements OnInit {
  @Input() public rentalList: Movie[] | null = [];
  @Input() public showDetailedList: boolean = false;
  @Output() public checkout: EventEmitter<boolean> = new EventEmitter();
  @Output() public deleteRental: EventEmitter<Movie> = new EventEmitter();
  @Output() public rentalDetails: EventEmitter<Movie> = new EventEmitter();

  public constructor(private router: Router) {}

  ngOnInit(): void {
    if (!this.rentalList) {
      this.rentalList = [];
    }
  }

  protected handleCheckout() {
    this.checkout.emit(true);
  }

  protected showDetails(movie: Movie) {
    this.router.navigate(['/movie-details', movie.id]);
  }

  protected handleDelete(rental: Movie) {
    this.deleteRental.emit(rental);
  }
}
