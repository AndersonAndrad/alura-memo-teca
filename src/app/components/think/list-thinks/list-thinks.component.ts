import { Component, OnInit } from '@angular/core';
import { Think } from 'src/app/interfaces/think.interface';

import { ThinkService } from 'src/app/services/think/think.service';

@Component({
  selector: 'app-list-thinks',
  templateUrl: './list-thinks.component.html',
  styleUrls: ['./list-thinks.component.scss'],
})
export class ListThinksComponent implements OnInit {
  constructor(private thinkService: ThinkService) {}

  thinkList: Think[] = [];

  ngOnInit(): void {
    this.loadThinks();
  }

  loadThinks() {
    this.thinkService.listAll().subscribe({
      next: (thinks) => {
        this.thinkList = thinks;
      },
    });
  }
}
