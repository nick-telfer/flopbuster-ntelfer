import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Movie } from '../Movie'

@Component({
  selector: 'fb-movie-tile',
  templateUrl: './movie-tile.component.html',
  styleUrls: ['./movie-tile.component.scss']
})
export class MovieTileComponent  {
  @Input() public movie: Movie = new Movie();
  @Output() public rent: EventEmitter<boolean> = new EventEmitter();
  @Output() public return: EventEmitter<boolean> = new EventEmitter();
  @Output() public showDetails: EventEmitter<boolean> = new EventEmitter();

  ngOnInit() {

    
  }

  onRentClicked($event: MouseEvent) {
    $event.stopPropagation();
    
    this.rent.emit(true);
  }

  onReturnClicked($event: MouseEvent) {
    $event.stopPropagation();

    this.return.emit(true);
  }

  showDetailsClicked() {
    this.showDetails.emit(true);
  }
}
