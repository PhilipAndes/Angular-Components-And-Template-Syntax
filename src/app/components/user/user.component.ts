import { Component } from '@angular/core';

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

export class UserComponent {
  // Define properties inside the class here:
  firstName = 'Philip';
  lastName = 'Andes';
  age = 30;

  // Lets add an object:
  address = {
    street: '50 Main st',
    city: 'Boston',
    state: 'MA'
  };

  // We can also define methods:
  constructor() {
    // this.sayHello(); // Hello Philip
    // console.log(this.age); // 30
    // this.hasBirthday();
    // console.log(this.age); // 31
  }

  // Or our own methods:
  // sayHello() {
  //   console.log(`Hello ${this.firstName}`);
  // }

  // hasBirthday() {
  //   this.age += 1;
  // }
}
