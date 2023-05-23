import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-apu',
  templateUrl: './apu.page.html',
  styleUrls: ['./apu.page.scss'],
})
export class ApuPage implements OnInit {
  rows =[
    {
      "name": "PRELIMINARES",
      "gender": "female",
      "company": "Johnson, Johnson and Partners, LLC CMP DDC",
      "age": 22,
      "treeStatus": "collapsed"
    },
    {
      "name": "EXCAVACIONES Y RELLENOS",
      "gender": "female",
      "company": "Sealoud",
      "age": 55,
      "treeStatus": "collapsed"
    },
    {
      "name": "CIMENTACIÓN",
      "gender": "female",
      "company": "Velity",
      "age": 67,
      "treeStatus": "collapsed"
    },
    {
      "cod": "798",
      "name": "subcontrato",
      "type": "ms",
      "un": "dd",
      "cant": "0.2500",
      "unitario": "51000",
      "total": "12800",
      "manager": "PRELIMINARES",
      "treeStatus": "disabled"
    },
    {
      "cod": "599",
      "name": "montacargas 3.5 tn",
      "type": "Equ",
      "un": "hh",
      "cant": "0.1000",
      "unitario": "51000",
      "total": "51000",
      "manager": "PRELIMINARES",
      "treeStatus": "disabled"
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  onTreeAction(event: any) {
    const index = event.rowIndex;
    const row = event.row;
    if (row.treeStatus === 'collapsed') {
      row.treeStatus = 'expanded';
    } else {
      row.treeStatus = 'collapsed';
    }
    this.rows = [...this.rows];
  }

}
