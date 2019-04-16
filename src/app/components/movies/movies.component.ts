import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import { Movie } from 'src/app/models/movie';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  movies : Movie[] ;
  constructor(private movieService: MovieService , private modalService : ModalService) { }

  ngOnInit() {
    this.movies = this.movieService.getMovieList();
  }



  openModal(id: string) {
    this.modalService.open(id);
}

closeModal(id: string) {
    this.modalService.close(id);
}



}
