import {Component} from '@angular/core';
import {HttpService} from '../common/http.service';
import {MatDialog} from '@angular/material';
import {CreateModuleDialogComponent} from './create/create-dialog.component';

@Component({
    selector: 'app-collect',
    templateUrl: './collect.component.html',
    styleUrls: ['./collect.component.css'],
    providers: []
})
export class CollectComponent {

    constructor(private httpService: HttpService,
                private dialog: MatDialog) {
    }

    createModule() {
        //TODO
        const createDialogDef = this.dialog.open(CreateModuleDialogComponent, {
            width: ''
        });
    }
}
