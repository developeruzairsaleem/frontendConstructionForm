// import logo from './logo.svg';
import './App.css';
import Form from './components/Form/Form';
// import EstimateCard from './components/EstimateCard/EstimateCard';
import { Route ,Routes} from 'react-router-dom';
import Admin from './components/Admin/Admin';
import ZoneManagement from './components/ZoneManagement/ZoneManagement';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import PlanManagement from './components/PlanManagement/PlanManagement';
import PaymentPlan from './components/PaymentPlan/PaymentPlan';
import PlanPage from './components/PlanPage/PlanPage';

import { useEffect, useState } from 'react';

function App() {
  const [visibleFields, setVisibleFields]=  useState([true])
  const [selectedPlan, setSelectedPlan] = useState({})
  useEffect(()=>{
      (_=>{

        const chosenData = JSON.parse(localStorage.getItem('chosenData'));
        if(chosenData){
          setData(chosenData)
          console.log(chosenData, 'chosen')
          setVisibleFields([true,true,true,true,true,true])
        }

      })()


  },[])

  

  const [data, setData]=useState({
    size:0,
    budgetPlanned:null,
    budget:0,
    basement:null,
    designPreference:'',
    cornerPlot:null,
    selectedZone:{}
  });




  // visible fields in the application
  
  return (
      <Routes>
        <Route  path="/booking" element={<Booking visibleFields={visibleFields} setVisibleFields={setVisibleFields} data={data} setData={setData}/>} />
        <Route path="/admin" element={<Admin/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/payment" element={<PaymentPlan/>} />
          <Route path="/plan" element={<PlanPage data={data} visibleFields={visibleFields} setVisibleFields={setVisibleFields} selectedPlan={selectedPlan} setSelectedPlan={setSelectedPlan} setData={setData}/>} />
          <Route path="/admin/*" element={<Admin />}>
            <Route path="zone" element={<ZoneManagement/>} />
            <Route path="user" element={'ssss'} />
            <Route path="plan" element={<PlanManagement/>} />
          </Route>
      </Routes>  
  );
}




function Booking ({data,setData,visibleFields, setVisibleFields}){
return (
    <div className="App max-w-5xl m-auto my-0">
      <div className=' m-7'>  
        <h1 className="text-3xl font-bold text-center text-gray-800">Booking Form</h1>
        <p className=' text-center text-gray-400'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit ipsam reiciendis quos magnam aut nam!
        </p>
      </div>
      <div className='flex'>
        <Form data={data} setData={setData} visibleFields={visibleFields} setVisibleFields={setVisibleFields}/>
      </div>
    </div>
)

}

export default App;
