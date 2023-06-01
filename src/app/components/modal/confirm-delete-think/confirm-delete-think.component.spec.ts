import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmDeleteThinkComponent } from './confirm-delete-think.component';

describe('ConfirmDeleteThinkComponent', () => {
  let component: ConfirmDeleteThinkComponent;
  let fixture: ComponentFixture<ConfirmDeleteThinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmDeleteThinkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfirmDeleteThinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
