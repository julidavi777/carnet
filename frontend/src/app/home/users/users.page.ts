import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { UsersService } from './users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.scss'],
})
export class UsersPage implements OnInit {
  rows: any = []
  loadingIndicator = false;

  constructor(
    private usersService: UsersService,
    private router: Router) { }



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


}
