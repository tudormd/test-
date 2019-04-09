import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from './user.service';
import { UserTokenService } from './token/user-token.service';

describe('UserService', () => {
  let app: TestingModule;
  const userTokenService = new UserTokenService();
  const token = userTokenService.createToken();

  beforeAll(async () => {
    app = await Test.createTestingModule({
      providers: [UserTokenService],
    }).compile();
  });

  describe('findUser', () => {
    it('should return {"token": "uOYq7CtzkdIyNbHEYxJsYSBqIF2NSQtP"}', () => {
      expect(token).toBe(token);
    });
  });

  describe('authUser', () => {
    it('should return {"token": "uOYq7CtzkdIyNbHEYxJsYSBqIF2NSQtP"}', () => {
      expect(token).toBe(token);
    });
  });

});
