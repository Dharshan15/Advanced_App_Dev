import React, { useState } from 'react';
import { razorpayconfig, testuserconfig } from '../../constants/index'

const Membership = () => {
  const [membership, setMembership] = useState(false);
  const [plandata, setPlandata] = useState({
    planName: '',
    planPrice: 0,
    planDays: 0,
    key: ''
  });

  const handleUpgrade = (planname, planprice, plandays) => {
    if (planprice > 0) {
      const options = {
        key: razorpayconfig.key,
        key_secret: razorpayconfig.key_secret,
        amount: planprice * 100,
        currency: razorpayconfig.currency,
        name: razorpayconfig.name,
        handler: (res) => {
          alert(res.razorpay_payment_id);
          setPlandata({
            planName: planname,
            planPrice: planprice,
            planDays: plandays,
            key: res.razorpay_payment_id
          });
          setMembership(true);
        },
        prefill: {
          name: testuserconfig.name,
          email: testuserconfig.email,
          contact: testuserconfig.contact
        },
        notes: {
          address: " office",
        },
        theme: {
          color: '#f5f5f7'
        }
      };
      const pay = new window.Razorpay(options);
      pay.open();
    } else {
      alert("Invalid amount");
    }
  };

  const plans = [
    {
      planname: "Basic",
      price: 999,
      days: 30,
      features: [
        "Access to course content",
        "Basic enquiry",
        "1 enquiry per week"
      ]
    },
    {
      planname: "Premium",
      price: 1599,
      days: 30,
      features: [
        "Access to course content",
        "Priority support",
        "Unlimited enquiries"
      ]
    },
    {
      planname: "Ultimate",
      price: 2999,
      days: 30,
      features: [
        "Access to course content",
        "Dedicated mentor",
        "Weekly mentorship sessions"
      ]
    }
  ];

  return (
    <div className="bg-white min-h-screen py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-black sm:text-4xl">Choose Your Plan</h2>
          <p className="mt-4 text-lg text-black">
            Select the perfect plan for your learning journey.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-y-10 md:grid-cols-3 md:gap-x-8 md:gap-y-10">
          {plans.map((plan, index) => (
            <div key={index} className="bg-white overflow-hidden shadow-lg rounded-lg">
              <div className="px-6 py-8">
                <div className="text-lg leading-6 font-medium text-black">{plan.planname}</div>
                <div className="mt-4 flex items-baseline text-6xl font-extrabold text-black">
                  ₹{plan.price}<span className="ml-1 text-2xl font-medium text-black">/month</span>
                </div>
                <p className="mt-4 text-base text-black">For {plan.planname.toLowerCase()} learners who want access to {plan.planname.toLowerCase()} features.</p>
              </div>
              <div className="px-6 pt-6 pb-8 bg-purple-100 sm:px-10">
                <ul className="space-y-4">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <div className="flex-shrink-0">
                        <svg className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="ml-3 text-base text-purple-700">{feature}</p>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 rounded-md shadow">
                  <button className="block w-full py-2 px-4 border border-transparent text-center bg-purple-800 text-white font-medium rounded-md hover:bg-purple-700" onClick={() => { handleUpgrade(plan.planname, plan.price, plan.days) }}>
                    Buy {plan.planname}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Membership;
