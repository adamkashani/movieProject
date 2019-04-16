import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import { Movie } from 'src/app/models/movie';
import { NgxSmartModalService } from 'ngx-smart-modal';
import { ValidateService } from 'src/app/services/validate.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  movie: Movie = null;
  // tslint:disable-next-line: max-line-length
  constructor(private validateService: ValidateService, private movieService: MovieService, public ngxSmartModalService: NgxSmartModalService) { }

  ngOnInit() {
  }

  add() {
    this.ngxSmartModalService.getModal('create').open();
  }


  checkAndCreate(title: string, year: string, runTime: string, genre: string, director: string) {
    //this.validateService.validateRumTime(id)&&
    title = this.movieService.fixTitle(title);
    let movie = new Movie(this.movieService.autoIncrement.toString(), title, year, runTime, genre, director)
    if (this.validateService.validateToCreate(movie)) {
      this.movieService.addMovie(movie);
      this.movieService.autoIncrement++;
      this.ngxSmartModalService.getModal('create').close();
      return;
    } else {
      alert('no validate')
    }

  }


  updateMovie(movie: Movie) {
    this.ngxSmartModalService.setModalData(movie, 'update', true);
    this.ngxSmartModalService.getModal('update').open();
  }

  checkAndUpdate() {
    let movie: Movie = this.ngxSmartModalService.getModal('update').getData();
    //this.validateService.validateRumTime(id)&&
    movie.Title = this.movieService.fixTitle(movie.Title);
    if (this.validateService.validateTitle(movie.Title, movie.id)) {
      this.movieService.updateMovie(movie);
      this.ngxSmartModalService.getModal('update').close();
    } else {
      alert('no validate');
    }
  }

  removeMovie(movie: Movie) {

    this.ngxSmartModalService.setModalData(movie, 'delete', true);
    this.ngxSmartModalService.getModal('delete').open();

  }

  remove() {
    let movie: Movie = this.ngxSmartModalService.getModal('delete').getData();
    this.movieService.removeMovie(movie);
    this.ngxSmartModalService.getModal('delete').close();
  }







}
