import { Component, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderContComponent implements AfterViewInit {
  isAvtar: boolean = false;

  menuList = [{
    "id": 1,
    "name": "spend",
    "isActive": false
  },
  {
    "id": 2,
    "name": "Sourcing",
    "isActive": false
  },
  {
    "id": 3,
    "name": "Purchasing",
    "isActive": true
  }, {
    "id": 4,
    "name": "Invoice",
    "isActive": false
  }, {
    "id": 5,
    "name": "Supplier",
    "isActive": false
  }, {
    "id": 6,
    "name": "contract",
    "isActive": false
  }]

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
