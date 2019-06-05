export interface User {
  firstName: string,
  lastName: string,
  age?: number,
  address?: {
    street?: string,
    city?: string,
    state?: string
  }
}

// We can use a ? to make it optional