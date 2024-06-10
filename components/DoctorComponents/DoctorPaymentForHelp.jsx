import React, { useState } from "react";
import GlobalButton from "../Global/GlobalButton";
import CheckoutForm from "../payment/CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
const stripePromise = loadStripe(
  "pk_test_51P1kt4F28zhW1wrko8P8Uqvs0Xcc6qaPxpt8RgFVfOwCAediCKlQdQ9kW7DhY20oupVF6CuDQs28NL2SrqN4anpP00gubJXodu"
);
const DoctorPaymentForHelp = ({ setCurrentModalData, timeSchedule, data }) => {
  const [successPayment, setSuccessPayment] = useState(false);
  const [stripeForm, setStripeForm] = useState(false);

  return (
    <>
      <h2 className="text-2xl py-4 text-center text-[#008080]">
        Please select payment method
      </h2>
      <div className="py-4 text-center text-4xl text-gray-500">
        {timeSchedule?.price || 20}$
      </div>
      <div className="text-center font-bold text-gray-500">
        Additional Funds Required: {timeSchedule?.price || 30}
      </div>
      <div
        className="mt-5 text-center"
        onClick={() => setStripeForm(!stripeForm)}
      >
        <GlobalButton text="Pay With Stripe" />
        {stripeForm && (
          <div className="my-5 mx-5">
            <Elements stripe={stripePromise}>
              <CheckoutForm />
            </Elements>
          </div>
        )}
      </div>

      {successPayment && (
        <div
          className="text-center mt-5"
          onClick={() => setCurrentModalData("call")}
        >
          <GlobalButton text="Continue" />
        </div>
      )}
    </>
  );
};

export default DoctorPaymentForHelp;
