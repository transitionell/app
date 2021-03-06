import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MindMapComponent } from './mind-map.component';

describe('MindMapComponent', () => {
  let component: MindMapComponent;
  let fixture: ComponentFixture<MindMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MindMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MindMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
