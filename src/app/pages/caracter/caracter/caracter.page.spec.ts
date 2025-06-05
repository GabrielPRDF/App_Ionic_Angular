import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CaracterPage } from './caracter.page';

describe('CaracterPage', () => {
  let component: CaracterPage;
  let fixture: ComponentFixture<CaracterPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CaracterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
