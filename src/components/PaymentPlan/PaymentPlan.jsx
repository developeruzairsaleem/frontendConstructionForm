import React from 'react';
import Logo from "../../img/logoAntilope.png"
import Footer from "../../img/image2.png"
const PaymentPlan = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white shadow-lg rounded-lg max-w-2xl w-full ">
        {/* Header */}
          {/* <img src="https://via.placeholder.com/150x40" alt="Logo" className="mx-auto mb-4" /> */}
        <div className='bg-neutral-500 text-white p-4 flex items-center justify-center'>
          <img className='w-52' src={Logo} alt="" />
        </div>
        <div className='bg-neutral-50 py-2 px-8'>

        <div className="flex text-center text-neutral-500 pb-3 justify-between">
          <p className="text-md ">Ref. ADUH-ISB-1001</p>
          <p className="text-md ">Dated: 08/09/2024</p>
        </div>

        {/* Personal Information */}
        <div className="text-left mb-5 text-neutral-500">
          <p className="text-lg font-bold">Dear Saad Khan,</p>
          <p className="text-md">This plan is designed to facilitate the booking process with your preferred choices and manageable payment plan.</p>
        </div>

        {/* Details */}
        <div className=" mb-5">
          <div className='flex justify-between gap-10 mb-5 text-md'>
            <p className="bg-neutral-600 text-white p-2 w-1/2">Home Size</p>
            <p className="bg-neutral-200 p-2 text-neutral-600  w-1/2">1 Kanal</p>
          </div>
          <div className='flex justify-between gap-10 mb-5 text-md'>
            <p className="bg-neutral-600 text-white p-2 w-1/2">Budget</p>
            <p className="bg-neutral-200 p-2 text-neutral-600  w-1/2">Fixed</p>
          </div>
          <div className='flex justify-between gap-10 mb-5 text-md'>
            <p className="bg-neutral-600 text-white p-2 w-1/2">Basement</p>
            <p className="bg-neutral-200 p-2 text-neutral-600  w-1/2">Yes</p>
          </div>
          <div className='flex justify-between gap-10 mb-5 text-md'>
            <p className="bg-neutral-600 text-white p-2 w-1/2">Corner Plot</p>
            <p className="bg-neutral-200 p-2 text-neutral-600  w-1/2">No</p>
          </div>
          <div className='flex justify-between gap-10 mb-5 text-md'>
            <p className="bg-neutral-600 text-white p-2 w-1/2">Design Preference</p>
            <p className="bg-neutral-200 p-2 text-neutral-600  w-1/2">Modern</p>
          </div>
          <div className='flex justify-between gap-10 mb-5 text-md'>
            <p className="bg-neutral-600 text-white p-2 w-1/2">Location</p>
            <p className="bg-neutral-200 p-2 text-neutral-600  w-1/2">Gulberg Green</p>
          </div>
        </div>

        {/* Payment Plan */}
        <div className="mb-8">
          <h3 className="text-2xl text-neutral-600 font-semibold mb-4">2 YEARS PLAN</h3>
          <div className="">
            <div className='flex justify-between bg-neutral-600 text-neutral-50  p-2 my-2'>
              <p className="  ">Down Payment 25%</p>
              <p className=" ">5000000</p>
            </div>
            <div className='flex justify-between bg-neutral-200 text-neutral-600  p-2 my-2'>
              <p className="  ">Allocation 10%</p>
              <p className=" ">2000000</p>
            </div>
            <div className='flex justify-between bg-neutral-600 text-neutral-50  p-2 my-2'>
              <p className="  ">Monthly Installment</p>
              <p className=" ">200000</p>
            </div>
            <div className='flex justify-between bg-neutral-200 text-neutral-600  p-2 my-2'>
              <p className="  ">Half Yearly</p>
              <p className=" ">600000</p>
            </div>
            <div className='flex justify-between bg-neutral-50 text-neutral-600  p-2 my-2'>
              <p className="  ">Total</p>
              <p className=" ">20000000</p>
            </div>
          </div>
        </div>

       <div>
        <img className='mb-4' src={Footer} alt="" />
       </div>
      </div>
    </div>
        </div>
  );
};

export default PaymentPlan;
