import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RolesService } from '../roles.service';
import { MessageService } from 'primeng/api';
@Component({
  selector: 'app-form-rol',
  templateUrl: './form-rol.page.html',
  styleUrls: ['./form-rol.page.scss'],
  providers: [MessageService]
})
export class FormRolPage implements OnInit {
  permisos = [];


  rolForm: any = new FormGroup({
    name: new FormControl('', [Validators.required]),
  });

  loadingIndicator: boolean = true;

  constructor(
    private rolesService: RolesService,
    private messageService: MessageService,
  ) { }

  ngOnInit() {
    this.getPermissions();
  }

  onSubmit(){
    console.log(this.rolForm.value.name)
    if(this.selectedPermissions.length == 0){
      alert("Por favor seleccione al menos un permiso para registrar un rol")
    }

    let data = {
      name: this.rolForm.value.name,
      permissions: this.selectedPermissions
    }
    console.log(data)
    this.rolesService.createRole(data).subscribe((res: any) => {
        this.showBottomCenter();
        this.selectedPermissions = [];
        this.rolForm.reset();
    }, (err: any) => {
      alert("Error al registrar");
    });
  }

  selectedPermissions: any = [];

  handleChange(e: any, row: any) {
    let isChecked = e.checked;
    if(isChecked){
      this.addPermissionToArr(row.name);
      console.log(this.selectedPermissions);
      return;
    }
    //REMOVE PERMISSION
    let res = this.selectedPermissions.filter( (e: any) => e !== row.name);
    this.selectedPermissions = res;
 
    console.log(this.selectedPermissions);
  }

  addPermissionToArr(name_permission: any){
    if(this.selectedPermissions.indexOf(name_permission) == -1){
      this.selectedPermissions.push(name_permission);
    }
  }

  getPermissions(){
    this.loadingIndicator = true;
    this.rolesService.getPermissions().subscribe((res: any) => {
      this.permisos = res.data;
      this.loadingIndicator = false;

    })
  }
  showBottomCenter() {
    this.messageService.add({key: 'bc', severity:'success', summary: 'Éxito', detail: 'Rol registrado'});
  }

}
