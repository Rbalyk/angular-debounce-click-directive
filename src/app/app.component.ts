import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-debounce-click-directive';
  count = 0;

  increase(){
    this.count += 1;
  }

  decrease(){
    this.count -= 1;
  }
}
