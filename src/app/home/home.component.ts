import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  images = [
    '/assets/images/team_photo.jpg',
    '/assets/images/team_photo.jpg',
    '/assets/images/team_photo.jpg'
  ];

  constructor() { }

  ngOnInit() {
  }

}
