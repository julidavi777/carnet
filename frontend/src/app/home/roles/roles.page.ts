import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RolesService } from './roles.service';
import {ConfirmationService} from 'primeng/api';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.page.html',
  styleUrls: ['./roles.page.scss'],
  providers: [ConfirmationService]
})
export class RolesPage implements OnInit {
  rows: any = []
  loadingIndicator = false;

  constructor(
    private rolesService: RolesService,
    private router: Router,
    private confirmationService: ConfirmationService
  ) { }

  ngOnInit() {
    this.getRoles();
  }

  getRoles(){
    this.loadingIndicator = true;
    this.rolesService.getRoles().subscribe((res: any) => {
      this.rows = res.data;
      this.loadingIndicator = false;

    })
  }

  editRole(row: any){
    this.rolesService.roleData = row;
    
    this.router.navigate(['home/roles/form-rol']);
  }


  confirmDelete(id) {
    this.confirmationService.confirm({
        header: 'Confirmación',
        icon: 'pi pi-info-circle',
        message: '¿Estas seguro de realizar esta acción?',
        accept: () => {
            //Actual logic to perform a confirmation
            this.deleteRol(id)
        }
    });
  }

  deleteRol(role_id){
    console.log(role_id);
    this.rolesService.deleteRole(role_id).subscribe(res => {
      alert("Rol eliminado")
      this.ngOnInit();
    }, err => {
      console.log(err)
      if(err.status === 422 && err.error.message === "The are users with this role assigned" ){
        let usersStr = err.error.usersFound.map(user => `${user.name} ${user.surname} \n`);
        alert("No se puede eliminar el rol ya que los siguientes usuarios lo tienen asignado \n"+usersStr )

      }
    })
    
  }
}
