import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './admin/home/home.component';
import { AddProjectComponent } from './admin/add-project/add-project.component';
import { DetailProjectComponent } from './admin/detail-project/detail-project.component';

const routes: Routes = [
    {
        path: "",
        component: HomeComponent
    },
    {
        path: "project/add",
        component: AddProjectComponent
    },
    {
        path: "project/detail/:id",
        component: DetailProjectComponent
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
