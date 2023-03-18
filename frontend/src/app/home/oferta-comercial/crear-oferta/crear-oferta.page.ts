import { CrearOfertaService } from './crear-oferta.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs';


@Component({
  selector: 'app-crear-oferta',
  templateUrl: './crear-oferta.page.html',
  styleUrls: ['./crear-oferta.page.scss'],
})
export class CrearOfertaPage implements OnInit {
  tipoContratacion = '';
  tipoServicio = '';
  sectorProductivo = '';


    nextSequentialNumber: number = 0;
    isCustomerFound: boolean | null= null;
    registeredSuccessfully: boolean = false;

    usersListResponsable: any = [];

    offersForm: any = new FormGroup({
    sequential_number: new FormControl('', [Validators.required]),
    customer_identification: new FormControl('',),
    name: new FormControl('', [Validators.required]),
    surname: new FormControl('',[Validators.required]),
    assignment_date: new FormControl('',[Validators.required]),
    razon_comercial: new FormControl('', [Validators.required]),
    responsable_id: new FormControl('', [Validators.required]),
    contract_type: new FormControl(''),
    service_type: new FormControl('', [Validators.required]),
    sector_productivo: new FormControl('', [Validators.required]),
    object_description: new FormControl('',[Validators.required]),
    numero: new FormControl('',[Validators.required]),
    cuantia: new FormControl('',),
    location: new FormControl('',),
    release_date: new FormControl('',),
    delivery_date: new FormControl('',),
    visit_date: new FormControl('',),
    observations: new FormControl('',),



    anexos_file_field: new FormControl('',),//SOLO REFERENCIA NO ENVIAR
    anexos: new FormControl('',),


  });

  get sequential_number () { return this.offersForm.get('sequential_number') }
  get customer_identification () { return this.offersForm.get('customer_identification') }

  get name () { return this.offersForm.get('name') }
  get surname () { return this.offersForm.get('surname') }
  get razon_comercial () { return this.offersForm.get('razon_comercial') }


  constructor(
    private crearOfertaService: CrearOfertaService
  ) { }

  ngOnInit() {
    this.getSequentialNumber();
    this.searchIdentificationActions();
    this.getUsers();

  }

  onSubmit(){
    console.log(this.offersForm.value)

    const formData = new FormData();

    formData.append('sequential_number', this.offersForm.get('sequential_number').value);
    formData.append('responsable_id', this.offersForm.get('responsable_id').value);
    formData.append('customer_identification', this.offersForm.get('customer_identification').value);
    formData.append('assignment_date', this.offersForm.get('assignment_date').value);
    formData.append('razon_comercial', this.offersForm.get('razon_comercial').value);
    formData.append('contract_type', this.offersForm.get('contract_type').value);
    formData.append('service_type', this.offersForm.get('service_type').value);
    formData.append('sector_productivo', this.offersForm.get('sector_productivo').value);
    formData.append('object_description', this.offersForm.get('object_description').value);
    formData.append('numero', this.offersForm.get('numero').value);
    formData.append('cuantia', this.offersForm.get('cuantia').value);
    formData.append('location', this.offersForm.get('location').value);
    formData.append('release_date', this.offersForm.get('release_date').value);
    formData.append('delivery_date', this.offersForm.get('delivery_date').value);
    formData.append('visit_date', this.offersForm.get('visit_date').value);
    formData.append('observations', this.offersForm.get('observations').value);
    formData.append('anexos', this.offersForm.get('anexos').value);

    formData.append('file', this.offersForm.get('anexos').value);

    this.crearOfertaService.saveOffer(formData).subscribe((res: any) => {
        console.log(res);
        this.registeredSuccessfully = true;
    },err => {
      alert("Error al registrar")
    });
  }

  getSequentialNumber(){
    this.crearOfertaService.getSequentialNumber().subscribe((res: any) => {
      this.nextSequentialNumber = res.data;
      this.sequential_number.setValue(this.nextSequentialNumber);
    })
  }

  searchIdentificationActions(){
    this.customer_identification.valueChanges.pipe(
      debounceTime(370)
    ).subscribe((res: any) => {
      this.isCustomerFound = null;
      console.log({res})
      /* if(res.length > 0){
        this.showCancelButton = true;
      }
      this.loadingIndicator = true; */
      this.crearOfertaService.searchFilterByIdentification(res).subscribe((resFilter: any) => {
        console.log(resFilter.data)
        if(resFilter.data.length == 0){
          this.isCustomerFound = false;
        }else{
          this.isCustomerFound = true;
          this.name.setValue(resFilter.data.name);
          this.surname.setValue(resFilter.data.surname)
          this.razon_comercial.setValue(resFilter.data.razon_comercial)
        }
        //this.rows = resFilter.data;
        //this.loadingIndicator = false;
      })
    });
  }

  getUsers(){
    this.crearOfertaService.getUsers().subscribe((res: any) => {
      this.usersListResponsable = res.data;
    });
  }


  onFileChange(event: any, name_field: string){
    if(name_field == "anexos_file_field" ){
      if (event.target.files.length > 0) {
        const file = event.target.files[0];
        this.offersForm.patchValue({
          anexos: file
        });
      }
    }
  }

}
