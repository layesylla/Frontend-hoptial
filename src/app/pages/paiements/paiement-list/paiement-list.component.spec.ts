import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaiementListComponent } from './paiement-list.component';

describe('PaiementListComponent', () => {
  let component: PaiementListComponent;
  let fixture: ComponentFixture<PaiementListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaiementListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaiementListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
