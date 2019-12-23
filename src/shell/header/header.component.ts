import { Component, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderContComponent implements AfterViewInit {
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {

  }
  ngAfterViewInit(): void {
    this.router.navigate(['index'], { relativeTo: this.activatedRoute });
  }

}
