import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgxSmartModalModule } from 'ngx-smart-modal';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviesComponent } from './components/movies/movies.component';
import { MovieComponent } from './components/movie/movie.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    MovieComponent,
  ],
  imports: [
    BrowserModule,
    StoreModule,
    FormsModule,
    NgxSmartModalModule.forRoot(),
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
 