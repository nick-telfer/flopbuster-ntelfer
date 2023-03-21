import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RentalListComponent } from './rental-list/rental-list.component';
import { MovieTileComponent } from './movie-tile/movie-tile.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { CartComponent } from './cart/cart.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { PageComponent } from './page/page.component';
import { MaterialModule } from './shared/modules/material/material.module';
import { SortPipe } from './pipes/sort.pipe';
import { RentablePipe } from './pipes/rentable.pipe';
import { StarsComponent } from './stars/stars.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RentalListComponent,
    MovieTileComponent,
    NavbarComponent,
    CartComponent,
    MovieDetailsComponent,
    PageComponent,
    SortPipe,
    RentablePipe,
    StarsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
