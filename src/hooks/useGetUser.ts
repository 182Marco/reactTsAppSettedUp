import { IUser } from '../interfaces';

export const useGetUser = (): IUser => ({
  id: 123,
  username: 'john_doe',
  email: 'john.doe@example.com',
  firstName: 'John',
  lastName: 'Doe',
  age: 30,
  gender: 'male',
  address: {
    street: '123 Main Street',
    city: 'New York',
    state: 'NY',
    postalCode: '10001',
    country: 'USA',
  },
  phoneNumber: '123-456-7890',
  profilePictureUrl: 'https://example.com/profile.jpg',
  createdAt: new Date('2022-01-01'),
  updatedAt: new Date('2022-02-15'),
});
