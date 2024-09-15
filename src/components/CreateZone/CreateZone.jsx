'use client'
 import DropDown from "../DropDown/DropDown";
import { useState } from 'react'
import { Loader, Placeholder } from 'rsuite';
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import { postZones } from "../../api/internal";
import { FaCircleMinus, FaCirclePlus, FaHeartPulse } from "react-icons/fa6";
import { validateZoneData,validateZoneName } from "../../validations/validateZones";
import {  CSSProperties } from "react";
import ScaleLoader from "react-spinners/ScaleLoader";

;
export default function CreateZone({open,setOpen,handleAvailableZones}) {

    // constants
    const size = [3,5,7,8,10,14,20];
    const basement = [true,false];
    const cornerPlot= [true,false];
    const override = {
      display: "block",
      margin: "0 auto",
      borderColor: "red",
    };
    
    // const[color, setColor] = useState('indigo')
    // const [open, setOpen] = useState(true);
    const [zoneName, setZoneName] =  useState('')
    const [zoneData, setZoneData] = useState([{
      size:3,
      basement:true,
      cornerPlot:true,
      designPreference:'classic',
      price:''
    }
  ]);
  // const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting]=useState(false);
  const designPreference = ['classic','modern'];
// const formDisabled = isSubmitting?'pointer-events-none':



  const handleSubmit=async()=>{
      
      if(!validateZoneName(zoneName)){
          return;   
    }
    if(!validateZoneData(zoneData)){
        return;
    }
    
    setIsSubmitting(true);
    setOpen(false);
    let response
    try{
      response = await postZones({
            zoneName,zoneData
        })
        handleAvailableZones(response)
    }
    catch(err){
        console.log(err)
    }
    finally{
        setIsSubmitting(false);
    }




  }

  

const handleClose = (data)=>{
  setOpen(data);
  setZoneName('')
  setZoneData([{
    size:3,
    basement:true,
    cornerPlot:true,
    designPreference:'classic',
    price:''
  }])

}




    

    // const handle plus icon 
    const handleIncrement =()=>{
        const updatedArray = [...zoneData,{
            size:3,
            basement:true,
            cornerPlot:true,
            designPreference:'classic',
            price:''
        }]
         setZoneData(updatedArray);
        console.log(updatedArray)

    }

    const handleMinus =(index)=> () =>{
        
        const filteredArray =zoneData.filter((item, currentIndex)=>{
            return currentIndex!==index
        })
        setZoneData(filteredArray)
        console.log(filteredArray)
    }


    //handle Price change

    const handlePriceChange=(index)=>(e)=>{
        const updatedArray = [...zoneData];
        updatedArray[index]={
            ...zoneData[index],price:e.target.value
        }
        setZoneData(updatedArray)
        console.log(updatedArray)
    
    }
    // this for modal opening
   
    const handleChange = (key,index) => (data) => {
        const obj ={...zoneData[index]};
        obj[key]=data;
        const newZoneData = [...zoneData];
        newZoneData[index]=obj;
        setZoneData(newZoneData)
        console.log(newZoneData)
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
                  <DialogTitle as="h1" className="text-xl font-semibold leading-6 text-center text-gray-900">
                   Create Zone
                  </DialogTitle>
                  <div className="mt-2">
                      <input type="text" className="rounded block w-full border border-gray-300 p-3 outline-none" placeholder="Enter Zone Name" value= {zoneName} onChange={e=>setZoneName(e.target.value)} />
                    
                  </div>
                </div>
              </div>
            </div>









{/* data mapping */}

{

  zoneData.map((data,index)=>{
        return(
            <div key={index} className='flex gap-2 justify-center mx-2 mb-8'>
            <div className="text-center w-1/6">
              <p>House Size</p>
              <DropDown zones={size} dropDownType={'size'} selected={data['size']} setSelected={handleChange('size',index)}/>
          </div>
          <div className="text-center  w-1/6">
              <p>Basement</p>
              <DropDown zones={basement} dropDownType={'basement'} selected={data['basement']} setSelected={handleChange('basement',index)}/>
          </div>
          <div className="text-center  w-1/6">
              <p>Corner Plot</p>
              <DropDown zones={cornerPlot} selected={data['cornerPlot']} dropDownType={'cornerPlot'} setSelected={handleChange('cornerPlot',index)}/>
          </div>
          <div className="text-center grow">
              <p>Design Preference</p>
              <DropDown zones={designPreference} selected={data['designPreference']} dropDownType={'designPreference'} setSelected={handleChange('designPreference',index)}/>
          </div>
          <div className="text-center w-1/6 overflow-hidden">
              <p>Price</p>
              {/* <DropDown zones={price}/>  */}
              <input placeholder="In PKR" className="outline-none w-full block mt-2 p-1.5 rounded  border-gray-300 border  " onChange={handlePriceChange(index)} value={zoneData[index].price} type="number" />   
            </div>
            <div onClick={handleMinus(index)} className="cursor-pointer text-red-700 flex justify-center items-end w-1/12">
            <FaCircleMinus className="w-8 h-8"/>
    
            </div>
     </div>
    

    
    
  )    
})
}













        <div onClick={handleIncrement} className="cursor-pointer text-indigo-700 flex justify-center my-4">
            <FaCirclePlus className="w-8 h-8"/>
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
