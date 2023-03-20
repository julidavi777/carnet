import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RolesService } from '../roles.service';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';
@Component({
  selector: 'app-form-rol',
  templateUrl: './form-rol.page.html',
  styleUrls: ['./form-rol.page.scss'],
  providers: [MessageService]
})
export class FormRolPage implements OnInit {
  permisos = [];
  isEditingData = false;
  isLoadingButtonSave = false;
  permisosPatch = [];

  rolForm: any = new FormGroup({
    name: new FormControl('', [Validators.required]),
  });

  loadingIndicator: boolean = true;

  constructor(
    private rolesService: RolesService,
    private messageService: MessageService,
    private router: Router,
  ) { }

  ngOnInit() {
    if(this.rolesService.roleData){
      console.log(this.rolesService.roleData)
      this.isEditingData = true;
      this.rolForm.patchValue({
        name: this.rolesService.roleData['name']
      })

      this.permisosPatch = this.rolesService.roleData['permissions'].map(e => e.name);
      
    }
    this.getPermissions();
  }

  onSubmit(){

    if(this.selectedPermissions.length == 0){
      alert("Por favor seleccione al menos un permiso para registrar un rol")
      return;
    }
    this.isLoadingButtonSave = true;

    let data = {
      name: this.rolForm.value.name,
      permissions: this.selectedPermissions
    }

    if(!this.isEditingData){
       this.saveNewData(data);
    }


    //UPDATING
    console.log("UPDATING")
    
    this.updateData(data);

  }

  saveNewData(data: any){
    this.rolesService.createRole(data).subscribe((res: any) => {
      this.successMessage();
      this.selectedPermissions = [];
      this.rolForm.reset();
      this.isLoadingButtonSave = false;
      setTimeout(() => {
        this.router.navigate(['home/roles']);
      }, 1000);
    }, (err: any) => {
      this.isLoadingButtonSave = false;
      this.errorMessage();
    });
  }

  updateData(data: any) {
    this.rolesService.updateRole(data, this.rolesService.roleData['id']).subscribe((res: any) => {
      this.successMessage();
      this.selectedPermissions = [];
      this.rolForm.reset();
      this.isLoadingButtonSave = false;
      setTimeout(() => {
        this.router.navigate(['home/roles']);
      }, 1000);
    }, (err: any) => {
      this.isLoadingButtonSave = false;
      this.errorMessage();
    });
  }

  selectedPermissions: any = [];

  handleChange(event: any, row: any) {

    let isChecked = event.target.checked;
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
      if(res.data.length > 0) {
        this.permisos = res.data.map((perm) =>{
          perm['is_enabled'] = false;
          return perm;
        });
        //PATCH PERMISSIONS IF EDITING
        console.log(this.permisosPatch)
        this.selectedPermissions = this.permisosPatch;
        this.pathPermissions(this.permisosPatch);
      }
      this.loadingIndicator = false;

    })
  }

  pathPermissions(permissionsPatch: any){

    this.permisos.map((perm: any) => {
      /* if(perm) */
      if(permissionsPatch.includes(perm.name)){
        perm.is_enabled = true;
      }

      return perm;
    });
  }

  successMessage() {
    this.messageService.add({key: 'successMessage', severity:'success', summary: 'Éxito', detail: `Rol ${this.isEditingData ? 'actualizado': 'registrado'}`});
  }
  errorMessage() {
    this.messageService.add({key: 'errorMessage', severity:'error', summary: 'Error', detail: `Rol no ${this.isEditingData ? 'actualizado': 'registrado'}`});
  }

}
