import { Body, Param, Controller, Get, Post } from '@nestjs/common';
import { StripeService } from './stripe.service';
// import { CreateCustomerDto } from './dto/create-customer-dto';
import { ApiOperation } from '@nestjs/swagger'


@Controller('stripe')
export class StripeController {
  constructor(private stripeService: StripeService) {}

  @Get('products')
  async getProducts() {
    return await this.stripeService.getProducts();
  }

  @Get('customers')
  async getCustomers() {
    return await this.stripeService.getCustomers();
  }

  @Post('customer')
  @ApiOperation({ summary: "create stripe customer" })
  public async postCustomer(      
    @Body('name') name: string,
    @Body('email') email: string,
  ) {
    console.log(name, email)
    return this.stripeService.createCustomer(name, email)
  }

  @Post('subscription/:priceId')
  @ApiOperation({ summary: "create stripe subscription" })
  public async postSubscription(
    @Param('priceId') priceId: string,
    @Body('customerId') customerId: string
  ) {
    return this.stripeService.createSubscription(priceId, customerId)
  }

  @Post('cancel-subscription/:subscriptionId')
  @ApiOperation({ summary: "cancel a subscription" })
  public async deleteSubscription(
    @Param('subscriptionId') subscriptionId: string
  ) {
    return this.stripeService.deleteSubscription(subscriptionId)
  }

  @Get('all-subscriptions')
  @ApiOperation({ summary: "list of subscriptions" })
  public async getAllSubscriptions() {
    return this.stripeService.getAllSubscriptions()
  }
}
