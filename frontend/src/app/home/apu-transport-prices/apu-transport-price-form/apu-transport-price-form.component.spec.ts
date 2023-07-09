import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ApuTransportPriceFormComponent } from './apu-transport-price-form.component';

describe('ApuTransportPriceFormComponent', () => {
  let component: ApuTransportPriceFormComponent;
  let fixture: ComponentFixture<ApuTransportPriceFormComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ApuTransportPriceFormComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ApuTransportPriceFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
