import React from 'react';
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight, FaCheck } from 'react-icons/fa';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { getAllPlans } from '../../api/internal';
import {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { ScaleLoader } from 'react-spinners';
import { SampleNextArrow, SamplePrevArrow, overrideForLoader } from './utils';




function PlanPage({data,setData, selectedPlan, setSelectedPlan}) {


    // Plan Page state goes here
    const[plans, setPlans] = useState([]);
    const[gettingPlans, setGettingPlans]= useState(false)
    const navigate = useNavigate()
    


 
    // select zone from the pervious zones


    const selectedZone=(()=>{
   return data?.selectedZone?.data?.filter((item)=>{

      if(item['basement']===data['basement']&&item['cornerPlot']===data['cornerPlot']&&item['designPreference']===data.designPreference&&item['size']===data.size){
        //check if budget is not set
        if(!data['budgetPlanned']){
         return true
        }
        else if(Number(item['price'])<=data['budget']&&data['budgetPlanned']){
         // check for  the budget
          return true
       }
  
     }
     return false;


  })[0]
 

  })()


  // get all plans
    useEffect(()=>{     
            (async()=>{
                try{
                    setGettingPlans(true)
                    const response = await getAllPlans()
                    setPlans(response?.data?.data||[])
            

                }catch(err){
                    console.log(err)
                }
                finally{
                    setGettingPlans(false)
                }
            })()
        },[])

    
        // settings for sliders 
        const settings = {
            dots: true,
            infinite: false,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 4,
            nextArrow: <SampleNextArrow />,  // Correctly pass the custom arrows
            prevArrow: <SamplePrevArrow />,
            responsive: [
            {
                breakpoint: 1024,
                settings: {
                slidesToShow: 3,
                slidesToScroll: 3
                }
            },
            {
                breakpoint: 600,
                settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                }
            }
            ]
        };





        

        
  return (

      <div className='lg:max-w-screen-lg md:max-w-screen-md sm:max-w-screen-sm xs:max-w-xs  px-4  m-auto'>
        <h1 className='text-center font-bold text-3xl my-5'>Choose your plan</h1>
       {
            <div className={`bg-opacity-70 bg-gray-300 absolute top-0 left-0 z-50 flex items-center justify-center w-screen h-screen ${gettingPlans?'':'hidden'}`}>
<ScaleLoader
color={'#fed4a5'}
loading={true}
cssOverride={overrideForLoader}
size={300}
aria-label="Loading Spinner"
data-testid="loader"
/>
            </div>

    }
    {
        !gettingPlans&&plans.length?(

            <div className="slider-container">
      <Slider {...settings}>
      {plans.map((plan) => (

          <div key={plan._id}  className=''>

          <div
          key={plan._id}
          className=" bg-[#fed4a5] border-y-[#02413a] border-y-8 bg-opacity-20 m-2 rounded-2xl px-4  py-6 relative transition-transform"
          >
          <h2 className="text-lg font-semibold text-[#02413a] mb-2">{plan?.planName}</h2>
              <p className="font-semibold mb-8 text-[#02413a]"><span className="font-bold text-3xl"><span className='text-lg'>PKR </span>{Number(selectedZone?.price)+Number(selectedZone?.price)*plan?.markup/100}</span></p>
            <button onClick={()=>{
                setSelectedPlan(plan)
                localStorage.setItem('plan',JSON.stringify(plan))
                navigate('/payment')
            }} className="w-full bg-[#02413a] bg-opacity-20 text-[#02413a] py-3 mb-8  font-semibold text-md rounded-md hover:bg-opacity-30 transition">
              Select Plan
            </button>
            <div className=" text-[#02413a] text-sm">
              <p className=" mb-4 font-semibold flex items-center gap-2"><FaCheck className='text-[#fed4a5] text-md'/> {plan.downPayment}% Down Payment</p>
              <p className=" mb-4 font-semibold flex items-center gap-2"><FaCheck className='text-[#fed4a5] text-md'/> {plan.allocation}% Allocation</p>
              <p className=" mb-4 font-semibold flex items-center gap-2"><FaCheck className='text-[#fed4a5] text-md'/> {plan.possession}% PosseSssion</p>
              <p className=" mb-4 font-semibold flex items-center gap-2"><FaCheck className='text-[#fed4a5] text-md'/> {plan.quarterlyInstallment}% Quarterly Installment</p>
            
            </div>
          </div>
        </div>
        ))}
      </Slider>
    </div>
    ):!plans.length&&!gettingPlans?(
        <h1 className='text-3xl font-bold h-screen text-center w-full flex justify-center items-center' >No Plans Available Currently</h1>
    ):''
    }
</div>
  )
}

export default PlanPage;

