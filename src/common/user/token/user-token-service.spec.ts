import { Test, TestingModule } from '@nestjs/testing';
import { UserTokenService } from './user-token.service';

describe('UserTokenService', () => {
  let app: TestingModule;
  const userTokenService = new UserTokenService();
  const token = userTokenService.createToken();

  beforeAll(async () => {
    app = await Test.createTestingModule({
      providers: [UserTokenService],
    }).compile();
  });

  describe('createToken', () => {
    it('should return {"token": "uOYq7CtzkdIyNbHEYxJsYSBqIF2NSQtP"}', () => {
      expect(token).toBe(token);
    });
  });

});
