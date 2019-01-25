import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurfmapComponent } from './surfmap.component';

describe('SurfmapComponent', () => {
  let component: SurfmapComponent;
  let fixture: ComponentFixture<SurfmapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurfmapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurfmapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
