import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { BillingModule } from './billing.module';

// async function bootstrap() {
//   const app = await NestFactory.create(BillingModule);
//   await app.listen(3003);
// }
// bootstrap();

// async function bootstrap() {
//   const app = await NestFactory.create(BillingModule);
//   const rmqService = app.get<RmqService>(RmqService);
//   app.connectMicroservice(rmqService.getOptions('BILLING'));
//   await app.startAllMicroservices();
// }
// bootstrap();

async function bootstrap() {
  const app = await NestFactory.createMicroservice(BillingModule, {
    transport: Transport.KAFKA,
    options: {
      client: {
        brokers: ['kafka:9092'],
      },
      consumer: {
        groupId: 'billing-consumer',
      },
    },
  });

  app.listen();
}
bootstrap();
