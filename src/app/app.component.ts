import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'drr';

  constructor(private router: Router){
  console.log(this.router.url);
  }

  menuSelected(group: any){
    group.value="";
  }
}
