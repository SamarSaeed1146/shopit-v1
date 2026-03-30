import catchAsyncErrors from "../middlewares/catchAsyncErrors.js";
import Stripe from "stripe";
import Order from "../models/orderModel.js";
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

export const stripeCheckoutSession = catchAsyncErrors(async (req, res) => {
  const body = req.body;

  const line_items = body?.orderItems?.map((item) => {
    return {
      price_data: {
        currency: "pkr",
        product_data: {
          name: item?.name,
          images: [item.image],
          metadata: {
            id: item?.productId,
          },
        },
        unit_amount: item.price * 100,
      },
      quantity: item?.quantity,
    };
  });

  const shippingInfo = body?.shippingInfo;

  const shipping_rate =
    body?.itemsPrice >= 200 ? "" : "txr_1TEun0CiVmReUqwuHlTpup7O";

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],

    success_url: `${process.env.FRONTEND_URL}/me/orders?order_success=true`,
    cancel_url: `${process.env.FRONTEND_URL}`,
    customer_email: req?.user?.email,
    client_reference_id: req?.user?._id.toString(),
    mode: "payment",
    metadata: { ...shippingInfo, itemsPrice: body?.itemsPrice },
    shipping_options: [
      {
        shipping_rate,
      },
    ],
    line_items,
  });

  res.status(200).json({
    url: session.url,
  });
});

const getOrderItems = async (line_items) => {
  return new Promise((resolve, reject) => {
    let cartItems = [];

    line_items?.data?.forEach(async (item) => {
      const product = await stripe.products.retrieve(item?.price?.product);
      const productId = product?.metadata?.id;

      cartItems.push({
        product: productId,
        quantity: item?.quantity,
        price: item?.price?.unit_amount / 100,
        name: product?.name,
        image: product?.images[0],
      });

      if (cartItems.length === line_items?.data?.length) {
        resolve(cartItems);
      }
    });

    resolve(cartItems);
  });
};

export const stripeWebhook = catchAsyncErrors(async (req, res, next) => {
  const signature = req.headers["stripe-signature"];
  const event = stripe.webhooks.constructEvent(
    req.rawBody,
    signature,
    process.env.STRIPE_WEBHOOK_SECRET,
  );

  if (event.type === "checkout.session.completed") {
    const session = event.data.object;

    const line_items = await stripe.checkout.sessions.listLineItems(
      session?.id,
    );

    const orderItems = await getOrderItems(line_items);

    const user = session?.client_reference_id;

    const totalPrice = session.amount_total / 100;
    const taxAmount = session.total_details.amount_tax / 100;
    const shippingPrice = session.total_details.amount_shipping / 100;
    const itemsPrice = session.metadata.itemsPrice;

    const shippingInfo = {
      address: session.metadata.address,
      city: session.metadata.city,
      state: session.metadata.state,
      country: session.metadata.country,
      postalCode: session.metadata.postalCode,
      phoneNo: session.metadata.phoneNo,
    };

    const paymentInfo = {
      id: session.payment_intent,
      status: session.payment_status,
    };

    const orderData = {
      shippingInfo,
      orderItems,
      user,
      paymentInfo,
      paymentMethod: "Card",
      itemsPrice,
      taxAmount,
      shippingPrice,
      totalPrice,
    };

    await Order.create(orderData);

    res.status(200).json({
      success: true,
      orderItems,
    });
  } else {
    res.status(400).json({
      success: false,
    });
  }
});
