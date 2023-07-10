import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ApuLaborPriceFormComponent } from './apu-labor-price-form.component';

describe('ApuLaborPriceFormComponent', () => {
  let component: ApuLaborPriceFormComponent;
  let fixture: ComponentFixture<ApuLaborPriceFormComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ApuLaborPriceFormComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ApuLaborPriceFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
