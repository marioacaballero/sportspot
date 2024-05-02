import { Body, Param, Controller, Get, Post, Delete } from '@nestjs/common';
import { StripeService } from './stripe.service';
// import { CreateCustomerDto } from './dto/create-customer-dto';
import { ApiTags, ApiOperation } from '@nestjs/swagger'


@Controller('stripe')
  @ApiTags("Stripe Payments")  
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
    return this.stripeService.createCustomer(name, email)
  }

   @Post('payment/:priceId')
  @ApiOperation({ summary: "payment stripe subscription" })
  public async paymentSubscription(
    @Param('priceId') priceId: string,
    @Body('customerId') customerId: string,
  ) {
    return this.stripeService.createPaymentIntent(priceId, customerId )
  }

  @Post('subscription/:priceId')
  @ApiOperation({ summary: "create stripe subscription" })
  public async postSubscription(
    @Param('priceId') priceId: string,
    @Body('customerId') customerId: string,
    @Body('paymentMethodId') paymentMethodId: string

  ) {
    return this.stripeService.createSubscription(priceId, customerId, paymentMethodId)
  }

  @Get('paymentIntents')
  @ApiOperation({ summary: "get all paymentIntents" })
  public async getAllPaymentIntents() {
    return this.stripeService.getAllPaymentIntents()
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

  @Get('customer/:email')
  @ApiOperation({ summary: "get a customer" })
  public async getOneCustomer(
    @Param('email') email: string
  ) {
    return this.stripeService.getCustomerByEmail(email)
  }  

  @Get('subscription/:customerId')
  @ApiOperation({ summary: "get a subscription" })
  public async getOneSubscription(
    @Param('customerId') customerId: string
  ) {
    return this.stripeService.getSubscriptionById(customerId)
  }

  @Delete('delete-customer/:customerId')
  @ApiOperation({ summary: "delete a customer" })
  public async deleteCustomer(
    @Param('customerId') customerId: string
  ) {
    return this.stripeService.deleteCustomer(customerId)
  }
}
