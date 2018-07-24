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
  rdezvous: any[] = [];

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
    const date = new Date(2018, 7, 24, 2, 43, 20);
    const date2 = new Date(2018, 7, 24, 2, 43, 25);
    this.rdezvous.push(date, date2);
    counter.subscribe( value => {
      this.secondes = value;



      const min = new Date().getMinutes();
      const hours = new Date().getHours();
      const sec = new Date().getSeconds();

      this.rdezvous.forEach((value1, index) => {
        if ( value1.getSeconds() === sec && value1.getMinutes() === min && value1.getHours() === hours  ) {
          this.snotifyService.success('Vous avez un rendez vous !');
        }
      });


      });



  }

  ngOnDestroy(): void {
    this.movieSubscription.unsubscribe();
    localStorage.removeItem('valueSecondes');
  }



}
