export interface User {
  firstName: string, // We can use a ? to make it optional
  lastName: string,
  age?: number,
  address?: {
    street?: string,
    city?: string,
    state?: string
  },
  image?: string,
  // Is active as for example a user that hasn't been active for 30days or is active for 30days etc
  isActive?: boolean,
  
  balance?: number,
  registered?: any
}

