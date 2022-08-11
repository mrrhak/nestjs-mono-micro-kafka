import { Inject, Injectable } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { GetUserRequest } from './get-user-request.dto';
import { OrderCreatedEvent } from './order-created-event';

@Injectable()
export class BillingService {
  constructor(
    @Inject('AUTH_SERVICE') private readonly authClient: ClientKafka,
  ) {}

  getHello(): string {
    return 'Hello World!';
  }

  createOrderBilling(orderCreateEvent: OrderCreatedEvent) {
    // console.log(orderCreateEvent);
    this.authClient
      .send('get_user', new GetUserRequest(orderCreateEvent.userId))
      .subscribe((user) => {
        // console.log(user);
        console.log(
          `Billing user with stripe ID: ${user.stripeUserId} a price of $${orderCreateEvent.price}`,
        );
      });
  }
}
