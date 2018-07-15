import {Component, Inject} from '@angular/core';
import {DialogData} from '../../bean/DialogData';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
    selector: 'app-confirm',
    templateUrl: './confirm.component.html',
    styleUrls: ['./confirm.component.css']
})
export class ConfirmComponent {
    constructor(
        public dialogRef: MatDialogRef<ConfirmComponent>,
        @Inject(MAT_DIALOG_DATA) public data: DialogData) {
        this.confirmInfo = data;
        switch (this.confirmInfo.level){
            case 'Info':
                this.title = 'Information';
                break;
            case 'Warning':
                this.title = 'Warning';
                break;
            case 'Confirm':
                this.title = 'Confirm';
                break;
            default:
                this.title = 'Information';
                break;
        }
    }

    title = '';

    confirmInfo: any = {
        level: '',
        message: '',
        cancel: false
    };

    confirm() {
        this.dialogRef.close('yes');
    }

    cancel() {
        this.dialogRef.close();
    }

}
