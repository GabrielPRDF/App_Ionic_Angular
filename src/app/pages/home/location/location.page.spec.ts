import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LocationPage } from './location.page';

describe('Tab2Page', () => {
  let component: LocationPage;
  let fixture: ComponentFixture<LocationPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LocationPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LocationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
