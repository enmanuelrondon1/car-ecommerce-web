const { NextResponse } = ("next/server");
import { headers } from "next/headers";
import Stripe from "stripe";

const stripe = new Stripe(
  "sk_test_51QNkm8DYQfdb9RrvGxSZbaIz7UxPwdKLJsDUwEDSYcWssYoXpc65E8TNe592Sk0jeZ10HDY5OoMQGkipVW9YyjNY00rSckt5NH"
);
const endPointSecret = "whsec_yuP8fMv6GXeM4Ch4bJofLzJCFSmxDehR";

export async function POST(request) {
  const body = await request.text();
  const headersList = headers();
  const sig = headersList.get("stripe-signature");
  let event;

  try {
    event = stripe.webhooks.constructEvent(body, sig, endPointSecret);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }

  switch (event.type) {
    case "checkout.session.completed":
      const checkoutSessionCompleted = event.data.object;

      console.log("Consultando producto con id:", checkoutSessionCompleted);

      console.log({ checkoutSessionCompleted });
      break;

    default:
      console.log(`Evento no manejado: ${event.type} `);
  }

  return NextResponse.json(null, { status: 200 });
}