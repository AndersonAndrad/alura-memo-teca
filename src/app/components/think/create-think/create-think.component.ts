import { ModelThink, Think } from '../think/think.component';

import { Component } from '@angular/core';

@Component({
  selector: 'app-create-think',
  templateUrl: './create-think.component.html',
  styleUrls: ['./create-think.component.scss'],
})
export class CreateThinkComponent {
  think: Think = {
    id: '1',
    content: 'Aprendendo angular',
    autor: 'dev',
    model: ModelThink.MODEL1,
  };

  createThink() {
    throw new Error('Method not implemented.');
  }

  cancel() {
    throw new Error('Method not implemented.');
  }
}
