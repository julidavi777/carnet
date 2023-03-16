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

  constructor(private usersService: UsersService) { }



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


}
