import { ModelThink, Think } from 'src/app/interfaces/think.interface';

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ThinkService } from 'src/app/services/think/think.service';

@Component({
  selector: 'app-create-think',
  templateUrl: './create-think.component.html',
  styleUrls: ['./create-think.component.scss'],
})
export class CreateThinkComponent {
  constructor(private thinkService: ThinkService, private router: Router) {}

  think: Omit<Think, 'id'> = {
    content: '',
    autor: '',
    model: ModelThink.DEFAULT,
  };

  createThink() {
    this.thinkService.create(this.think).subscribe({
      next: () => this.router.navigateByUrl('/'),
    });
  }

  cancel() {
    throw new Error('Method not implemented.');
  }
}
