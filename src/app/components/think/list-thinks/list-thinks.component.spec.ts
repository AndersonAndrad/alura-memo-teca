import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListThinksComponent } from './list-thinks.component';

describe('ListThinksComponent', () => {
  let component: ListThinksComponent;
  let fixture: ComponentFixture<ListThinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListThinksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListThinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
