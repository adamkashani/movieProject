import { Injectable } from '@angular/core';
import { MovieService } from './movie.service';
import { Movie } from '../models/movie';

@Injectable({
  providedIn: 'root'
})
export class ValidateService {

  isTitleExists: boolean = false;
  dataIsValidate: boolean = true;

  constructor(private movieService: MovieService) { }


  ToDefaultValues() {
    this.isTitleExists = false;
    this.dataIsValidate = true;
  }


  validateMovie(movie: Movie): boolean {
    if (movie.Genre !== '') {
      if (movie.Year !== '') {
        if (movie.Runtime !== '') {
          if (movie.Director !== '') {
            this.dataIsValidate = true;
            return true;
          }
        }
      }
    }
    this.dataIsValidate = false;
    return false;
  }

  validateTitle(title: string, id: string): boolean {
    if (title === '') {
      return false;
    }
    if (this.ifTitleExists(title, id)) {
      this.isTitleExists = true;
      return false;
    } else {
      this.isTitleExists = false;
      return true;

    }
  }

  ifTitleExists(title: string, id: string): boolean {
    let list = this.movieService.getMovieList();
    for (let index = 0; index < list.length; index++) {
      if (list[index].Title === title && list[index].id !== id) {
        return true;
      }
    }
    return false;
  }

}
