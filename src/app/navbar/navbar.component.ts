import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'fb-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
    public constructor(private router: Router) {
    }

    protected navigateToHome(): void {
        this.router.navigate(['/home']);
    }

    protected navigateToCart(): void {
        this.router.navigate(['/cart']);
    }

    protected navigateToMovieDetails(): void {
        this.router.navigate(['/movie-details']);
    }
}
