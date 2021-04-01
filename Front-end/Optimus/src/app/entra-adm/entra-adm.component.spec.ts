import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntraADMComponent } from './entra-adm.component';

describe('EntraADMComponent', () => {
  let component: EntraADMComponent;
  let fixture: ComponentFixture<EntraADMComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntraADMComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntraADMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
