import {Component, OnDestroy, OnInit} from '@angular/core';
import {MovieService} from '../services/movie.service';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {Movie} from '../model/movie.model';

import express from 'express';
import {forEach} from '@angular/router/src/utils/collection';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit, OnDestroy {

  movies: Movie[];
  movieSub: Subscription;


  constructor(private movieService: MovieService,
              private router: Router,
              private httpC: HttpClient) { }

  ngOnInit() {


    this.movieService.getMovie();
    this.movieService.emitMovie();

  }

  ngOnDestroy(): void {
  }



}
