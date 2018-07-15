import {Injectable} from '@angular/core';
import {AppLoadingComponent} from './app.loading.component';
import {MatDialog, MatDialogConfig, MatDialogRef} from '@angular/material';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {DialogData} from '../bean/DialogData';
import {Response} from '../bean/Responce';
import {Observable} from 'rxjs';
import {ErrorService} from './error.service';

/**
 * Created by Administrator on 2017/5/28.
 */
@Injectable()
export class HttpService {
    constructor(private httpClient: HttpClient, public dialog: MatDialog,
                private errorService: ErrorService) {
    }

    private openLoadingDialog(): MatDialogRef<any, any> {
        const dialogConfig: MatDialogConfig<DialogData> = new MatDialogConfig<DialogData>();
        return this.dialog.open<any, DialogData, any>(AppLoadingComponent, dialogConfig);
    }

    post(url: string, body: any, resolve?: (value: any) => void, failed?: (error: string) => void) {
        const loadingDialogRef = this.openLoadingDialog();
        const response: Observable<Response> = this.httpClient.post<Response>(url, body);
        response.subscribe((result) => {
            loadingDialogRef.close();
            if (result.success) {
                if (resolve) {
                    resolve(result.result);
                } else {
                    this.errorService.showError(result.result);
                }
            } else {
                if (failed) {
                    failed(result.message || 'Business error');
                } else {
                    this.errorService.showError('Business error: ' + result.message);
                }
            }

        }, error => {
            loadingDialogRef.close();
            console.log(error);
            this.errorService.showError('System busy:' + error.message);
        });
    }
}
