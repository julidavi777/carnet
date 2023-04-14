import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { UsersService } from './users.service';
import { MessageService } from 'primeng/api';
import {ConfirmationService} from 'primeng/api';

@Component({
  selector: 'app-users',
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.scss'],
  providers: [MessageService, ConfirmationService]
})
export class UsersPage implements OnInit {
  rows: any = []
  loadingIndicator = false;

  constructor(
    private usersService: UsersService,
    private router: Router,
    private messageService: MessageService,
    private confirmationService: ConfirmationService) { }



  ngOnInit() {
    this.getUsers();
  }

  getUsers(){
    this.loadingIndicator = true;
    this.usersService.getUsers().subscribe((res: any) => {
      this.rows = res.data;
      this.loadingIndicator = false;

    })
  }

  editUser(row: any){
    this.router.navigate(['home/users/form-user']);

    //ADD ROLE ID
    if(row['roles'].length > 0){
      row['role_id'] = row['roles'][0]['id'];
    }
    console.log(row);
    this.usersService.dataUser = row;
  }

  deleteUser(id){
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
            this.usersService.deleteUser(id).subscribe((res: any) =>{
              this.deletedMessage();
              this.ngOnInit();
            }, err => {
              this.errorDeleteMessage();
            })
        }
    });
}

  deletedMessage() {
    this.messageService.add({key: 'deletedMessage', severity:'success', summary: 'Mensaje', detail: `Usuario eliminado`});
  }

  errorDeleteMessage() {
    this.messageService.add({key: 'errorDeleteMessage', severity:'error', summary: 'Error', detail: `Usuario no eliminado`});
  }

}
