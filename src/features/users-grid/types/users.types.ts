import type { Gender } from '../constants/users.constants';

export interface UserProps {
  id: number;
  firstName: string;
  lastName: string;
  maidenName: string;
  age: number;
  gender: Gender;
  email: string;
  phone: string;
  username: string;
  birthDate: string;
  bloodGroup: string;
  height: number;
  weight: number;
  eyeColor: string;
  isActive: boolean;
}

export interface UsersResponseProps {
  users: UserProps[];
}
