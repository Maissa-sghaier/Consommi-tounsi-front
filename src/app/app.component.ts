import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'consommi-tounssi';

<<<<<<< HEAD
  constructor(private router: Router, ) { 

  }
=======
  constructor(private router: Router) { }
>>>>>>> 0c5926d8710d9c579dd39754194b7d39a1f941af
navTo(){
  this.router.navigate(['/add']);
}

}

