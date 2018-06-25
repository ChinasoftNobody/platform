import {Component, OnInit} from '@angular/core';
import {Movie} from '../../bean/Movie';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
    selector: 'app-movie',
    templateUrl: './movie.component.html',
    styleUrls: ['./movie.component.css'],
    providers: []
})
export class MovieComponent implements OnInit {
    movie: Movie;


    constructor(private activeRoute: ActivatedRoute) {
    }

    ngOnInit(): void {
        this.initMovieInfo();
    }

    private initMovieInfo() {
        console.log(this.activeRoute.snapshot.paramMap.get('id'));
    }
}
