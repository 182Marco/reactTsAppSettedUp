export interface IUser {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  age: number;
  gender: 'male' | 'female' | 'other';
  address: {
    street: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
  };
  phoneNumber: string;
  profilePictureUrl: string;
  createdAt: Date;
  updatedAt: Date;
}
