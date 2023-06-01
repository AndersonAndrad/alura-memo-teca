import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModelThink, Think } from 'src/app/interfaces/think.interface';

import { ThinkService } from 'src/app/services/think/think.service';

@Component({
  selector: 'app-confirm-delete-think',
  templateUrl: './confirm-delete-think.component.html',
  styleUrls: ['./confirm-delete-think.component.scss'],
})
export class ConfirmDeleteThinkComponent implements OnInit {
  think: Think = {
    id: '',
    autor: '',
    content: '',
    model: ModelThink.DEFAULT,
  };

  constructor(
    private thinkService: ThinkService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getIdToThink();
  }

  /**
   * @params thinkId
   */
  getThinkById(thinkId: string): void {
    this.thinkService.getThinkById(thinkId).subscribe({
      next: (think) => (this.think = think),
      /**
       * @TODO includes catch to error
       */
    });
  }

  deleteThink(): void {
    const { id } = this.think;

    if (!id.trim().length) return;

    this.thinkService.delete(id).subscribe({
      next: () => this.router.navigateByUrl('/'),
      /**
       * @TODO includes catch to error
       */
    });
  }

  cancel(): void {
    this.router.navigateByUrl('/');
  }

  private getIdToThink(): void {
    const thinkId: string =
      String(this.activatedRoute.snapshot.paramMap.get('id')) || '';

    if (thinkId.trim().length) this.getThinkById(thinkId);
  }
}
