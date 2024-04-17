import { Body, Controller, Post } from '@nestjs/common'
import { Cart } from './Cart.model'
import { StripeService } from './stripe.service'
import { ApiTags } from '@nestjs/swagger'

@Controller('stripe')
  @ApiTags("Stripe")
  
export class StripeController {
  constructor(private readonly stripeService: StripeService) {}

  @Post()
  checkout(@Body() body: { cart: Cart }) {
    try {
      return this.stripeService.checkout(body.cart)
    } catch (error) {
      return error
    }
  }
}
