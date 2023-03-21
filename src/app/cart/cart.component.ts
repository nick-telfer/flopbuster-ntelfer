import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';
import { Movie } from '../Movie';
import { RentalListService } from '../rental-list.service';

@Component({
  selector: 'fb-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  protected rentalList: Movie[] = [];
  protected discount: number = 0;
  protected tax: number = 0;
  protected subtotal: number = 0;
  protected total: number = 0;

  public constructor(
    private rentalListService: RentalListService,
    private cartService: CartService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getRentalList();
  }

  private getRentalList(invalidateCache: boolean = false) {
    this.rentalListService.getRentalList(invalidateCache)
      .subscribe(
        (rentals:Movie[]) => { 
          this.rentalList = rentals; 
          this.calculateTotals(); 
        });
  }

  private calculateTotals() {
    this.subtotal = this.rentalList.reduce((sum, movie) => sum += movie.cost, 0);
    this.tax = (this.subtotal - this.discount) * 0.085;
    this.total = this.subtotal - this.discount + this.tax;
  }

  public checkout() {
      let checkout$ = this.cartService.checkout(this.rentalList);
      let clearCart$ = this.cartService.clearCart(this.rentalList);

      checkout$.subscribe((resp:Movie[]) => {
        clearCart$.subscribe((resp:Movie[]) => {
          this.getRentalList(true);
          this.router.navigate(['/home']);
        });
      });
  }

  protected deleteRental(rental: Movie) {
    this.rentalListService.deleteMovie(rental).subscribe((movie:Movie) => {
      this.getRentalList(true);
    });
  }
}
