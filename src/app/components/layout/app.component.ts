import { trigger, state, style } from '@angular/animations';

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('backGroundHandler', [
      state('color', style({ opacity: '1',  background: 'linear-gradient(to bottom, #999966 0%, #999966 80%)' })),
    ])]
})
export class AppComponent {

  backgroundState = 'color';
  title = 'movies';
}
