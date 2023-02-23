import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDojoComponent } from './form-dojo.component';

describe('FormDojoComponent', () => {
  let component: FormDojoComponent;
  let fixture: ComponentFixture<FormDojoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormDojoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormDojoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
