import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotjarComponent } from './hotjar.component';

describe('HotjarComponent', () => {
  let component: HotjarComponent;
  let fixture: ComponentFixture<HotjarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotjarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotjarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
