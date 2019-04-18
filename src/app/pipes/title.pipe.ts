import { Pipe, PipeTransform } from '@angular/core';
import { MovieService } from '../services/movie.service';

@Pipe({
  name: 'title'
})
export class TitlePipe implements PipeTransform {

  constructor(private movieService: MovieService) {
  }

  transform(title: string): string {
    return this.movieService.fixTitle(title);
  }

}
