import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import {AbountPage} from './abount.page';

describe('AbountPage', () => {
  let component: AbountPage;
  let fixture: ComponentFixture<AbountPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AbountPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AbountPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
