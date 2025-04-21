import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfirmierListComponent } from './infirmier-list.component';

describe('InfirmierListComponent', () => {
  let component: InfirmierListComponent;
  let fixture: ComponentFixture<InfirmierListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfirmierListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfirmierListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
