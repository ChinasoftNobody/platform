import {BrowserModule} from '@angular/platform-browser';
import {enableProdMode, NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {CopyrightComponent} from './common/copyright/copyright.component';
import {HttpService} from './common/http.service';
import {VideoComponent} from './video/video.component';
import {IndexComponent} from './index/index.component';
import {AppLoadingComponent} from './common/app.loading.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';
import {MatCardModule} from '@angular/material/card';
import {RouterModule} from '@angular/router';
import {AppRouterModule} from './app.router.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {FormsModule} from '@angular/forms';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {DailyServer, VideoServer} from './config/server.config';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {MovieComponent} from './video/detail/movie.component';
import {HeaderComponent} from './common/header/header.component';
import {HeaderService} from './common/header/header.service';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {ErrorService} from './common/error.service';


@NgModule({
    declarations: [
        AppComponent, CopyrightComponent, VideoComponent, IndexComponent, AppLoadingComponent, MovieComponent, HeaderComponent
    ],
    imports: [
        BrowserModule, RouterModule, AppRouterModule, BrowserAnimationsModule, FormsModule, HttpClientModule,
        MatProgressSpinnerModule, MatGridListModule, MatFormFieldModule, MatInputModule, MatDialogModule, MatCardModule,
        MatExpansionModule, MatPaginatorModule, MatSelectModule, MatCheckboxModule, MatDividerModule, MatListModule,
        MatButtonModule, MatTableModule, MatIconModule, MatSnackBarModule
    ],
    providers: [HttpService, DailyServer, VideoServer, HttpClient, HeaderService, ErrorService],
    bootstrap: [AppComponent],
    entryComponents: [AppLoadingComponent]
})
export class AppModule {
}

enableProdMode();
