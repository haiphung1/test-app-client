import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule }    from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './admin/home/home.component';
import { AddProjectComponent } from './admin/add-project/add-project.component';
import { DetailProjectComponent } from './admin/detail-project/detail-project.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddProjectComponent,
    DetailProjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
