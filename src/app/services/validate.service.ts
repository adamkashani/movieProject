import { Injectable } from '@angular/core';
import { MovieService } from './movie.service';
import { Movie } from '../models/movie';

@Injectable({
  providedIn: 'root'
})
export class ValidateService {


  constructor(private movieService: MovieService) { }



  validateTitle(title: string , id : string ): boolean {
    if (title === "" ) {
      return false;
    }
    if (this.ifTitleExists(title , id)) {
      return false;
    }
    return true;
  }

  ifTitleExists(title: string , id : string): boolean {
    let list = this.movieService.getMovieList();
    for (let index = 0; index < list.length; index++) {
      if (list[index].Title === title && list[index].id != id) {
        return true;
      }
    }
    return false;
  }


  validateToCreate(movie: Movie): boolean {
    if (this.validateTitle(movie.Title , movie.id)) {
      if (movie.Genre != "") {
        if (movie.Year != "") {
          //אולי ניצתרך לשנות וולדציה מסטריג לתאריך
          if (movie.Runtime != "") {
            return true;
          }
        }
      }
    }
    return false;
  }

}
