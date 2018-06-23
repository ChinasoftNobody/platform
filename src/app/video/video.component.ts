import {Component, OnInit} from '@angular/core';
import {HttpService} from '../common/http.service';
import {VideoServer} from '../config/server.config';
import {VideoServerKey} from '../config/video.server.info';
import {PageEvent} from '@angular/material';
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
            length: 100,
            pageIndex: 0,
            pageSize: 10,
            pageSizeOptions: [5, 10, 25, 100]
        }
    };
    movieInfo: any = {
        types: [{name: 'Action', checked: false}, {name: 'Love', checked: false}, {name: 'Plot', checked: false}],
        region: [{name: 'China', checked: false}, {name: 'America', checked: false}, {name: 'Japan', checked: false}],
    };
    movieList: any = [];

    constructor(private http: HttpService,
                private videoServer: VideoServer) {
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
            context.movieList = value;
        });
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
        this.queryMovieByFilter(this);
    }

    ngOnInit(): void {
        this.queryMovieByFilter(this);
    }
}
