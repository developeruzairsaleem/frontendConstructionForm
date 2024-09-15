
import { ScaleLoader } from "react-spinners"




const PlansTable =({plans,loading, deletePlanById})=>{
    const override = {
        display: "block",
        margin: "0 auto",
        borderColor: "red",
      };
if(loading){
    return <div className={`bg-opacity-70 bg-gray-300 absolute top-0 left-0 z-50 flex items-center justify-center w-screen h-screen ${loading?'':'hidden'}`}>
    <ScaleLoader
  color={'rgb(67 56 202)'}
  loading={true}
  cssOverride={override}
  size={200}
  aria-label="Loading Spinner"
  data-testid="loader"
/>



    </div>
}
if(plans.length===0){
    return <h1 className=" p-1.5 text-2xl text-gray-400 font-bold">
        No Plans available Tap 'Create' to create one 

    </h1> 
}

console.log('pans',plans)




    return (
        <div className="flex flex-col grow">
  <div className=" overflow-x-auto">
    <div className="p-1.5 min-w-full inline-block align-middle">
      <div className="">
        <table className="min-w-full divide-y divide-gray-200 rounded">
          <thead className="">
            <tr className="bg-indigo-700 text-white rounded">
              <th scope="col" className="px-6 py-3 text-start text-xs font-medium uppercase">Plan Name</th>
              <th scope="col" className="px-6 py-3 text-start text-xs font-medium  uppercase">Down Payment</th>
              <th scope="col" className="px-6 py-3 text-start text-xs font-medium  uppercase">Allocation</th>
              <th scope="col" className="px-6 py-3 text-start text-xs font-medium  uppercase">Quarterly Installment</th>
              <th scope="col" className="px-6 py-3 text-start text-xs font-medium  uppercase">Possession</th>
              <th scope="col" className="px-6 py-3 text-start text-xs font-medium  uppercase">Markup</th>

              <th scope="col" className="px-6 py-3 text-end text-xs font-medium uppercase"></th>
              {/* <th scope="col" className="px-6 py-3 text-end text-xs font-medium uppercase"></th> */}

            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">

            {
                plans.map(plan=>{

                    return(

                        <tr key={plan._id} className="hover:bg-gray-100">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">{plan.planName}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{plan.downPayment}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{plan.allocation}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{plan.quarterlyInstallment}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{plan.possession}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{plan.markup}</td>

              <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                <button onClick={deletePlanById(plan._id)} type="button" className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-red-600 hover:text-red-800 focus:outline-none focus:text-red-800 disabled:opacity-50 disabled:pointer-events-none">Delete</button>
              </td>
            </tr>
            )

                })
            }

           
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
    )
}


export default PlansTable;