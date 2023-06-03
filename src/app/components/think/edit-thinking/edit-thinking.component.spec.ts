import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditThinkingComponent } from './edit-thinking.component';

describe('EditThinkingComponent', () => {
  let component: EditThinkingComponent;
  let fixture: ComponentFixture<EditThinkingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditThinkingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditThinkingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
