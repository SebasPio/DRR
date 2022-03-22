import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { library, IconDefinition, IconProp, SizeProp } from '@fortawesome/fontawesome-svg-core';
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faDiscord } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faTwitch } from '@fortawesome/free-brands-svg-icons'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'drr';
  sizeButton: SizeProp = '3x';
  faFacebook = faFacebook as IconProp;
  faInstagram = faInstagram as IconProp;
  faDiscord = faDiscord as IconProp;
  faTwitter = faTwitter as IconProp;
  faTwitch = faTwitch as IconProp;

  constructor(private router: Router){
  console.log(this.router.url);
  // library.add(faFacebook as IconDefinition);
  }

  menuSelected(group: any){
    group.value="";
  }

  facebookLink(){
    window.open('https://www.facebook.com/Eurolatameports');
  }
  
  instagramLink(){
    window.open('https://instagram.com/eurolatam_?utm_medium=copy_link');
  }
  
  twitterLink(){
    window.open('https://twitter.com/Eurolatam_?t=Yd40IGDjgNA2qEP995K99g&s=09');
  }

  twitchLink(){
    window.open('https://www.twitch.tv/karlosvanko');
  }
}
