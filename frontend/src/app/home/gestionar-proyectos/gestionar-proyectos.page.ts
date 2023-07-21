import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-gestionar-proyectos',
  templateUrl: './gestionar-proyectos.page.html',
  styleUrls: ['./gestionar-proyectos.page.scss'],
})
export class GestionarProyectosPage implements OnInit {

  commercial_offer_id: string = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
  
  ) { }

  ngOnInit() {

    this.route.queryParams.subscribe(params => {
      this.commercial_offer_id = params['id'];
      if(!this.commercial_offer_id){
        this.router.navigate(['/home/cotizaciones']);
      }
    });

    
  }

}
