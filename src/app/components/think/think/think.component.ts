import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-think',
  templateUrl: './think.component.html',
  styleUrls: ['./think.component.scss'],
})
export class ThinkComponent {
  @Input() think: Think = {
    id: '',
    content: '',
    autor: '',
    model: ModelThink.MODEL1,
  };

  getClassWidthThink(): string {
    let widthThink: string = 'p';

    if (this.think.content.length > 256) widthThink = 'g';

    return `pensamento-${widthThink}`;
  }
}
export interface Think {
  id: string;
  content: string;
  model: ModelThink;
  autor: string;
}

export enum ModelThink {
  MODEL1 = 'modelo1',
  MODEL2 = 'modelo3',
  MODEL3 = 'modelo2',
}
