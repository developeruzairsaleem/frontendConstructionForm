'use client'
 import DropDown from "../DropDown/DropDown";
import { useState } from 'react'
import { Loader, Placeholder } from 'rsuite';
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import { postPlans } from "../../api/internal";
import { FaCircleMinus, FaCirclePlus, FaHeartPulse } from "react-icons/fa6";
import { validatePlansName, validatePlansNumber } from "../../validations/validatePlans";
import {  CSSProperties } from "react";
import ScaleLoader from "react-spinners/ScaleLoader";

;
export default function CreatePlan({open,setOpen,handleAvailablePlans}) {

 
    const override = {
      display: "block",
      margin: "0 auto",
      borderColor: "red",
    };
    const [planName, setPlanName] =  useState('')
    const [downPayment, setDownPayment] = useState('');
    const [allocation, setAllocation] = useState('');
    const [possession, setPossession] = useState('');
    const [quarterlyInstallment, setQuarterlyInstallment] = useState('');
    const [markup, setMarkup] = useState('');

    const [isSubmitting, setIsSubmitting]=useState(false);



  const handleSubmit=async()=>{
      
      if(!validatePlansName(planName)){
          return;   
    }
    if(!validatePlansNumber(downPayment)){
        return;
    }
    if(!validatePlansNumber(allocation)){
        return;
    }
    if(!validatePlansNumber(possession)){
        return;
    }
    if(!validatePlansNumber(quarterlyInstallment)){
        return;
    }
    if(!validatePlansNumber(markup)){
      return;
  }
    
    setIsSubmitting(true);
    setOpen(false);
    let response;
    try{
      response = await postPlans({
            planName:planName, downPayment:Number(downPayment), allocation:Number(allocation), quarterlyInstallment:Number(quarterlyInstallment), possession:Number(possession),markup:Number(markup)
        })
        handleAvailablePlans(response)
    }
    catch(err){
        console.log(err)
    }
    finally{
        setIsSubmitting(false);
    }




  }

  
// for closing the form and resetting the state for input fields
const handleClose = (data)=>{
    setOpen(data);
    setPlanName('')
    setAllocation('')
    setDownPayment('')
    setQuarterlyInstallment('');
    setPossession('')
    setMarkup('')


}




    

   


   


  return (

    <div>

    <Dialog open={open} onClose={handleClose} className="relative z-10">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
      />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <DialogPanel
            transition
            className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-3xl data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
          >
            <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start">
                
                <div className="mt-3 sm:w-full text-center sm:mt-0 ">
                  <DialogTitle as="h1" className="text-2xl font-semibold leading-6 text-center mb-8 text-gray-900">
                   Create Plan
                  </DialogTitle>
                  <div className="mt-2 flex items-center">
                    <h3 className="text-lg font-semibold w-1/3 text-start">Plan Name:</h3>
                      <input type="text" className="w-2/3 rounded block border border-gray-300 p-1.5 outline-none" placeholder="Enter Plan Name" value= {planName} onChange={e=>setPlanName(e.target.value)} />
                    
                  </div>


                  <div className="mt-2 flex items-center">
                  <h3 className="text-lg font-semibold w-1/3 text-start">Down Payment:</h3>

                      <input type="number" className="rounded block w-2/3 border border-gray-300 p-1.5 outline-none" placeholder="Enter Down Payment" value= {downPayment} onChange={e=>setDownPayment(e.target.value)} />
                    
                  </div>
                  <div className="mt-2 flex items-center">
                  <h3 className="text-lg font-semibold w-1/3 text-start">Allocation:</h3>

                      <input type="number" className="rounded block w-2/3 border border-gray-300 p-1.5 outline-none" placeholder="Enter Allocation" value= {allocation} onChange={e=>setAllocation(e.target.value)} />
                    
                  </div>

                  <div className="mt-2 flex items-center">
                  <h3 className="text-lg font-semibold w-1/3 text-start">Possession:</h3>

                      <input type="number" className="rounded block w-2/3 border border-gray-300 p-1.5 outline-none" placeholder="Enter Possession" value= {possession} onChange={e=>setPossession(e.target.value)} />
                    
                  </div>

                  <div className="mt-2 flex items-center">
                    <h3 className="text-lg font-semibold w-1/3 text-start">Quarterly Installment:</h3>
                    <input type="number" className="rounded block w-2/3 border border-gray-300 p-1.5 outline-none" placeholder="Enter Quarterly Installment" value= {quarterlyInstallment} onChange={e=>setQuarterlyInstallment(e.target.value)} />
                    
                  </div>


                  <div className="mt-2 flex items-center">
                    <h3 className="text-lg font-semibold w-1/3 text-start">Markup:</h3>
                    <input type="number" className="rounded block w-2/3 border border-gray-300 p-1.5 outline-none" placeholder="Enter Markup" value= {markup} onChange={e=>setMarkup(e.target.value)} />
                    
                  </div>





                </div>
              </div>
            </div>

     
            <div className="bg-white px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
              <button
                type="button"
                onClick={handleSubmit}
                className="inline-flex w-full justify-center rounded-md bg-indigo-700 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-800 sm:ml-3 sm:w-auto"
              >
                Create
              </button>
              <button
                type="button"
                data-autofocus
                onClick={_=>handleClose(false)}
                className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
              >
                Cancel
              </button>
            </div>

            {/* <Placeholder.Paragraph rows={8} /> */}

        
            



          </DialogPanel>
        </div>
      </div>
    </Dialog>
    <div className={`bg-opacity-70 bg-gray-300 absolute top-0 left-0 z-50 flex items-center justify-center w-screen h-screen ${isSubmitting?'':'hidden'}`}>
          <ScaleLoader
        color={'rgb(67 56 202)'}
        loading={true}
        cssOverride={override}
        size={200}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
          </div>
</div>
  )
}
