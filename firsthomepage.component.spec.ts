import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirsthomepageComponent } from './firsthomepage.component';

describe('FirsthomepageComponent', () => {
  let component: FirsthomepageComponent;
  let fixture: ComponentFixture<FirsthomepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirsthomepageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirsthomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
