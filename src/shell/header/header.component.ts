import { Component, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderContComponent implements AfterViewInit {

  menuList = [{
    "id": 1,
    "name": "spend"
  },
  {
    "id": 2,
    "name": "Sourcing"
  },
  {
    "id": 3,
    "name": "Purchasing"
  }, {
    "id": 4,
    "name": "Invoice"
  }, {
    "id": 5,
    "name": "Supplier"
  }, {
    "id": 6,
    "name": "contract"
  }
  ]

  notifyList = [{
    "id": 1,
    "iconName": "#icon_Cart"
  },
  {
    "id": 2,
    "iconName": "#icon_Annoucement"
  }]

  vMenuList = [{
    "id": 1,
    "menu": "Create",
    "iconName": "#icon_Plus"
  },
  {
    "id": 2,
    "menu": "Manage",
    "iconName": "#icon_manageItems"
  }]

  isActive = false;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {

  }
  ngAfterViewInit(): void {
    this.router.navigate(['index'], { relativeTo: this.activatedRoute });
  }

}
