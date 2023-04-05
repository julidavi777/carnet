import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-form-contacto',
  templateUrl: './form-contacto.component.html',
  styleUrls: ['./form-contacto.component.scss'],
})
export class FormContactoComponent implements OnInit {
  @Input() contact_type_id: number;
  @Input() departamentos_param: any[];
  @Input() patchData: any;

  formContacto: any ;
  municipios: any = [];
  departamentos: any = [];
 
  constructor(
    private commonService: CommonService,
    public modalController: ModalController
  ) { }

  async ngOnInit() {
    this.formContacto = new FormGroup({
      name: new FormControl('', [Validators.required]),
      phone_number: new FormControl('', [Validators.required]),
      telephone_number: new FormControl('', [Validators.required]),
      telephone_number_ext: new FormControl(''),
      email: new FormControl(''),
      departamento_id: new FormControl(''),
      municipio_id: new FormControl(''),
      customers_contact_type_id: new FormControl(this.contact_type_id)
    })
    this.departamentos = this.departamentos_param


    if(this.patchData){

      let municipios: any = await this.commonService.getDepartamentosMunicipios(this.patchData.departamento_id?.id).toPromise();
      this.municipios = municipios.data;
    //PATCH DATA
      let patchDataF = {
        ...this.patchData,
        departamento_id: this.departamentos.filter(d => d.id === this.patchData.departamento_id?.id)[0],
        municipio_id: municipios.data.filter(m => m.id === this.patchData.municipio_id?.id)[0],
      }
      if(this.patchData?.municipio_id){
        this.formContacto.controls['municipio_id'].enable();
      }
      this.formContacto.patchValue(patchDataF)
    }
  }

  dismiss() {
    console.log(this.formContacto.value)
    this.modalController.dismiss({
      'dismissed': true,
      'formValue': this.formContacto.value
    });
  }

  departamentoChange(event, id_modal: number = 0) {
    let municipio_id = event.value.id;

    this.formContacto.controls['municipio_id'].reset()
    this.formContacto.controls['municipio_id'].disable();
   

    /* this.mylookupservice.getResults(event.query).then(data => {
        this.results = data;
    }); */
    this.commonService.getDepartamentosMunicipios(municipio_id).subscribe((res: any) => {
      this.formContacto.controls['municipio_id'].enable();
      this.municipios = res.data;
    });
  }

}
