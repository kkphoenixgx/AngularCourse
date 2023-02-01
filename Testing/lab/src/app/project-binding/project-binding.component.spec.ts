import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectBindingComponent } from './project-binding.component';

describe('ProjectBindingComponent', () => {
  let component: ProjectBindingComponent;
  let fixture: ComponentFixture<ProjectBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectBindingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
