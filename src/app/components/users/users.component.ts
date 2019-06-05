import { Component, OnInit } from '@angular/core';

import { User } from '../../models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  // This comes from the map models were we created User
  users: User[];

  // Lets create a var for the ngIF:
  // On false you notice that the extended information is not longer shown
  showExtended: boolean = true;

  //  If you would get users from like a http request you would have a loaded option:
  // Change to false to see Loading Users message 
  loaded: boolean = false;

  constructor() { }

  ngOnInit() {
    // Set a timeout for the users to load
    // setTimeout(() => {
    //   this.users = [
    //     {
    //       firstName: 'Philip',
    //       lastName: 'Andes',
    //       age: 30,
    //       address: {
    //         street: '50 Main st',
    //         city: 'Boston',
    //         state: 'MA'
    //       }
    //     },
    //     {
    //       firstName: 'John',
    //       lastName: 'Doe',
    //       age: 34,
    //       address: {
    //         street: '20 School st',
    //         city: 'Lynn',
    //         state: 'MA'
    //       }
    //     },
    //     {
    //       firstName: 'Karen',
    //       lastName: 'Williams',
    //       age: 26,
    //       address: {
    //         street: '55 Mill st',
    //         city: 'Miami',
    //         state: 'FL'
    //       }
    //     }
    //   ];

    //   this.loaded = true;
    // }, 2000);

    // Array of user objects:
    this.users = [
      {
        firstName: 'Philip',
        lastName: 'Andes',
        age: 30,
        address: {
          street: '50 Main st',
          city: 'Boston',
          state: 'MA'
        }
      },
      {
        firstName: 'John',
        lastName: 'Doe',
        age: 34,
        address: {
          street: '20 School st',
          city: 'Lynn',
          state: 'MA'
        }
      },
      {
        firstName: 'Karen',
        lastName: 'Williams',
        age: 26,
        address: {
          street: '55 Mill st',
          city: 'Miami',
          state: 'FL'
        }
      }
    ];

    this.loaded = true;

    this.addUser({
      firstName: 'David',
      lastName: 'Jackson'
    });
  }

  addUser(user: User) {
    this.users.push(user);
  }

}
