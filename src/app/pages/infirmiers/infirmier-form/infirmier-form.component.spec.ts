import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfirmierFormComponent } from './infirmier-form.component';

describe('InfirmierFormComponent', () => {
  let component: InfirmierFormComponent;
  let fixture: ComponentFixture<InfirmierFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfirmierFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfirmierFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
