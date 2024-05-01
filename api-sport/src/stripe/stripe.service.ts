import { Inject, Injectable } from '@nestjs/common';
import Stripe from 'stripe';

@Injectable()
export class StripeService {
  private stripe: Stripe;

  constructor(@Inject('STRIPE_SECRET_KEY') private readonly apiKey: string) {
    this.stripe = new Stripe(this.apiKey, {
      apiVersion: '2024-04-10', // Use whatever API latest version
    });
  }

  async getProducts(): Promise<Stripe.Product[]> {
    const products = await this.stripe.products.list();
    return products.data;
  }

  async getSubscriptions(): Promise<Stripe.Subscription[]> {
    const subscriptions = await this.stripe.subscriptions.list();
    return subscriptions.data;
  }

  async getCustomers() {
    const customers = await this.stripe.customers.list({});
    return customers.data;
  }

  async createCustomer(name: string, email: string ) {
    console.log(email)
    const customer = await this.stripe.customers.create({
      email,
      name,
      shipping: {
        address: {
          city: 'Brothers',
          country: 'US',
          line1: '27 Fredrick Ave',
          postal_code: '97712',
          state: 'CA',
        },
        name,
      },
      address: {
        city: 'Brothers',
        country: 'US',
        line1: '27 Fredrick Ave',
        postal_code: '97712',
        state: 'CA',
      },
    });

    console.log(customer)
    return 'customer creado exitosamente'
  }

  async createSubscription(priceId: string, customerId: string) {
    const newSubscription = await this.stripe.subscriptions.create({
      customer: customerId,
      items: [{
        price: priceId,
      }],
      payment_behavior: 'default_incomplete',
      payment_settings: { save_default_payment_method: 'on_subscription' },
      expand: ['latest_invoice.payment_intent'],
    }) as any

    const data = {
      subscriptionId: newSubscription.id,
      clientSecret: newSubscription.latest_invoice.payment_intent.client_secret
    }
    return data
  }

  async deleteSubscription(subscriptionId: string) {
    const deletedSubscription = await this.stripe.subscriptions.cancel(subscriptionId)

    return deletedSubscription
  }

  async getAllSubscriptions() {
    const allSubscriptions = await this.stripe.subscriptions.list()
    return allSubscriptions
  }

  async getCustomerById(customerId: string) {
   const customer = await this.stripe.customers.retrieve(customerId);
   return customer
  }

  async getSubscriptionById(subscriptionId: string) {
    const subscription = await this.stripe.subscriptions.retrieve(subscriptionId)
    return subscription
  }
}
