import { Component, OnInit } from '@angular/core';

import { User } from '../../models/User';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  // Its also possible to do it like this:
  // template: '<h2>Philip Andes</h2>'
  // styles: [`
  //   h2 {
  //     color: blue
  //   }
  // `]
})

export class UserComponent implements OnInit {
  /////////////////////////Properties & Methods//////////////////////////
  // Define properties inside the class here:
  // firstName = 'Philip';
  // lastName = 'Andes';
  // age = 30;

  // Lets add an object:
  // address = {
  //   street: '50 Main st',
  //   city: 'Boston',
  //   state: 'MA'
  // };

  // We can also define methods:
  // constructor() {
  //   this.sayHello(); // Hello Philip
  //   console.log(this.age); // 30
  //   this.hasBirthday();
  //   console.log(this.age); // 31
  // }

  // Or our own methods:
  // sayHello() {
  //   console.log(`Hello ${this.firstName}`);
  // }

  // hasBirthday() {
  //   this.age += 1;
  // }

  /////////////////////////Using Types////////////////////////////////

  // Now lets use typescript:
  // firstName: string;
  // lastName: string;
  // age: number;
  // address;

  // // Other types:
  // // any means it can be anything, so a string, number, boolean etc
  // foo: any;
  // hasKids: boolean;
  // numberArray: number[];
  // stringArray: string[];
  // mixedArray: any[];
  // myTuple: [string, number, boolean]; // must be a string first, then number then a boolean, after that is doesnt matter
  // unusuable: void;
  // u: undefined;
  // n: null;

  // constructor() {
  //   this.firstName = 'Philip';
  //   this.lastName = 'Andes';
  //   this.age = 30;

  //   this.address = {
  //     street: '50 Main st',
  //     city: 'Boston',
  //     state: 'MA'
  //   }  

  //   console.log(this.addNumbers(2, 3)); // 5
  // }

  // // We can also add types to function parameters and what it returns:
  // addNumbers(num1: number, num2: number): number {
  //   return num1 + num2;
  // }

  /////////////////////////Cleanup Interfaces////////////////////////////

//   // Property
//   user: User;

//   // Methods
//   constructor() {
//     this.user = {
//       firstName: 'Philip',
//       lastName: 'Andes',
//       age: 30,
//       address: {
//         street: '50 Main st',
//         city: 'Boston',
//         state: 'MA'
//       }
//     }
//   }
// }

// So if we would use this in other files, we would create a new folder called models in the app folder, and any interfaces or model classes we put in there

// interface User {
//   firstName: string,
//   lastName: string,
//   age: number,
//   address: {
//     street: string,
//     city: string,
//     state: string
//   }
// }

// Notice that we also have to bring the new created file in here on top: import { User } from '../../models/User';


///////////////////////// ngOnInit //////////////////////////////////
  // Property
  user: User;

  // Methods
  constructor() {
  }

  ngOnInit() {
    this.user = {
      firstName: 'Philip',
      lastName: 'Andes',
      age: 30,
      address: {
        street: '50 Main st',
        city: 'Boston',
        state: 'MA'
      }
    }
  }
}
