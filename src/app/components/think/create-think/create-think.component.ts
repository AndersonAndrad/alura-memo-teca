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
    model: '',
  };
}

interface Think {
  id: string;
  content: string;
  model: string;
  autor: string;
}
