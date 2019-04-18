import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Movie } from 'src/app/models/movie';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {

  @Input('movie') movie: Movie;

  @Output() eventUpdate: EventEmitter<Movie> = new EventEmitter();
  update() {
    this.eventUpdate.emit(this.movie);
  }

  @Output() eventRemove: EventEmitter<Movie> = new EventEmitter();
  remove() {
    this.eventRemove.emit(this.movie);
  }

  constructor() { }

  ngOnInit() {
    
  }

}
