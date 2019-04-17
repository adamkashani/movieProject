import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie } from '../models/movie';
@Injectable({
  providedIn: 'root'
})
export class MovieService {
  // https://api.themoviedb.org/3/movie/550?api_key=cca2cdaecd647cb1f9c48906c98c8f66
  movieUrl: string = 'http://www.omdbapi.com/';
  key: string = 'apikey=34337168';
  id: string = 'tt123123';
  num: number = 10;
  autoIncrement: number = 1;
  movies: Movie[] = new Array;
  constructor(private httpClient: HttpClient) {

    for (let index = 0; index < this.num; index++) {
      this.getMovieFromApi(index).subscribe(
        (next) => {
          next.id = this.autoIncrement.toString();
          this.autoIncrement++;
          next.Title = this.fixTitle(next.Title);
          this.movies.push(next);
          // this.titleToSplit(next.Title);
        },
        (error) => console.log(error)
      )
    }

  }

  getMovieFromApi(digit: number): Observable<Movie> {
    return this.httpClient.get<Movie>(this.movieUrl + '?i=' + this.id + digit + '&' + this.key);
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
      if (element.id == movie.id) {
        this.movies.splice(index , 0);
        return;
      }
      index++;
    });
  }

  updateMovie(movie: Movie) {
    this.movies.forEach(element => {
      if (element.id == movie.id) {
        element = movie;
        return;
      }
    });
  }


  fixTitle(title: string): string {

    title = this.clearTitle(title);
    title.toLowerCase();
    title = title.charAt(0).toUpperCase() + title.slice(1);
    return title;
  }

  clearTitle(title: string): string {
    return title.replace(/[^a-zA-Z ]/g, "");
  }

  // לא בטוח שצריך את המתודה הזאת
  titleToSplit(title :string){
    // let endOfTitle : number  = title.search(/\d/);
    let endOfTitle : number  = title.search('dated');
    let test = title.substring(0 , endOfTitle);
    console.log(test)

  }

}
