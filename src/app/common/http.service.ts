import {Injectable} from '@angular/core';
import {AppLoadingComponent} from './app.loading.component';
import {MatDialog, MatDialogConfig, MatDialogRef} from '@angular/material';
import {HttpClient} from '@angular/common/http';
import {DialogData} from '../bean/DialogData';
import {Responce} from '../bean/Responce';
/**
 * Created by Administrator on 2017/5/28.
 */
@Injectable()
export class HttpService {
    constructor(private httpClient: HttpClient, public dialog: MatDialog) {
    }

    private openLoadingDialog(): MatDialogRef<any, any> {
        const dialogConfig: MatDialogConfig<DialogData> = {
            data: null
        };
        return this.dialog.open<any, DialogData, any>(AppLoadingComponent, dialogConfig);
    }

    post(url: string, body: any, resolve?: (value: any) => void, failed?: (error: string) => void) {
        const loadingDialogRef = this.openLoadingDialog();
        this.httpClient.post<Responce>(url, body).subscribe(value => {
            loadingDialogRef.close();
            if (value.success) {
                if (resolve) {
                    resolve(value.result);
                } else {
                    console.log(value.result);
                }
            } else {
                if (failed) {
                    failed(value.message || '');
                } else {
                    cosole.erorr('System error');
                }
            }
        }, error => {
            console.error(error);
            loadingDialogRef.close();
        });
    }
}
