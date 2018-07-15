import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HttpService} from '../../common/http.service';
import {VideoServer} from '../../config/server.config';
import {VideoServerKey} from '../../config/video.server.info';
import {MatDialog} from '@angular/material';
import {PlanCreateComponent} from './plan/plan-create.component';

@Component({
    selector: 'app-collect-module-detail',
    templateUrl: './collect-module-detail.component.html',
    styleUrls: ['./collect-module-detail.component.css'],
    providers: []
})
export class CollectModuleDetailComponent implements OnInit {
    constructor(private activeRoute: ActivatedRoute,
                private httpService: HttpService,
                private videoServer: VideoServer,
                private dialog: MatDialog) {
    }

    planList: any = [];

    ngOnInit(): void {
        this.queryAllPlan();
    }

    queryAllPlan() {
        this.httpService.post(this.videoServer.getUrl(VideoServerKey.MODULE_PLAN_QUERY),
            {id: this.activeRoute.snapshot.paramMap.get('id')}
            , value => {
                this.planList = value;
            });
    }

    createPlan() {
        const dialogDef = this.dialog.open(PlanCreateComponent,
            {
                minWidth: '600px',
                disableClose: true,
                data: this.activeRoute.snapshot.paramMap.get('id')
            });
        dialogDef.afterClosed().subscribe(value => {
            if (value === 'yes') {
               this.queryAllPlan();
            }
        });
    }

}
