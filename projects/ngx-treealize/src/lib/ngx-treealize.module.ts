import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxTreealizeComponent } from './ngx-treealize.component';
import { TreeTemplateComponent } from "./tree-template/tree-template.component";

@NgModule({
  declarations: [NgxTreealizeComponent, TreeTemplateComponent],
  imports: [
    BrowserModule
  ],
  exports: [NgxTreealizeComponent]
})
export class NgxTreealizeModule { }
