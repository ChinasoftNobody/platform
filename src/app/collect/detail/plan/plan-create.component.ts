import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {DialogData} from '../../../bean/DialogData';
import {ConfirmComponent} from '../../../common/confirm/confirm.component';
import {HttpService} from '../../../common/http.service';
import {VideoServer} from '../../../config/server.config';
import {VideoServerKey} from '../../../config/video.server.info';


@Component({
    selector: 'app-module-plan-create',
    templateUrl: './module-plan-create.component.html',
    styleUrls: ['./module-plan-create.component.css'],
    providers: []
})
export class PlanCreateComponent implements OnInit {
    dataInfo: any = {moduleId: ''};
    crons = ['Day', 'Week', 'Moth', 'Year'];

    planInfo: any = {
        id: '',
        moduleId: '',
        name: '',
        description: '',
        cron: '',
        urls: [],
        urlPrefix: '',
        standard: true,
        expiredUrlSize: 0,
        queryStyles: [],
        lastCollectTime: ''
    };

    errorMessage = '';

    ngOnInit(): void {
        this.dataInfo.moduleId = this.data;
        this.planInfo.moduleId = this.dataInfo.moduleId;
    }

    constructor(public dialogRef: MatDialogRef<ConfirmComponent>,
                @Inject(MAT_DIALOG_DATA) public data: DialogData,
                private httpService: HttpService,
                private videoServer: VideoServer) {

    }

    create() {
        if (this.planInfo.name === '') {
            this.errorMessage = 'plan name can not be empty';
        }
        this.httpService.post(this.videoServer.getUrl(VideoServerKey.COLLECT_CREATE_PLAN),
            this.planInfo, value => {
                this.dialogRef.close('yes');
            });
    }

    cancel() {
        this.dialogRef.close();
    }

    resolveUrls(e) {
        this.planInfo.urls = e;
    }
}


