import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
})
export class SliderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  aa: string = 'assets/images/aa.jpg';
  bb: string = 'assets/images/bb.webp';
  cc: string = 'assets/images/cc.jpg';
  dd: string = 'assets/images/dd.jpg';

}
