import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModelThinking, Thinking } from 'src/app/interfaces/think.interface';

import { ThinkService } from 'src/app/services/think/think.service';
import { clearString } from 'src/app/utils/string.util';

@Component({
  selector: 'app-edit-thinking',
  templateUrl: './edit-thinking.component.html',
  styleUrls: ['./edit-thinking.component.scss'],
})
export class EditThinkingComponent implements OnInit {
  constructor(
    private thinkingService: ThinkService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getThinkingId();
  }

  thinking: Thinking = {
    id: '',
    content: '',
    autor: '',
    model: ModelThinking.DEFAULT,
  };

  updateThinking() {
    if (!clearString(this.thinking.id).length) return;

    const thinking: Omit<Thinking, 'id'> = {
      autor: clearString(this.thinking.autor),
      content: clearString(this.thinking.content),
      model: this.thinking.model,
    };

    this.thinkingService.update(this.thinking.id, thinking).subscribe({
      next: () => this.router.navigateByUrl('/'),
    });
  }

  cancel() {
    this.router.navigateByUrl('/');
  }

  private getThinkingId() {
    const thinkingId = this.activatedRoute.snapshot.paramMap.get('id') || '';

    if (!clearString(thinkingId).length) return;

    this.loadThinking(thinkingId);
  }

  private loadThinking(thinkingId: string) {
    this.thinkingService.getThinkById(thinkingId).subscribe({
      next: (thinking) => (this.thinking = thinking),
      /**
       * @TODO add catch when has any error
       */
      error: () => {},
    });
  }
}
