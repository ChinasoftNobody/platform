import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {IndexComponent} from './index/index.component';
import {VideoComponent} from './video/video.component';
import {MovieComponent} from './video/detail/movie.component';
import {CollectComponent} from './collect/collect.component';
import {CollectModuleDetailComponent} from './collect/detail/collect-module-detail.component';

/**
 * Created by Administrator on 2017/5/28.
 */
const routes: Routes = [
    {path: '', redirectTo: '/index', pathMatch: 'full'},
    {path: 'index', component: IndexComponent},
    {path: 'video', component: VideoComponent},
    {path: 'video/movie/:id', component: MovieComponent},
    {path: 'collect', component: CollectComponent},
    {path: 'collect/:id', component: CollectModuleDetailComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRouterModule {
}

