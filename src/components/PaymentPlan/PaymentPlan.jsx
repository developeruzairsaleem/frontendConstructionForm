import React from 'react';
import Logo from "../../img/logoAntilope.png"
import Footer from "../../img/image2.png"
import html2pdf from 'html2pdf.js';
import { useRef } from 'react';






const PaymentPlan = ({plan,data}) => {

 
  const pageRef = useRef(); // Create a reference to the page
  const displaySize=(size)=>{
    if(size===20){
      return '1 Kanal'
    }
    else {
      return `${size} Marla`
    }
  }

console.log(data, 'dataaaaa')
  const selectedHome=(()=>{
    return data?.selectedZone?.data?.filter((item)=>{
       
         // check for the  other fields
         if(item['basement']===data['basement']&&item['cornerPlot']===data['cornerPlot']&&item['designPreference']===data.designPreference&&item['size']===data.size){
           //check if budget is not set
           return true

         
       }
      
     })[0]

 })()




  
  const downloadPdf = () => {
    const element = pageRef.current; // Get the reference of the page
    html2pdf()
      .set({
        // margin: 1,
        filename: 'payment_plan.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 3 },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
      })
      .from(element)
      .save();
  };


  return (
      
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center p-4">
        {/* Download Button */}
        <button
        onClick={downloadPdf}
        className="my-2 px-6 py-2 w-40 bg-neutral-600 mx-auto text-white rounded hover:bg-neutral-700"
      >
        Download PDF
      </button>
    
      <div className="bg-white shadow-lg rounded-lg max-w-4xl w-full m-auto " ref={pageRef}>
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
            <p className="bg-neutral-200 p-2 text-neutral-600  w-1/2">{displaySize(data?.size)}</p>
          </div>
          <div className='flex justify-between gap-10 mb-5 text-md'>
            <p className="bg-neutral-600 text-white p-2 w-1/2">Budget</p>
          <p className="bg-neutral-200 p-2 text-neutral-600  w-1/2">{data.budgetPlanned?'Fixed':'Not Fixed'}</p>
          </div>
          <div className='flex justify-between gap-10 mb-5 text-md'>
            <p className="bg-neutral-600 text-white p-2 w-1/2">Basement</p>
            <p className="bg-neutral-200 p-2 text-neutral-600  w-1/2">{data?.basement?'Yes':'No'}</p>
          </div>
          <div className='flex justify-between gap-10 mb-5 text-md'>
            <p className="bg-neutral-600 text-white p-2 w-1/2">Corner Plot</p>
            <p className="bg-neutral-200 p-2 text-neutral-600  w-1/2">{data?.cornerPlot?'Yes':'No'}</p>
          </div>
          <div className='flex justify-between gap-10 mb-5 text-md'>
            <p className="bg-neutral-600 text-white p-2 w-1/2">Design Preference</p>
            <p className="bg-neutral-200 p-2 text-neutral-600  w-1/2">{data?.designPreference==='classic'?'Classic':'Modern'}</p>
          </div>
          <div className='flex justify-between gap-10 mb-5 text-md'>
            <p className="bg-neutral-600 text-white p-2 w-1/2">Location</p>
            <p className="bg-neutral-200 p-2 text-neutral-600  w-1/2">{data?.selectedZone?.name}</p>
          </div>
        </div>

        {/* Payment Plan */}
        <div className="mb-8">
          <h3 className="text-2xl text-neutral-600 font-semibold mb-4">{plan?.planName}</h3>
          <div className="">
            <div className='flex justify-between bg-neutral-600 text-neutral-50  p-2 my-2'>
              <p className="  ">Down Payment {plan?.downPayment}%</p>
              <p className=" ">{Number(selectedHome?.price)*plan?.downPayment/100}</p>
            </div>
            <div className='flex justify-between bg-neutral-200 text-neutral-600  p-2 my-2'>
              <p className="  ">Allocation {plan?.allocation}%</p>
              <p className=" ">{Number(selectedHome?.price)*plan?.allocation/100}</p>
            </div>
            <div className='flex justify-between bg-neutral-600 text-neutral-50  p-2 my-2'>
              <p className="  ">Possession {plan?.possession}%</p>
              <p className=" ">{Number(selectedHome?.price)*plan?.possession/100}</p>
            </div>
            <div className='flex justify-between bg-neutral-200 text-neutral-600  p-2 my-2'>
              <p className="  ">Quarterly Installment {plan?.quarterlyInstallment}%</p>
              <p className=" ">{Number(selectedHome?.price)*plan?.quarterlyInstallment/100}</p>
            </div>
            <div className='flex justify-between bg-neutral-50 text-neutral-600  p-2 my-2'>
              <p className="  ">Total</p>
              <p className=" ">{Number(selectedHome?.price)+Number(selectedHome?.price)*plan?.markup/100}</p>
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
