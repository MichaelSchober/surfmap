import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurfspotDetailComponent } from './surfspot-detail.component';

describe('SufspotDetailComponent', () => {
  let component: SurfspotDetailComponent;
  let fixture: ComponentFixture<SurfspotDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurfspotDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurfspotDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
