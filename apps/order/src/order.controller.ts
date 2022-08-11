import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateOrderRequestDto } from './create-order-request.dto';
import { OrderService } from './order.service';

@Controller()
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Get()
  getHello(): string {
    return this.orderService.getHello();
  }

  @Post()
  createOrder(@Body() createOrderRequestDto: CreateOrderRequestDto) {
    return this.orderService.createOrder(createOrderRequestDto);
  }
}
