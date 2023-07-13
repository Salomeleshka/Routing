import { Component } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent {
  users = [
    {
      id: 1,
      name: 'John',
    },
    {
      id: 2,
      name: 'Jack',
    },
    {
      id: 3,
      name: 'Joey',
    },
  ];
}
