import { Injectable } from '@nestjs/common';
import { GetUserRequest } from './get-user-request.dto';

@Injectable()
export class AuthService {
  private readonly users = [
    {
      userId: '123',
      stripeUserId: 'abc',
    },
    {
      userId: '456',
      stripeUserId: 'def',
    },
  ];

  getHello(): string {
    return 'Hello World!';
  }

  getUser(getUserRequest: GetUserRequest) {
    return this.users.find((user) => user.userId === getUserRequest.userId);
  }
}
