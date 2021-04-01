import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastraADMComponent } from './cadastra-adm.component';

describe('CadastraADMComponent', () => {
  let component: CadastraADMComponent;
  let fixture: ComponentFixture<CadastraADMComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastraADMComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastraADMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
