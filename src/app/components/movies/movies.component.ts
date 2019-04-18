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

  constructor(private validateService: ValidateService,
    private movieService: MovieService,
    public ngxSmartModalService: NgxSmartModalService) { }

  ngOnInit() {

  }

  openCreate() {
    this.validateService.ToDefaultValues();
    this.ngxSmartModalService.getModal('create').open();
  }

  sendCreate(title: string, year: string, runTime: string, genre: string, director: string) {
    title = this.movieService.fixTitle(title);
    let movie = new Movie(this.movieService.autoIncrement.toString(), title, year, runTime, genre, director);
    if (this.validateService.validateTitle(movie.Title, movie.id)) {
      this.movieService.addMovie(movie);
      this.movieService.autoIncrement++;
      this.ngxSmartModalService.getModal('create').close();
      return;
    }
  }

  openUpdate(movie: Movie) {
    this.validateService.ToDefaultValues();
    this.ngxSmartModalService.setModalData(movie, 'update', true);
    this.ngxSmartModalService.getModal('update').open();
  }

  sendUpdate(id: string, title: string, year: string, runTime: string, genre: string, director: string) {
    let movie = new Movie(id, title, year, runTime, genre, director);
    movie.Title = this.movieService.fixTitle(movie.Title);
    if (this.validateService.validateTitle(movie.Title, movie.id)) {
      if (this.validateService.validateMovie(movie)) {
        this.validateService.dataIsValidate = true;
        this.movieService.updateMovie(movie);
        this.ngxSmartModalService.getModal('update').close();
      }
    }
  }

  openRemove(movie: Movie) {
    this.ngxSmartModalService.setModalData(movie, 'delete', true);
    this.ngxSmartModalService.getModal('delete').open();
  }

  sendRemove() {
    let movie: Movie = this.ngxSmartModalService.getModal('delete').getData();
    this.movieService.removeMovie(movie);
    this.ngxSmartModalService.getModal('delete').close();
  }

}
