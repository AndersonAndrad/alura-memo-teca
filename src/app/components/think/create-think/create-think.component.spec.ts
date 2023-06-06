import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppModule } from 'src/app/app.module';
import { CreateThinkComponent } from './create-think.component';

describe(`${CreateThinkComponent.name}`, () => {
  let component: CreateThinkComponent;
  let fixture: ComponentFixture<CreateThinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppModule],
    }).compileComponents();

    fixture = TestBed.createComponent(CreateThinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it(`${CreateThinkComponent.name} should be created`, () => {
    expect(component).toBeTruthy();
  });
});
