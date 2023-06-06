import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppModule } from 'src/app/app.module';
import { ConfirmDeleteThinkComponent } from './confirm-delete-think.component';

describe(ConfirmDeleteThinkComponent.name, () => {
  let component: ConfirmDeleteThinkComponent;
  let fixture: ComponentFixture<ConfirmDeleteThinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppModule],
    }).compileComponents();

    fixture = TestBed.createComponent(ConfirmDeleteThinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it(`${ConfirmDeleteThinkComponent.name} should be created`, () => {
    expect(component).toBeTruthy();
  });
});
