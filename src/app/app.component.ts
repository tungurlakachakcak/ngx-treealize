import { Component } from '@angular/core';

@Component({
  selector: 'ngx-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngx';
  nodes = [{
    id: 1,
    label: 'Peter Swanson',
    children: [{
      id: 2,
      label: 'Gabriel Meshuggah',
      children: [],
      isExpanded: false
    }, {
      id: 4,
      label: 'Bratan Slaoich',
      children: [{
        id: 41,
        label: 'Plens Laid',
        children: [],
        isExpanded: false
      }],
      isExpanded: false
    }],
    isExpanded: false
  }, {
    id: 3,
    label: 'Peter Meterson',
    children: [],
    isExpanded: false
  }]
}
