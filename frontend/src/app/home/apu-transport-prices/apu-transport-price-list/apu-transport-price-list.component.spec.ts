import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ApuTransportPriceListComponent } from './apu-transport-price-list.component';

describe('ApuTransportPriceListComponent', () => {
  let component: ApuTransportPriceListComponent;
  let fixture: ComponentFixture<ApuTransportPriceListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ApuTransportPriceListComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ApuTransportPriceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
