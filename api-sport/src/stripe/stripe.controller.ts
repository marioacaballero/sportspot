import { Body, Controller, Post } from '@nestjs/common'
import { Cart } from './Cart.model'
import { StripeService } from './stripe.service'
import { ApiOperation, ApiTags } from '@nestjs/swagger'

@Controller('stripe')
  @ApiTags("Stripe")
  
export class StripeController {
  constructor(private readonly stripeService: StripeService) {}

  @Post()
  @ApiOperation({ summary: "Payment gateway" })
  checkout(@Body() body: { cart: Cart }) {
    try {
      return this.stripeService.checkout(body.cart)
    } catch (error) {
      return error
    }
  }
}
