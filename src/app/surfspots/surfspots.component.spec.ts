import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurfspotsComponent } from './surfspots.component';

describe('SurfspotsComponent', () => {
  let component: SurfspotsComponent;
  let fixture: ComponentFixture<SurfspotsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurfspotsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurfspotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
