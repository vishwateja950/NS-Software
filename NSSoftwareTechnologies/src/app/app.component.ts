import { Component } from '@angular/core';

import {NavigationEnd, Router} from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'NS SoftwareTechnologies';

  ShowHeader= true;

  constructor(private router:Router) {

    router.events.subscribe(
      (val)=>{
        if(val instanceof NavigationEnd){
          if(val.url=='/home'){
            this.ShowHeader=true
          }
        }
      }
    )
  }
}
