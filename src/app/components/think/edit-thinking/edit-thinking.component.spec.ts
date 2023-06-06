import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppModule } from 'src/app/app.module';
import { EditThinkingComponent } from './edit-thinking.component';

describe(EditThinkingComponent.name, () => {
  let component: EditThinkingComponent;
  let fixture: ComponentFixture<EditThinkingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppModule],
    }).compileComponents();

    fixture = TestBed.createComponent(EditThinkingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it(`${EditThinkingComponent.name} should be created`, () => {
    expect(component).toBeTruthy();
  });
});
