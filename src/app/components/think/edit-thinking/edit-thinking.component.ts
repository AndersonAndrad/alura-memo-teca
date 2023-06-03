import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModelThink, Think } from 'src/app/interfaces/think.interface';

import { ThinkService } from 'src/app/services/think/think.service';
import { clearString } from 'src/app/utils/string.util';

@Component({
  selector: 'app-edit-thinking',
  templateUrl: './edit-thinking.component.html',
  styleUrls: ['./edit-thinking.component.scss'],
})
export class EditThinkingComponent implements OnInit {
  constructor(
    private thinkService: ThinkService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getThinkingId();
  }

  think: Think = {
    id: '',
    content: '',
    autor: '',
    model: ModelThink.DEFAULT,
  };

  updateThink() {
    if (!clearString(this.think.id).length) return;

    const think: Omit<Think, 'id'> = {
      autor: clearString(this.think.autor),
      content: clearString(this.think.content),
      model: this.think.model,
    };

    this.thinkService.update(this.think.id, think).subscribe({
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
    this.thinkService.getThinkById(thinkingId).subscribe({
      next: (thinking) => (this.think = thinking),
      /**
       * @TODO add catch when has any error
       */
      error: () => {},
    });
  }
}
