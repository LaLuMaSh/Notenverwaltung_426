import {Permission} from './Permission';

export class User {
  id: number;
  username: string;
  password: string;
  permissions: Permission[];
}
