import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent  {
  cardOnClick(routerKey: any) {
    this.router.navigate([routerKey]).then();
  }



  constructor(private router: Router) {
  }
}
