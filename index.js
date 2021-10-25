//const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');
//Globally
const stripe = require('stripe')();
(async () => {
    //const customers = await stripe.customers.list();
    const customer = await stripe.customers.retrieve('cus_KOunfEz3TDRcng', {
        apiKey: 'sk_test_4eC39HqLyjWDarjtT1zdp7dc'
    });
    console.log(customer);
})();

//connected account
// (async () => {
//     const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');
//     const customer = await stripe.customers.list({},{
//         stripeAccount: "acct_1Ey3h1BqeQ4DKpna"
//        }
//     )
// })()