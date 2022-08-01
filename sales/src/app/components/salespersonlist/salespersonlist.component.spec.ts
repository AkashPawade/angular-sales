import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalespersonlistComponent } from './salespersonlist.component';

describe('SalespersonlistComponent', () => {
  let component: SalespersonlistComponent;
  let fixture: ComponentFixture<SalespersonlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalespersonlistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalespersonlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
