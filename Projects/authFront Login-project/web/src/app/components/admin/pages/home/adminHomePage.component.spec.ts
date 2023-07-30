import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminHomePage } from './adminHomePage.component';

describe('AdminHomePage', () => {
  let component: AdminHomePage;
  let fixture: ComponentFixture<AdminHomePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminHomePage ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
