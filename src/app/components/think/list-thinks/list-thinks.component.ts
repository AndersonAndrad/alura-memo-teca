import { ModelThink, Think } from 'src/app/interfaces/think.interface';

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
    {
      id: '1',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore est perspiciatis quos distinctio magnam consequuntur dicta architecto iusto nihil ullam veniam officia, tempora porro, quia laborum libero. Dignissimos, illum quod? Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore est perspiciatis quos distinctio magnam consequuntur dicta architecto iusto nihil ullam veniam officia, tempora porro, quia laborum libero. Dignissimos, illum quod?',
      autor: 'tes',
      model: ModelThink.MODEL2,
    },
  ];
}
