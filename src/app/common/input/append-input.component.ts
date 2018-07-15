import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
    selector: 'app-append-input',
    templateUrl: './app-append-input.component.html',
    styleUrls: ['./app-append-input.component.css']
})
export class AppendInputComponent {
    @Input() data;
    @Input() title;
    @Output() dataEmitter = new EventEmitter<any>();
    edit = false;

    add() {
        this.data.push('');
    }

    editData() {
        this.edit = true;
    }

    okData() {
        this.edit = false;
        this.dataEmitter.emit(this.data);
    }

    remove(index) {
        this.data.splice(index, 1);
    }

    change(e, i) {
        this.data[i] = e.currentTarget.value;
    }
}

