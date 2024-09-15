import React, { useState, useEffect } from "react";
import DropDown from "../DropDown/DropDown";
import { IoNewspaperOutline } from "react-icons/io5";
import { TbNotebookOff } from "react-icons/tb";
import { TbSmartHomeOff, TbSmartHome } from "react-icons/tb";
import { HiHome } from "react-icons/hi2";
import { HiHomeModern } from "react-icons/hi2";
import { GiBlockHouse } from "react-icons/gi";
import { CiShop } from "react-icons/ci";
import { GiFamilyHouse } from "react-icons/gi";
import { GiSpookyHouse } from "react-icons/gi";
import { GiHouse } from "react-icons/gi";
import { TbBuildingEstate } from "react-icons/tb";
import { BsFillBuildingsFill } from "react-icons/bs";
import { GiVikingLonghouse } from "react-icons/gi";
import { SiZend } from "react-icons/si";
import { getEveryZone } from "../../api/internal";
import { useNavigate } from 'react-router-dom';


const Form = ({data, setData, visibleFields, setVisibleFields}) => {


  const navigate  = useNavigate()
  const sizeConst = [3,5,7,8,10,14,20];
  const budgetPlannedConst = [true, false];
  const basementConst = [true, false];
  const designPreferenceConst = ['classic','modern']
  const cornerPlotConst = [true, false]
  const boxStyle = "w-full text-center py-3 border border-gray-300 text-gray-400 rounded font-medium   cursor-pointer transition-colors duration-200";
  const selectedStyle = "border-indigo-700 text-indigo-700 bg-indigo-50 ";
  const selectedYesField = "border-green-700 text-green-700 bg-green-50";
  const selectedNoField = "border-red-700 text-red-700 bg-red-50";
  const [allZones, setAllZones] = useState([]);
  const [dropDownZones, setDropDownZones] = useState([])

  const handleDropDownChange=(data)=>{
     const newDropDownZones = allZones.filter((zone)=>{
        for(let item of zone['data']){
          // check for the  other fields
          if(item['basement']===data['basement']&&item['cornerPlot']===data['cornerPlot']&&item['designPreference']===data.designPreference&&item['size']===data.size){
            //check if budget is not set
            if(!data['budgetPlanned']){
              return true
            }
            else if(Number(item['price'])<=data['budget']&&data['budgetPlanned']){
             // check for  the budget\
             return true
           }

          }
        }
        return false;
      })
      setDropDownZones(newDropDownZones)
      setData({...data,selectedZone:newDropDownZones[0]||{}})

  }


  // fetching all zones when visit the form page
  useEffect(()=>{
    (async()=>{
     const response = await getEveryZone()
     setAllZones(response?.data?.data||[])
    })()
  },[])

 // fetching all zones when visit the form page
 useEffect(()=>{
  (()=>{
   handleDropDownChange(data)
   setData({...data, selectedZone:data.selectedZone})
  })()
},[allZones])





  return (
    <div className="w-full p-8 bg-white rounded-lg">
      
      {visibleFields[0] && (
        <div className="mb-10">
          <label className="block text-gray-650  font-semibold text-lg">
            House Size
          </label>
          <p className="text-gray-400 mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit ipsam
            reiciendis quos magnam aut nam!
          </p>
          <div className="grid grid-cols-3 gap-4">
            {sizeConst.map((s) => (
              <div key={s} className={`${boxStyle} ${data?.size===  s ? selectedStyle : ""}`} onClick={
                () => {

                  const newData={...data,size:s};
                  if(visibleFields.length>=6){
                    handleDropDownChange(newData)
                  }
                  else {
                    setData(newData)
                  }

                setVisibleFields(visibleFields.length>=2?[...visibleFields]:[true,true])
                }}>
                <div className="flex justify-center items-center gap-2">
                  {s === 3 ? (<span className="text-2xl"><GiHouse /></span>) :
                   s === 5 ? (<span className="text-2xl"><GiVikingLonghouse /></span>) :
                   s === 7 ? (<span className="text-2xl"><GiFamilyHouse /></span>) : 
                   s=== 8 ?  (<span className="text-3xl"><GiSpookyHouse /></span>) : 
                   s === 10 ? (<span className="text-2xl"><TbBuildingEstate /></span>) : 
                   s === 14 ? (<span className="text-2xl"><BsFillBuildingsFill /></span>) : 
                   s === 20 ? (<span className="text-2xl"><SiZend/></span>) :("")
                 }
                  {s} Marla
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {visibleFields[1] && (
        <div className={`${data.budgetPlanned?'':'mb-10'}`}>
          <label className="block text-gray-700    font-semibold mb-2 text-lg">
            Budget
          </label>
          <p className="text-gray-400 mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit ipsam
            reiciendis quos magnam aut nam!
          </p>

          <div className="grid grid-cols-2 gap-4">
            {budgetPlannedConst.map((option) => (
              <div
                key={option}
                className={`${boxStyle} ${
                  data?.budgetPlanned === option ? selectedStyle : ""
                }`}
                onClick={() => {
                  
                  setVisibleFields(visibleFields.length>=3?[...visibleFields]:[true,true,true])
                  
                  const newData={...data,budgetPlanned:option,budget:option===false?0:data.budget};
                  if(visibleFields.length>=6){
                    handleDropDownChange(newData)
                  }
                  else {
                    setData(newData)
                  }


                 


                }}
              >
                {option === true ? (
                  <div className="flex justify-center items-center gap-2">
                    <span className="text-2xl">
                      <IoNewspaperOutline />
                    </span>
                    Planned
                  </div>
                ) :option===false? (
                  <div className="flex justify-center items-center gap-2">
                    <span className="text-2xl">
                      <TbNotebookOff />
                    </span>
                    Not Planned
                  </div>
                )
                
                : ('')
                
                
                }
              </div>
            ))
            
            
            }
          </div>
        </div>
      )}

      {visibleFields[1] && data?.budgetPlanned &&(
        <div className="flex items-center gap-5 mt-4 mb-10">
          <p className="font-semibold text-gray-500">Your Budget in PKR</p>
          <input className="rounded border-gray-300" type="number" placeholder="Enter your budget" value={data?.budget===0?'':data?.budget} onChange={e=>{
           
           const newData={...data,budget:Number(e.target.value)};
           if(visibleFields.length>=6){
             handleDropDownChange(newData)
           }
           else {
             setData(newData)
           }
          }} />
       </div>
      )}

      {visibleFields[2] && (
        <div className="mb-10">
          <label className="block text-gray-700   font-semibold mb-2 text-lg">
            Basement
          </label>
          <p className="text-gray-400 mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit ipsam
            reiciendis quos magnam aut nam!
          </p>

          <div className="grid grid-cols-2 gap-4">
            { basementConst.map((option) => (
              <div
                key={option}
                className={`${boxStyle} ${
                  data?.basement === option && data?.basement===true
                    ? selectedYesField
                    : data?.basement === option && data?.basement === false
                    ? selectedNoField
                    : ""
                }`}
                onClick={() => {
                  
                  
                  setVisibleFields(visibleFields.length>=4?[...visibleFields]:[true,true,true,true])
                 
                  const newData={...data,basement:option};
                  if(visibleFields.length>=6){
                    handleDropDownChange(newData)
                  }
                  else {
                    setData(newData)
                  }
                  
                  }}
                  >
                {option === true? (
                  <div className="flex justify-center items-center gap-2">
                    <span className="text-2xl">
                      <TbSmartHome />
                    </span>
                    Yes
                  </div>
                ) :option===false? (
                  <div className="flex justify-center items-center gap-2">
                    <span className="text-2xl">
                      <TbSmartHomeOff />
                    </span>
                    No
                  </div>
                ):''
                
                
                }
              </div>
            ))}
          </div>
        </div>
      )}

      {visibleFields[3] && (
        <div className="mb-10">
          <label className="block text-gray-700    font-semibold mb-2 text-lg">
            Design Preference
          </label>
          <p className="text-gray-400 mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit ipsam
            reiciendis quos magnam aut nam!
          </p>

          <div className="grid grid-cols-2 gap-4">
            {designPreferenceConst.map((option) => (
              <div
                key={option}
                className={`${boxStyle} ${
                  data?.designPreference === option ? selectedStyle : ""
                }`}
                onClick={() => {
                  
                  const newData={...data,designPreference:option};
                  if(visibleFields.length>=6){
                    handleDropDownChange(newData)
                  }
                  else {
                    setData(newData)
                  }
                  setVisibleFields(visibleFields.length>=5?[...visibleFields]:[true, true, true, true, true])
                
                
                }}
              >
                {option === "classic" ? (
                  <div className="flex justify-center items-center gap-2">
                    <span className="text-2xl">
                      <HiHome />
                    </span>
                    Classical
                  </div>
                ) :option==='modern'? (
                  <div className="flex justify-center items-center gap-2">
                    <span className="text-2xl">
                      <HiHomeModern />
                    </span>
                    Modern
                  </div>
                ):('')
              
              
              }
              </div>
            ))}
          </div>
        </div>
      )}

      {visibleFields[4] && (
        <div className="mb-10">
          <label className="block text-gray-700   font-semibold mb-2 text-lg">
            Corner Plot
          </label>
          <p className="text-gray-400 mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit ipsam
            reiciendis quos magnam aut nam!
          </p>

          <div className="grid grid-cols-2 gap-4">
            {cornerPlotConst.map((option) => (
              <div
              key={option}
              className={`${boxStyle} ${
                data?.cornerPlot === option && data?.cornerPlot === true
                ? selectedYesField
                : data?.cornerPlot === option && data?.cornerPlot === false
                ? selectedNoField
                : ""
                }`}
                onClick={() => {
                  
                  const newData={...data,cornerPlot:option};
                    handleDropDownChange(newData)
                    setVisibleFields(visibleFields.length>=6?[...visibleFields]:[true,true,true,true,true,true])
    
                  }}
                  >
                {option === true ? (
                  <div className="flex justify-center items-center gap-2">
                    <span className="text-2xl">
                      <CiShop />
                    </span>
                    Yes
                  </div>
                ) :option===false? (
                  <div className="flex justify-center items-center gap-2">
                    <span className="text-2xl">
                      <GiBlockHouse />
                    </span>
                    No
                  </div>
                ):('')}
              </div>
            ))}
          </div>
        </div>
      )} 
          

      {visibleFields[5] &&  (
        <div className="mb-10">
          <label className="block text-gray-700   font-semibold mb-2 text-lg">
            Zone
          </label>
          <p className="text-gray-400 mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit ipsam
            reiciendis quos magnam aut nam!
          </p>


          { 
            data?.selectedZone?.name?(

              
              <DropDown selected={data?.selectedZone}  setSelected={(value)=>{
                const newData= {...data,selectedZone:value}
                // console.log(data)
                setData(newData)
              }}
              zones={dropDownZones} dropDownType={'zones'} />
            ):(
              <h1 className="text-xl font-semibold text-gray-500">No Zones available for current selections</h1>
            )
          }
        </div>
      )}

      {visibleFields[5]&& data?.selectedZone?.name&& (

        <button onClick={()=>{
          localStorage.setItem('chosenData',JSON.stringify(data))
          navigate('/plan')
        
        }} className="bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-8 rounded font-semibold">Next</button>
      )
      }
    </div>
  );
};

export default Form;
