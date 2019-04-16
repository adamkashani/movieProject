import { Movie } from '../models/movie';

export interface AppState {
  readonly movies: Movie[];
}
