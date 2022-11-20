import { Component, Output, EventEmitter } from '@angular/core';
import { DataService } from 'src/services/data.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'plastic shopping';

  constructor(private data: DataService){
  }

}
