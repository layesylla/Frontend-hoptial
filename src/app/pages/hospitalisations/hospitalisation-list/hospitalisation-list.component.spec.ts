import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitalisationListComponent } from './hospitalisation-list.component';

describe('HospitalisationListComponent', () => {
  let component: HospitalisationListComponent;
  let fixture: ComponentFixture<HospitalisationListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HospitalisationListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HospitalisationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
