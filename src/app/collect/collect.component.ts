import {Component, OnInit} from '@angular/core';
import {HttpService} from '../common/http.service';
import {MatDialog} from '@angular/material';
import {CreateModuleDialogComponent} from './create/create-dialog.component';
import {ErrorService} from '../common/error.service';
import {VideoServer} from '../config/server.config';
import {VideoServerKey} from '../config/video.server.info';
import {ConfirmComponent} from '../common/confirm/confirm.component';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
    selector: 'app-collect',
    templateUrl: './collect.component.html',
    styleUrls: ['./collect.component.css'],
    providers: []
})
export class CollectComponent implements OnInit {

    constructor(private httpService: HttpService,
                private dialog: MatDialog,
                private error: ErrorService,
                private videoService: VideoServer,
                private router: Router) {
    }

    modules: any[];

    ngOnInit(): void {
        this.queryAllModule();
    }

    queryAllModule() {
        this.httpService.post(this.videoService.getUrl(VideoServerKey.COLLECT_MODULE_QUERY),
            {}, value => {
                this.modules = value;
            });
    }

    createModule() {
        const dialogRef = this.dialog.open(CreateModuleDialogComponent, {
            width: '400px',
            disableClose: true
        });
        dialogRef.afterClosed().subscribe(value => {
            if (value === 'yes') {
                this.queryAllModule();
            }
        });
    }


    deleteModule(id: string) {
        const confirmDialogDef = this.dialog.open(ConfirmComponent, {
            disableClose: true,
            data: {level: 'Confirm', message: 'Are you sure to delete the module?', cancel: true}
        });
        confirmDialogDef.afterClosed().subscribe(value => {
            if (value === 'yes') {
                this.httpService.post(this.videoService.getUrl(VideoServerKey.COLLECT_DELETE_MODULE),
                    {id: id}, value1 => {
                        if (value1) {
                            this.queryAllModule();
                        } else {
                            this.error.showError('delete module failed');
                        }
                    });
            }
        });
    }

    moduleDetail(id: string) {
        this.router.navigate(['collect', id]).then();
    }
}
