import { Component, Input } from '@angular/core';
import { Movie } from '../Movie';

@Component({
  selector: 'fb-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.scss']
})
export class StarsComponent {
  @Input() public movie: Movie = new Movie();

}
