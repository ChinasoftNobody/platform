import {Injectable} from '@angular/core';

@Injectable()
export class HeaderService {

    enTitle = 'Daily';
    cnTitle = '功能菜单';

    changeTitle(enTitle: string, cnTitle: string) {
        this.cnTitle = cnTitle;
        this.enTitle = enTitle;
    }

    resetTitle() {
        this.cnTitle = '功能菜单';
        this.enTitle = 'Daily';
    }
}
