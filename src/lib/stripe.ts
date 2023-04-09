import { env } from 'process';
import Stripe from 'stripe';

export const stripe = new Stripe(`${env.STRIPE_SECRET_KEY}`, {
  apiVersion: '2022-11-15',
  appInfo: {
    name: 'Ignite Shop'
  },
})