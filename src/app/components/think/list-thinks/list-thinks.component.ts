import { ModelThink, Think } from '../think/think.component';

import { Component } from '@angular/core';

@Component({
  selector: 'app-list-thinks',
  templateUrl: './list-thinks.component.html',
  styleUrls: ['./list-thinks.component.scss'],
})
export class ListThinksComponent {
  thinkList: Think[] = [
    {
      id: '1',
      content: 'tes',
      autor: 'tes',
      model: ModelThink.MODEL1,
    },
  ];
}
