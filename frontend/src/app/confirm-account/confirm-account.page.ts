import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-confirm-account',
  templateUrl: './confirm-account.page.html',
  styleUrls: ['./confirm-account.page.scss'],
})
export class ConfirmAccountPage implements OnInit {

  public API_URL = environment.baseUrl;

  constructor() { }

  ngOnInit() {
  }

}
