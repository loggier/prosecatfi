import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PoliticaPrivacidadPage } from './politica-privacidad.page';

describe('PoliticaPrivacidadPage', () => {
  let component: PoliticaPrivacidadPage;
  let fixture: ComponentFixture<PoliticaPrivacidadPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PoliticaPrivacidadPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PoliticaPrivacidadPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
