import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {MovieService} from '../services/movie.service';
import {Router} from '@angular/router';
import {Movie} from '../model/movie.model';

import {config, interval, Observable, Subscription} from 'rxjs';
import {Snotify, SnotifyService} from 'ng-snotify';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit, OnDestroy {

  movies: Movie[];
  movieSubscription: Subscription;
  secondes: number;

  constructor(private movieService: MovieService,
              private router: Router,
              private snotifyService: SnotifyService) { }

  ngOnInit() {



      this.movieSubscription = this.movieService.moviesSubject.subscribe(
        (movies: Movie[]) => {
          this.movies = movies;
      });
    console.log('movies : ' + this.movies);
    this.movieService.getMovie();
    this.startCounter();
  }

  startCounter() {

    const counter = interval(1000);
    counter.subscribe( value => {
      this.secondes = value;
      console.log(new Date());
      const date = new Date(2018, 7, 24, 1, 51);


      const min = new Date().getMinutes();
      const hours = new Date().getHours();
      const sec = new Date().getSeconds();


      console.log(date.getSeconds());
      console.log(new Date().getSeconds());
      if ( date.getSeconds() === sec && date.getMinutes() === min && date.getHours() === hours  ) {
        this.snotifyService.success('Vous avez un rendez-vous !');
      }

      });



  }

  ngOnDestroy(): void {
    this.movieSubscription.unsubscribe();
    localStorage.removeItem('valueSecondes');
  }



}
