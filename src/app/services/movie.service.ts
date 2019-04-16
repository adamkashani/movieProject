import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie } from '../models/movie';
@Injectable({
  providedIn: 'root'
})
export class MovieService {
  //https://api.themoviedb.org/3/movie/550?api_key=cca2cdaecd647cb1f9c48906c98c8f66
  movieUrl: string = 'http://www.omdbapi.com/';
  key: string = 'apikey=34337168';
  id: string = 'tt123123';
  num: number = 10;
  movies : Movie[] = new Array;
  constructor(private httpClient: HttpClient) {
   
    for (let index = 0; index < this.num; index++) {
      this.getMovieFromApi(index).subscribe(
        (next) => {next.id=this.id+index ; this.movies.push(next) } ,
        (error) => console.log(error)
      )
      
    }
    
  }
  
  getMovieFromApi(digit : number ): Observable<Movie> {
   return this.httpClient.get<Movie>(this.movieUrl + '?i=' + this.id + digit + '&' + this.key);
  }

  getMovieList(): Array<Movie> {
    return this.movies;
  }

  addMovie(movie : Movie){
    this.movies.push(movie);
  }

  removeMovie(movie : Movie){
    let index = 0;
    this.movies.forEach(element => {
      if ( element == movie ){
        this.movies.splice(index);
        return;
      }
      index++;
    });
  }

  updateMovie(movie : Movie){

    this.movies.forEach(element => {
      if ( element.id == movie.id ) {
        element = movie ; 
        return;
      }
    });
  }


  
}
