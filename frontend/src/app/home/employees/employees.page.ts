import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { EmployeesService } from './employees.service';
import { MessageService } from 'primeng/api';
import {ConfirmationService} from 'primeng/api';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.page.html',
  styleUrls: ['./employees.page.scss'],
  providers: [MessageService, ConfirmationService]
})
export class EmployeesPage implements OnInit {
  rows: any = []
  loadingIndicator = false;

  constructor(
    private EmployeesService: EmployeesService,
    private router: Router,
    private messageService: MessageService,
    private confirmationService: ConfirmationService) { }



  ngOnInit() {
    this.getEmployees();
  }

  getEmployees(){
    this.loadingIndicator = true;
    this.EmployeesService.getEmployees().subscribe((res: any) => {
      this.rows = res.data;
      this.loadingIndicator = false;

    })
  }

  editEmployee(row: any){
    console.log(row);
    this.router.navigate(['home/employees/form-employees']);


    this.EmployeesService.dataEmployee = row;
  }

  //Delete method for Employees
  deleteEmployee(id){
    //console.log(id);
    this.confirmDelete(id);
 

  }

  confirmDelete(id) {
    this.confirmationService.confirm({
        header: 'Confirmación',
        icon: 'pi pi-info-circle',
        message: '¿Estas seguro de realizar esta acción?',
        accept: () => {
            //Actual logic to perform a confirmation
            this.EmployeesService.deleteEmployee(id).subscribe((res: any) =>{
              this.deletedMessage();
              this.ngOnInit();
            }, err => {
              this.errorDeleteMessage();
            })
        }
    });
}

  deletedMessage() {
    this.messageService.add({key: 'deletedMessage', severity:'success', summary: 'Mensaje', detail: `Empleado eliminado`});
  }

  errorDeleteMessage() {
    this.messageService.add({key: 'errorDeleteMessage', severity:'error', summary: 'Error', detail: `Empleado no eliminado`});
  }

}
