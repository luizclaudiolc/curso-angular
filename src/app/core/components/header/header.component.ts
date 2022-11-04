import { Component, Input, OnInit } from '@angular/core';

import { IMenuItems } from '../../models/menu-items.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input('elevation') elevation?: 'z2' | 'z8'
  @Input('title') title: string = '';
  @Input('menu-items') menuItems: IMenuItems[] = [];

  constructor() { }

  ngOnInit(): void {
    console.log(this.menuItems);
  }

}
