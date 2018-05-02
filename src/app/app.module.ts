import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { DhtmlxGridComponent } from './dhtmlx-grid/dhtmlx-grid.component';


@NgModule({
  declarations: [
    AppComponent,
    DhtmlxGridComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
