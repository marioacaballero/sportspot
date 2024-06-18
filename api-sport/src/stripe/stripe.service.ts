import { Inject, Injectable } from '@nestjs/common'
import Stripe from 'stripe'
import { Cart } from './Cart.model'

@Injectable()
export class StripeService {
  private stripe: Stripe

  constructor(@Inject('STRIPE_SECRET_KEY') private readonly apiKey: string) {
    this.stripe = new Stripe(this.apiKey, {
      apiVersion: '2024-04-10' // Use whatever API latest version
    })
  }
  checkout(cart: Cart) {
    const totalPrice = cart.reduce(
      (acc, item) => acc + item.quantity * item.price,
      0
    )
    return this.stripe.paymentIntents.create({
      amount: totalPrice * 100,
      currency: 'usd',
      payment_method_types: ['card']
    })
  }

  async createPayment(amount: number, customerId: string): Promise<any> {
    const ephemeralKey = await this.stripe.ephemeralKeys.create(
      { customer: customerId },
      { apiVersion: '2024-04-10' }
    );
    const paymentIntent = await this.stripe.paymentIntents.create({
      amount,
      currency: 'eur',
      customer: customerId,
      payment_method_types:['card'],
    
    });

    return {
      paymentIntent: paymentIntent.client_secret,
      ephemeralKey: ephemeralKey.secret,
      customer: customerId,
      publishableKey: 'sk_test_51OocYQGmE60O5ob7URy3YpGfHVIju6x3fuDdxXUy5R0rAdaorSHfskHNcBHToSoEfwJhFHtFDCguj7aGPlywD2pp00f2X9h9et',
    };
  }

  async getProducts(): Promise<Stripe.Product[]> {
    const products = await this.stripe.products.list()
    return products.data
  }

  async getSubscriptions(): Promise<Stripe.Subscription[]> {
    const subscriptions = await this.stripe.subscriptions.list()
    return subscriptions.data
  }

  async getCustomers() {
    const customers = await this.stripe.customers.list({})
    return customers.data
  }

  async createCustomer(name: string, email: string) {
    const customer = await this.stripe.customers.create({
      email,
      name,
      shipping: {
        address: {
          city: 'Brothers',
          country: 'US',
          line1: '27 Fredrick Ave',
          postal_code: '97712',
          state: 'CA'
        },
        name
      },
      address: {
        city: 'Brothers',
        country: 'US',
        line1: '27 Fredrick Ave',
        postal_code: '97712',
        state: 'CA'
      }
    })

    return customer
  }

  async createPaymentIntent(priceId: string, customerId: string) {
    try {
      // Crea un PaymentIntent

      // const newCustomer = await this.createCustomer('Fernando Kaganovicz', 'fernando.kaganovicz@gmail.com')

      const paymentIntent = await this.stripe.paymentIntents.create({
        amount: 599, // establece la cantidad
        currency: 'eur', // establece la moneda
        customer: customerId,
        payment_method_types: ['card']
        // automatic_payment_methods: {
        //   enabled: true,
        // }
      })

      const data = {
        customer: customerId,
        clientSecret: paymentIntent.client_secret
      }
      return data
    } catch (error) {
      console.error(`Error al crear el PaymentIntent: ${error.message}`)
      throw error
    }
  }

  async createSubscription(priceId: string, customerId: string) {
    try {
      const subscription = await this.stripe.subscriptions.create({
        customer: customerId,
        items: [
          {
            price: priceId
          }
        ],
        payment_behavior: 'default_incomplete',
        payment_settings: { save_default_payment_method: 'on_subscription' },
        expand: ['latest_invoice.payment_intent']
      })

      if (!subscription) {
        console.error('Error al crear subscricion')
      } else {
        // Asegúrate de que latest_invoice y payment_intent están presentes
        const latestInvoice = subscription.latest_invoice as Stripe.Invoice
        const paymentIntent =
          latestInvoice.payment_intent as Stripe.PaymentIntent

        const data = {
          subscriptionId: subscription.id,
          clientSecret: paymentIntent.client_secret
        }

        return subscription
      }
    } catch (error) {
      console.error(error)
    }
  }

  async createSubscriptions(priceId: string, customerId: string) {
    try {
      // const paymentMethod = await this.stripe.paymentMethods.attach(
      //   paymentMethodId,
      //   { customer: customerId }
      // );

      // console.log(paymentMethod, 'que devuelve el method?')

      const newSubscription = (await this.stripe.subscriptions.create({
        customer: customerId,
        items: [
          {
            price: priceId
          }
        ],
        expand: ['latest_invoice.payment_intent']
      })) as any

      const data = {
        subscriptionId: newSubscription.id,
        clientSecret:
          newSubscription.latest_invoice.payment_intent.client_secret
      }
      return data
    } catch (error) {
      console.error(`Error al crear la suscripción: ${error.message}`)
      throw error
    }
  }

  async getAllPaymentIntents() {
    const allPaymentIntents = await this.stripe.paymentIntents.list()
    return allPaymentIntents
  }

  async deleteSubscription(subscriptionId: string) {
    const deletedSubscription =
      await this.stripe.subscriptions.cancel(subscriptionId)

    return deletedSubscription
  }

  async getAllSubscriptions() {
    const allSubscriptions = await this.stripe.subscriptions.list()
    return allSubscriptions
  }

  async getCustomerById(customerId: string) {
    const customer = await this.stripe.customers.retrieve(customerId)
    return customer
  }

  async getCustomerByEmail(email: string) {
    const customers = await this.stripe.customers.list()
    const customer = customers.data.find((cust) => cust.email === email)
    return customer
  }

  async getSubscriptionById(customerId: string) {
    const subscriptionList = await this.stripe.subscriptions.list()
    const subscription = subscriptionList.data.find(
      (susc) => susc.customer === customerId
    )
    if (!subscription) return {}

    return subscription
  }

  async deleteCustomer(customerId: string) {
    const deletedCustomer = await this.stripe.customers.del(customerId)
    return `customer con el id --> ${deletedCustomer.id} eliminado`
  }
}
