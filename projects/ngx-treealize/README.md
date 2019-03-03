# TreealizeLib

* A simple component that renders a tree-like structure
* No predefined node template, so you can customize it for your business case
* Has ability to output events of the selected/clicked node
* Just one additional dependency. Small overhead.

## Examples/Demo

Download or clone this repo and run `npm i` and `npm start`

## Installation

`npm i -S ngx-treealize`

## API

`import { NgxTreealizeModule } from 'ngx-treealize'`

## @Inputs

| Input            | Type    | Required                   | Description                                                                                               |
| ---------------- | ------- | -------------------------- | --------------------------------------------------------------------------------------------------------- |
| nodes           | TreeNode[]  | **YES**                    | The nodes of the tree containing child nodes                                                |
| selectedNode        | number  | Optional     | The id of the selected node                                                                       |
| treeTemplate        | ElementRef  | **YES**      | The template of each node. Each template has ref to the node in obj called node                                                |

## @Outputs

| Output           | Type       | Required | Description                                            |
| ---------------- | ---------- | -------- | ------------------------------------------------------ |
| selected | number | **YES**  | emits the id of the selected node. |

## Usage

1. Register the NgxTreealizeModule module in the module that you want to use it - feature or app.

`import { NgxTreealizeModule } from 'ngx-treealize'`

```typescript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxTreealizeModule } from 'ngx-treealize'
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    NgxTreealizeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
 ```

 2. Use the lib in your template

 ```html
  <ngx-treealize [nodes]="nodes" [treeTemplate]="template"></ngx-treealize>
  <ng-template #template let-node>
    {{node.label}}
  </ng-template>
```

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'ngx-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nodes = [{
    id: 1,
    label: 'Peter Swanson',
    children: [{
      id: 2,
      label: 'Gabriel Meshuggah',
      children: []
    }, {
      id: 4,
      label: 'Bratan Slaoich',
      children: [{
        id: 41,
        label: 'Plens Laid',
        children: []
      }]
    }]
  }, {
    id: 3,
    label: 'Peter Meterson',
    children: []
  }]
}
```

## Build the NgxTreealizeModule module

Run `ng build NgxTreealizeModule` to build the library. The build artifacts will be stored in the `dist/ngx-treealize` directory. Use the `--prod` flag for a production build.

