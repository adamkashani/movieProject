import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie } from '../models/movie';
@Injectable({
  providedIn: 'root'
})
export class MovieService {

  moviesTitle: Array<string> = [
    'ghost rider', 'captain marvel', 'dumbo', 'Slumdog Millionaire', 'Thor', 'Troy',
    'Pinocchio', 'Avengers', 'hellboy', 'Daddy\'s Home', 'Law Abiding Citizen'];

  movieUrl: string = 'http://www.omdbapi.com/';
  key: string = 'apikey=34337168';
  autoIncrement: number = 1;
  movies: Movie[] = new Array;
  constructor(private httpClient: HttpClient) {
    for (let index = 0; index < this.moviesTitle.length; index++) {
      let strTitle = this.moviesTitle[index];
      this.getMovieFromApi(strTitle).subscribe(
        (next) => {
          next.id = this.autoIncrement.toString();
          this.autoIncrement++;
          next.Title = this.fixTitle(next.Title);
          this.movies.push(next);
        },
        (error) => console.log(error)
      )
    }
  }

  getMovieFromApi(title: string): Observable<Movie> {
    return this.httpClient.get<Movie>(this.movieUrl + '?t=' + title + '&' + this.key);
  }

  getMovieList(): Array<Movie> {
    return this.movies;
  }

  addMovie(movie: Movie) {
    this.movies.push(movie);
  }

  removeMovie(movie: Movie) {
    let index = 0;
    this.movies.forEach(element => {
      if (element === movie) {
        this.movies.splice(index, 1);
        return;
      }
      index++;
    });
  }

  updateMovie(movie: Movie) {
    for (let index = 0; index < this.movies.length; index++) {
      if (this.movies[index].id === movie.id) {
        this.movies[index] = movie;
      }
    }
  }


  fixTitle(title: string): string {
    title = this.clearTitle(title);
    const splitStr: Array<string> = title.toLowerCase().split(' ');
    for (let i = 0; i < splitStr.length; i++) {
      splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
    }
    return splitStr.join(' ');
  }

  clearTitle(title: string): string {
    return title.replace(/[^a-zA-Z ]/g, "");
  }

}
