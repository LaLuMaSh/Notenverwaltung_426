import {Subject} from './Subject';
import {User} from './User';

export class Exam {
  id: number;
  grade: number;
  weight: number;
  subject: Subject;
  user: User;
}
