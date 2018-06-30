import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {HeaderService} from '../common/header/header.service';

@Component({
    selector: 'app-index',
    templateUrl: './index.component.html',
    styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
    cardOnClick(routerKey: any) {
        this.router.navigate([routerKey]).then();
    }


    constructor(private router: Router,
                private headerService: HeaderService) {
    }

    ngOnInit(): void {
        this.headerService.resetTitle();
    }
}
