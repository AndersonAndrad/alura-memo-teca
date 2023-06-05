import { ModelThinking, Thinking } from 'src/app/interfaces/think.interface';

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ThinkService } from 'src/app/services/think/think.service';
import { clearString } from 'src/app/utils/string.util';

@Component({
  selector: 'app-create-think',
  templateUrl: './create-think.component.html',
  styleUrls: ['./create-think.component.scss'],
})
export class CreateThinkComponent {
  constructor(private thinkService: ThinkService, private router: Router) {}

  thinking: Omit<Thinking, 'id'> = {
    content: '',
    autor: '',
    model: ModelThinking.DEFAULT,
  };

  createThinking() {
    const thinking: Omit<Thinking, 'id'> = {
      autor: clearString(this.thinking.autor),
      content: clearString(this.thinking.content),
      model: this.thinking.model,
    };

    this.thinkService.create(thinking).subscribe({
      next: () => this.router.navigateByUrl('/'),
    });
  }

  cancel() {
    this.router.navigateByUrl('/');
  }
}
