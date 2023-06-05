import { Component, Input } from '@angular/core';
import { ModelThinking, Thinking } from 'src/app/interfaces/think.interface';

import { Router } from '@angular/router';

@Component({
  selector: 'app-think',
  templateUrl: './think.component.html',
  styleUrls: ['./think.component.scss'],
})
export class ThinkComponent {
  @Input() think: Thinking = {
    id: '',
    content: '',
    autor: '',
    model: ModelThinking.MODEL1,
  };

  constructor(private router: Router) {}

  getClassWidthThink(): string {
    let widthThink: string = 'p';

    if (this.think.content.length > 256) widthThink = 'g';

    return `pensamento-${widthThink}`;
  }

  navigateToDeleteThink() {
    const router = `/pensamentos/excluir-pensamentos/${this.think.id}`;
    this.router.navigateByUrl(router);
  }

  navigateToEditThinking() {
    const router = `/pensamentos/editar-pensamentos/${this.think.id}`;
    this.router.navigateByUrl(router);
  }
}
