import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RolesService } from './roles.service';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.page.html',
  styleUrls: ['./roles.page.scss'],
})
export class RolesPage implements OnInit {
  rows: any = []
  loadingIndicator = false;

  constructor(
    private rolesService: RolesService,
    private router: Router,
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
}
