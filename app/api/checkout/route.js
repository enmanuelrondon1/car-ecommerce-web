import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(
  "sk_test_51QNkm8DYQfdb9RrvGxSZbaIz7UxPwdKLJsDUwEDSYcWssYoXpc65E8TNe592Sk0jeZ10HDY5OoMQGkipVW9YyjNY00rSckt5NH"
);

export async function POST(request) {
  const body = await request.json();

  const session = await stripe.checkout.sessions.create({
    success_url: "http://localhost:3000/success",
    line_items: [
      {
        price_data: {
          currency: "usd",
          product_data: {
            name: body.name,
            images: [body.image],
          },
          unit_amount: body.price * 100,
        },
        quantity: 1,
      },
    ],
    mode: "payment",
  });
  console.log(session);

  return NextResponse.json(session);
}
