const stripe = require('stripe')('sk_test_51JkPHvD104wGJnsnnrDp2WlJuOQRlvMkLhV3dRq4ZXLs13G0jG4A2sX5OGPP7YWhS4ChNzX3b21KAnBHdsDdIrFh00A8eWwbcd');
(async () => {
    // console.log('Creating the customers');
    // //Create a customer with no params
    // const customer = await stripe.customers.create()
    // console.log(customer);


    //Fetch a customer
    // const cust = await stripe.customers.retrieve('cus_KOvJUdvVPgvdTA');
    // console.log(cust);

    //Create customer with scaler values
    // const customer = await stripe.customers.create({
    //     name:'Muhammad Asif',
    //     email: 'asif@example.com'
    // })
    // console.log(customer);

    //Create user with enum values
    // try {
    //     const cus = await stripe.customers.create({
    //         tax_exempt: 'reverse',
    //         description: 'I am using it for a demo use'
    //     });
    //     console.log(cus);
    // } catch (error) {
    //     console.log(error.message);
    // }

    //Create a customer with object values
    // try {
    //     const cus = await stripe.customers.create({
    //         payment_method: 'pm_card_visa',
    //         invoice_settings:{
    //             default_payment_method: 'pm_card_visa'
    //         }
    //     });
    //     console.log(cus);
    // } catch (error) {
    //     console.log(error.message);
    // }
    
    //Create a customer with an array values
    // const cus = await stripe.customers.create({
    //     preferred_locales:['en', 'es']
    // })
    // console.log(cus);

    //Update a customer
    // const cus = await stripe.customers.update('cus_KOw5IJAjprBXk4', {
    //     email: 'asif1@gmail.com',
    // });
    // console.log(cus.id);
    // console.log(cus.email);

    // Update a customer with nested objects
    // const cus = await stripe.customers.update('cus_KOw5IJAjprBXk4', {
    //     invoice_settings:{
    //         custom_fields:[{
    //             name:'BAT',
    //             value:'12BST'
    //         },{
    //             name:'PAT',
    //             value:'67WT'
    //         }]
    //     }
    // });
    // console.log(cus.invoice_settings);

    //Get request
    // const customers = await stripe.customers.list();
    // console.log(customers.data.map(c => c.id));

    //Create a payment intent
    // const intent = await stripe.paymentIntents.create({
    //     amount: 100,
    //     currency: 'usd'
    // })
    // console.log(intent.id);
    // console.log(intent.status);

    // const intent = await stripe.paymentIntents.confirm('pi_3Jk8nS2eZvKYlo2C0Em99t87', {
    //     payment_method: 'pm_card_visa'
    // })
    // console.log(intent.id);
    // console.log(intent.status);
    // const price = await stripe.prices.list(
    //   );
    // console.log(price);
    // console.log(price.lookup_key);

    // const subscriptions = await stripe.subscriptions.list({
    //     customer: 'cus_KPz86yJZBxEK2w',
    //     status: 'all',
    //     expand: ['data.default_payment_method'],
    //   });
    // console.log(subscriptions.data.default_payment_method);
    // const subscription = await stripe.subscriptions.retrieve(
    //   'sub_1Jl9AUD104wGJnsn10elIxdN'
    // );
    // //console.log(subscription);
    // const v = subscription.latest_invoice;
    // console.log(v);
    // const invoice = await stripe.invoices.retrieve(
    //   v
    // );
    // console.log(invoice);
    // Set your secret key. Remember to switch to your live secret key in production.
// See your keys here: https://dashboard.stripe.com/apikeys
const stripe = require('stripe')('sk_test_51JkPHvD104wGJnsnnrDp2WlJuOQRlvMkLhV3dRq4ZXLs13G0jG4A2sX5OGPP7YWhS4ChNzX3b21KAnBHdsDdIrFh00A8eWwbcd');

// const subscription = await stripe.subscriptions.create({
//   customer: 'cus_KSIkiu0eXfBhb0',
//   items: [
//     {
//       price: 'price_1Jl7lgD104wGJnsncjoYsaoD',
//     },
//   ],
//   trial_end: 1635239107,
// });
const subscription = await stripe.subscriptions.update('sub_1JoSxkD104wGJnsnaB5JG9lC',
  {
  trial_end: 1635168190
  });
console.log(subscription);
})();