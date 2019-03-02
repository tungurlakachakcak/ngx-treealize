import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgxTreealizeModule } from "ngx-treealize"

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxTreealizeModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
