import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { CharacterPage } from './character.page';
import { HomePageRoutingModule } from '../home-routing.module';

describe('CharacterPage', () => {
  let component: CharacterPage;
  let fixture: ComponentFixture<CharacterPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CharacterPage],
      imports: [IonicModule.forRoot(), HomePageRoutingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(CharacterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
