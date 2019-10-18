import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './project/home/home.component';

const routes: Routes = [
    {
        path : '',
        component : LayoutComponent,
        children : [
            {
                path : '',
                component : HomeComponent
            },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
