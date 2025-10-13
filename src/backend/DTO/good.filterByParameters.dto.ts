import { IsNumber } from 'class-validator';

export class FilterByParameters {
  @IsNumber()
  startPrice?: number;

  @IsNumber()
  endPrice?: number;

  color?:
    | 'green'
    | 'red'
    | 'yellow'
    | 'orange'
    | 'blue'
    | 'dark-blue'
    | 'purple'
    | 'pink'
    | 'white'
    | 'black';

  category?: 'T-shirts' | 'Shorts' | 'Shirts' | 'Hoodie' | 'Jeans';

  size?:
    | 'XX-Small'
    | 'X-Small'
    | 'Small'
    | 'Medium'
    | 'Large'
    | 'X-Large'
    | 'XX-Large'
    | '3X-Large'
    | '4X-Large';

  dressStyle?: 'Casual' | 'Formal' | 'Party' | 'Gym';

  sex? : "Men" | "Women"
}
