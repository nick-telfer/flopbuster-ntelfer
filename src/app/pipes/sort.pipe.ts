import { Pipe, PipeTransform } from '@angular/core';
import { Movie } from '../Movie';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: Movie[] | null, sortAttr: "title" | "stars" = "title", order: "asc" | "desc" = "asc"): Movie[] | null {
    if (!value) {
      return null;
    }

    return order === "asc" ? this.asc(value, sortAttr) : this.desc(value, sortAttr);
  }

  asc(value: Movie[], sortAttr: "title" | "stars" = "title"){
    return value.sort((a:Movie, b:Movie) => { 
      if (a[sortAttr] > b[sortAttr]) {
        return 1;
      } 

      return -1;
    });
  }

  desc(value: Movie[], sortAttr: "title" | "stars" = "title"){
    return value.sort((a:Movie, b:Movie) => { 
      if (a[sortAttr] < b[sortAttr]) {
        return 1;
      } 

      return -1;
    });
  }

}
