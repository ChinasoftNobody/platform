import {Component, OnInit} from '@angular/core';
import {HeaderService} from './header.service';

@Component({
    selector: 'app-header',
    templateUrl: './app-header.component.html',
    styleUrls: ['./app-header.component.css']
})
export class HeaderComponent implements OnInit {

    headerService: HeaderService;

    constructor(headerService: HeaderService) {
        this.headerService = headerService;
    }

    ngOnInit(): void {
    }
}
