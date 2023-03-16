import {model, property} from '@loopback/repository';
import {User} from '@loopback/authentication-jwt';

@model()
export class NewUserRequest extends User {
  @property({
    type: 'string',
    required: true,
  })
  password: string;
}

export { User };