import { Pipe, PipeTransform } from '@angular/core';
import { ValidateService } from '../services/validate.service';
import { MovieService } from '../services/movie.service';

@Pipe({
  name: 'title'
})
export class TitlePipe implements PipeTransform {

  constructor(private movieService : MovieService){

  }

  transform(title: string, args?: any): string {
    return this.movieService.fixTitle(title);
  }

}
