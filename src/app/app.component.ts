import { Component } from '@angular/core';
import { IMenuItems } from './core/models/menu-items.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Tour of Heros';
  menuItems: IMenuItems[] = [
    {
      icon: 'dashboard',
      link: '/dashboard',
      tooltipText: 'Dashboard',
    },
    {
      icon: 'sports_martial_arts',
      link: '/list',
      tooltipText: 'List of heroes',
    },
  ];
}
