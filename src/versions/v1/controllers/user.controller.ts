import { Controller, Post, Req } from '@nestjs/common';
import { UserService, UserAttributes } from '../../../common/user/user.service';
import { Request } from 'express';

@Controller('v1/user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('login')
  login(@Req() req: Request) {
    return this.userService.findUser(req.body.email, req.body.password);
  }
}
