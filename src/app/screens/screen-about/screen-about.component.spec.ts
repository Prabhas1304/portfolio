import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenAboutComponent } from './screen-about.component';

describe('ScreenAboutComponent', () => {
  let component: ScreenAboutComponent;
  let fixture: ComponentFixture<ScreenAboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScreenAboutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScreenAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
