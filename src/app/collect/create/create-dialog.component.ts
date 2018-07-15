import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher, MatDialog, MatDialogRef} from '@angular/material';
import {HttpService} from '../../common/http.service';
import {VideoServerKey} from '../../config/video.server.info';
import {VideoServer} from '../../config/server.config';

@Component({
    selector: 'app-create-module-dialog',
    templateUrl: './create-module.component.html',
    styleUrls: ['./create-module.component.css'],
    providers: []
})
export class CreateModuleDialogComponent implements OnInit {
    module: any = {name: '', description: ''};
    errorMessage = 'type a valid module name';

    constructor(private dialog: MatDialogRef<CreateModuleDialogComponent>,
                private http: HttpService,
                private videoService: VideoServer) {
    }

    ngOnInit(): void {
    }

    createModule() {
        if (this.module.name === '') {
            this.errorMessage = 'type a valid module name';
        } else {
            this.http.post(this.videoService.getUrl(VideoServerKey.COLLECT_CREATE_MODULE),
                this.module, value => {
                    this.dialog.close('yes');
                });
        }

    }

    createCancel() {
        this.dialog.close();
    }
}
