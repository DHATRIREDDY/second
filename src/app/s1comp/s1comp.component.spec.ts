import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { S1compComponent } from './s1comp.component';

describe('S1compComponent', () => {
  let component: S1compComponent;
  let fixture: ComponentFixture<S1compComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S1compComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(S1compComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
