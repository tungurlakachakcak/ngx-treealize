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
    iconUrl: 'https://angular.io/assets/images/logos/angular/angular.svg',
    children: [{
      id: 2,
      label: 'Gabriel Meshuggah',
      children: [],
      iconUrl: 'https://cloud.githubusercontent.com/assets/10656223/15247118/e71dc6a2-1909-11e6-9b90-ae86204f41c3.png',
    }, {
      id: 4,
      label: 'Bratan Slaoich',
      iconUrl: 'https://camo.githubusercontent.com/6cf90bd5c928f5c58116666f4102371641883ad5/68747470733a2f2f662e636c6f75642e6769746875622e636f6d2f6173736574732f313036373930372f323136303134322f30333036353666342d393462342d313165332d393865362d3732343336393830666462652e6a7067',
      children: [{
        id: 41,
        label: 'Plens Laid',
        children: [],
        iconUrl: 'https://camo.githubusercontent.com/6cf90bd5c928f5c58116666f4102371641883ad5/68747470733a2f2f662e636c6f75642e6769746875622e636f6d2f6173736574732f313036373930372f323136303134322f30333036353666342d393462342d313165332d393865362d3732343336393830666462652e6a7067',
      }],
    }],
  }, {
    id: 3,
    label: 'Peter Meterson',
    children: [],
    iconUrl: 'https://angular.io/assets/images/logos/angular/angular.svg',
  }]
}
