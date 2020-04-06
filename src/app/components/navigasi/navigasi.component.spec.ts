import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigasiComponent } from './navigasi.component';

describe('NavigasiComponent', () => {
  let component: NavigasiComponent;
  let fixture: ComponentFixture<NavigasiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavigasiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigasiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
