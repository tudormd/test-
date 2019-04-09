import { Injectable } from '@nestjs/common';
import * as  randomstring from 'randomstring';

@Injectable()
export class UserTokenService {
  createToken() {
    return { token: randomstring.generate() };
  }
}
