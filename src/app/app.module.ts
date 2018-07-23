import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MovieComponent } from './movie/movie.component';
import { HeaderComponent } from './header/header.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';
import {MovieService} from './services/movie.service';
import {SnotifyModule, SnotifyService, ToastDefaults} from 'ng-snotify';
const appRoutes: Routes = [
  { path: 'movie', component: MovieComponent },
  { path: '', redirectTo: 'movie', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    MovieComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    SnotifyModule
  ],
  providers: [
    MovieService,
    { provide: 'SnotifyToastConfig', useValue: ToastDefaults},
    SnotifyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
