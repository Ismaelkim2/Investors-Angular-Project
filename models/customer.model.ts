export class Customer {
    id: number;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    password: string;
    category: string;
  
    constructor() {
      this.id = 0; // Or null, depending on how your backend handles it
      this.firstName = '';
      this.lastName = '';
      this.phoneNumber = '';
      this.password = '';
      this.category = '';
    }
  }
  