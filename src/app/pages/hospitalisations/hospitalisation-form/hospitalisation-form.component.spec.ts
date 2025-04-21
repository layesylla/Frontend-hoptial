import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitalisationFormComponent } from './hospitalisation-form.component';

describe('HospitalisationFormComponent', () => {
  let component: HospitalisationFormComponent;
  let fixture: ComponentFixture<HospitalisationFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HospitalisationFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HospitalisationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
