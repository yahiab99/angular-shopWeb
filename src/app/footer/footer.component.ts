import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  facebook: string = 'assets/images/facebook.png';
  instagram: string = 'assets/images/instagram.png';
  twitter: string = 'assets/images/twitter.png';

  constructor() { }

  ngOnInit(): void {
  }

}
