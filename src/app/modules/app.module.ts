import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgxSmartModalModule } from 'ngx-smart-modal';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from '../components/layout/app.component';
import { MoviesComponent } from '../components/movies/movies.component';
import { MovieComponent } from '../components/movie/movie.component';

import { TitlePipe } from '../pipes/title.pipe';







@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    MovieComponent,
    TitlePipe,
  ],
  imports: [
    BrowserModule,
    StoreModule,
    BrowserAnimationsModule,
    FormsModule,
    NgxSmartModalModule.forRoot(),
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
 