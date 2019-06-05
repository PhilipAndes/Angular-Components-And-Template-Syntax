export interface User {
  firstName: string, // We can use a ? to make it optional
  lastName: string,
  age?: number,
  address?: {
    street?: string,
    city?: string,
    state?: string
  },
  image?: string
}

