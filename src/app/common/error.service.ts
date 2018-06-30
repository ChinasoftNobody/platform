import {Injectable} from '@angular/core';
import {MatSnackBar} from '@angular/material';

@Injectable()
export class ErrorService {
    constructor(private snackBar: MatSnackBar) {
    }

    public showError(msg: string) {
        this.snackBar.open(msg, '', {duration: 2000});
    }
}
