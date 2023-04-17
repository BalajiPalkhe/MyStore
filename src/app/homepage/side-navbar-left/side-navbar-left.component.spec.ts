import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideNavbarLeftComponent } from './side-navbar-left.component';

describe('SideNavbarLeftComponent', () => {
  let component: SideNavbarLeftComponent;
  let fixture: ComponentFixture<SideNavbarLeftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideNavbarLeftComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SideNavbarLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
