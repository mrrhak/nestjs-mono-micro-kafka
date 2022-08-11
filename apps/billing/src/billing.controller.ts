import { Controller, Get, Inject, OnModuleInit } from '@nestjs/common';
import { ClientKafka, EventPattern } from '@nestjs/microservices';
import { BillingService } from './billing.service';

@Controller()
export class BillingController implements OnModuleInit {
  constructor(
    private readonly billingService: BillingService,
    @Inject('AUTH_SERVICE') private readonly authClient: ClientKafka,
  ) {}
  onModuleInit() {
    this.authClient.subscribeToResponseOf('get_user');
  }

  @Get()
  getHello(): string {
    return this.billingService.getHello();
  }

  @EventPattern('order_created')
  async onOrderCreated(data: any) {
    this.billingService.createOrderBilling(data);
  }
}
