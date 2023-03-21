export class Movie {
    id: number | undefined = undefined;
    flopId: number | undefined = undefined;
    title: string = "";
    year: number = 1969;
    stars: number = 0;
    starIcons: string[] = [];
    rating: "G" | "PG" | "PG-13" | "R" | "Unrated" | "TV-Y" | "TV-Y7" | "TV-Y7 FV" | "TV-G" | "TV-PG" | "TV-14" | "TV-MA" = "G";
    onSale: boolean = false;
    imageUrl: string = "";
    rented: boolean = false;
    cost: number = 0;
    checkedOut: boolean = false;
  }