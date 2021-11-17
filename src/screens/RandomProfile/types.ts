export interface UserResponse {
  results: [User];
}

export interface User {
  id: number;
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
  dob: {
    date: string;
    age: number;
  };
  name: {
    title: string;
    first: string;
    last: string;
  };
  gender: string;
  email: string;
  phone: string;
  address?: string;
  location: {
    street: string;
    city: string;
    state: string;
    postcode: string;
  };
  workTime?: number;
  company?: string;
  about?: string;
  formattedDate: string;
}
