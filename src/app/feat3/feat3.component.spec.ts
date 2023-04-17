import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Feat3Component } from './feat3.component';

describe('Feat3Component', () => {
  let component: Feat3Component;
  let fixture: ComponentFixture<Feat3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Feat3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Feat3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
