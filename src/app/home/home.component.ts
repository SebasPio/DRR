import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  constructor() { }

  bannerUrl: string = 'https://drive.google.com/uc?export=view&id=1XYSphZW6AA469-6U8dEFWtDNwIDicatY';

  ngOnInit(): void {
  }

}
