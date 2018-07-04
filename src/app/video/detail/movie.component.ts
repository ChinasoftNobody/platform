import {Component, OnInit} from '@angular/core';
import {Movie} from '../../bean/Movie';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpService} from '../../common/http.service';
import {VideoServer} from '../../config/server.config';
import {VideoServerKey} from '../../config/video.server.info';

@Component({
    selector: 'app-movie',
    templateUrl: './movie.component.html',
    styleUrls: ['./movie.component.css'],
    providers: []
})
export class MovieComponent implements OnInit {
    movie: Movie = new Movie();
    subImages: string[];

    constructor(private activeRoute: ActivatedRoute,
                private httpService: HttpService,
                private videoServer: VideoServer) {
    }

    ngOnInit(): void {
        this.initMovieInfo();
    }

    private initMovieInfo() {
        const movieId = this.activeRoute.snapshot.paramMap.get('id');
        this.initMovie(movieId);
    }

    private initMovie(movieId: string | null): void {
        if (movieId === null) {
            console.error('movie id not found');
        }
        this.httpService.post(this.videoServer.getUrl(VideoServerKey.MOVIE_DETAIL), {id: movieId}, (value => {
            this.movie = value;
        }));
        this.httpService.post(this.videoServer.getUrl(VideoServerKey.SUB_IMAGES), {id: movieId}, (value => {
            this.subImages = value;
        }));
    }
}
