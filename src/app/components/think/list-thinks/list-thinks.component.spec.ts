import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppModule } from 'src/app/app.module';
import { ListThinksComponent } from './list-thinks.component';

describe(ListThinksComponent.name, () => {
  let component: ListThinksComponent;
  let fixture: ComponentFixture<ListThinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppModule],
    }).compileComponents();

    fixture = TestBed.createComponent(ListThinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it(`${ListThinksComponent.name} should be created`, () => {
    expect(component).toBeTruthy();
  });
});
