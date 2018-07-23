import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators';
import {Movie} from '../model/movie.model';
import {Observable, Subject, Subscription} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }
  movies: Movie[] = [];
  moviesSubject = new Subject<Movie>();
  private url = 'http://movieapi.azurewebsites.net/api/movie';

  emitMovie() {
    //this.moviesSubject.next(this.movies);
  }



  getMovie() {
    return this.http.get('http://movieapi.azurewebsites.net/api/movie').subscribe((res: Movie[]) => {
      console.log('resultat : ');
      console.log(res);
      this.movies = res;
      this.emitMovie();

    });
  }
}
