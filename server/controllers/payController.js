stripe = require('stripe')(process.env.STRIPE_SECRET);

module.exports = {
    
    session: async (req, res) => {
        console.log("req.body", req.body)
        const { priceId } = req.body;
        console.log("priceId", priceId)
    
        try {
            const session = await stripe.checkout.sessions.create({
                mode: "subscription",
                payment_method_types: ["card"],
                line_items: [       // Put add-ons in here
                    {price: priceId, quantity: 1},
                ],
                success_url: "https://getjitterbox.com/success/{CHECKOUT_SESSION_ID}",
                cancel_url: "https://getjitterbox.com/success/1",
            });
    
            res.send({
                sessionId: session.id,
            });
        } catch (e) {
            res.status(400);
            return res.send({
                error: {
                    priceId,
                    message: e.message,
                }
            });
        }
    },

    // pay: async (req, res) => {
    //     const { email } = req.body
    //     const paymentIntent = await stripe.paymentIntents.create({
    //         amount: 13000,
    //         currency: 'usd',
    //         metadata: {integration_check: 'accept_a_payment'},
    //         recipient_email: email,
    //     });
    //     res.json({'client_secret': paymentIntent['client_secret']})
    //     // console.log("req", req)
    //     // console.log("res", res)
    //     // const session = await stripe.checkout.sessions.create({
    //     //     payment_method_types: ['card'],
    //     //     line_items: [
    //     //       {
    //     //         price_data: {
    //     //           currency: 'usd',
    //     //           product_data: {
    //     //             name: 'T-shirt',
    //     //           },
    //     //           unit_amount: 2000,
    //     //         },
    //     //         quantity: 1,
    //     //       },
    //     //     ],
    //     //     mode: 'payment',
    //     //     success_url: 'https://example.com/success',
    //     //     cancel_url: 'https://example.com/cancel',
    //     //   });
        
    //     //   res.json({ id: session.id });
    // },

    // secret: async (req, res) => {
    //     const intent = ""
    //     res.json({client_secret: intent.client_secret});
    // },


};