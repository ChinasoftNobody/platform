import {Component, OnInit} from '@angular/core';
import {HttpService} from '../common/http.service';
import {VideoServer} from '../config/server.config';
import {VideoServerKey} from '../config/video.server.info';
import {PageEvent} from '@angular/material';
import {Movie} from '../bean/Movie';
import {ActivatedRoute, Router} from '@angular/router';

/**
 * Created by Administrator on 2018/6/19.
 */
@Component({
    selector: 'app-video',
    templateUrl: './video.component.html',
    styleUrls: ['./video.component.css'],
    providers: []
})
export class VideoComponent implements OnInit {
    filter: any = {
        keyword: '',
        type: [],
        region: [],
        actor: '',
        director: '',
        page: {
            length: 10000,
            pageIndex: 0,
            pageSize: 20,
            pageSizeOptions: [20]
        }
    };
    movieInfo: any = {
        types: [],
        region: [],
    };
    movieList: Array<Movie> = [];
    movieLength: Number = 0;

    constructor(private http: HttpService,
                private videoServer: VideoServer,
                private router: Router,
                private activedRouter: ActivatedRoute) {
    }

    /**
     * query movie by filter
     * @param context
     */
    queryMovieByFilter(context: any) {
        context.filter.type = [];
        context.movieInfo.types.forEach((type) => {
            if (type.checked) {
                context.filter.type = [...context.filter.type, type.name];
            }
        });
        context.filter.region = [];
        context.movieInfo.region.forEach((region) => {
            if (region.checked) {
                context.filter.region = [...context.filter.region, region.name];
            }
        });
        context.http.post(context.videoServer.getUrl(VideoServerKey.QUERY_BY_FILTER), context.filter, (value) => {
            context.movieList = value.list;
            context.movieLength = value.total;
        });
    }

    movieDetail(id: string) {
        this.router.navigate(['movie', id], {relativeTo: this.activedRouter}).then();
    }

    /**
     *
     * @param event
     */
    pageChange($event: PageEvent) {
        this.filter.page.pageSize = $event.pageSize;
        this.filter.page.length = $event.length;
        this.filter.page.pageIndex = $event.pageIndex;
        this.queryMovieByFilter(this);
    }

    /**
     * search
     */
    search() {
        this.resetPage();
        this.queryMovieByFilter(this);
    }

    ngOnInit(): void {
        this.queryTypes(this);
        this.queryRegions(this);
        this.queryMovieByFilter(this);
    }

    private queryTypes(context: this) {
        context.http.post(context.videoServer.getUrl(VideoServerKey.QUERY_TYPES), null, (value) => {
            value.forEach((item) => {
                context.movieInfo.types = [...context.movieInfo.types, {name: item, checked: false}];
            });
        });
    }

    private queryRegions(context: this) {
        context.http.post(context.videoServer.getUrl(VideoServerKey.QUERY_REGIONS), null, (value) => {
            value.forEach((item) => {
                context.movieInfo.region = [...context.movieInfo.region, {name: item, checked: false}];
            });
        });
    }

    private resetPage() {
        this.filter.page = {
            length: 10000,
            pageIndex: 0,
            pageSize: 20,
            pageSizeOptions: [20]
        };
    }
}
