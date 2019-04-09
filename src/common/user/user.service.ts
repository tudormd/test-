import { Injectable } from '@nestjs/common';
import { User } from './user';
import { UserTokenService } from './token/user-token.service';
import { throwError } from 'rxjs';

export interface UserAttributes {
  email: string;
  password: string;
}

@Injectable()
export class UserService {
  private users = [
    new User('admin@admin.ru', '12345678'),
    new User('user@user.ru', '87654321'),
  ];
  constructor(private readonly userTokenService: UserTokenService) {}

  findUser(email: string, password: string) {
    const user = this.users.filter(_ => _.email === email)[0];
    return user ? this.authUser(user, password) : throwError({ statusCode: 404, error: 'Not Found User' });
  }

  authUser(user: UserAttributes, password: string) {
    if (user.password === password) {
      return this.userTokenService.createToken();
    } else {
      return throwError({ statusCode: 401, error: 'Unauthorized' });
    }
  }
}
