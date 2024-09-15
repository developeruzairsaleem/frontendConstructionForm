
import { ScaleLoader } from "react-spinners"




const Table =({zones,loading, deleteZoneById})=>{
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
if(zones.length===0){
    return <h1 className=" p-1.5 text-2xl text-gray-400 font-bold">
        No Zones available Tap 'Create' to create one 

    </h1> 
}

console.log('zones',zones)




    return (
        <div className="flex flex-col grow">
  <div className=" overflow-x-auto">
    <div className="p-1.5 min-w-full inline-block align-middle">
      <div className="">
        <table className="min-w-full divide-y divide-gray-200 rounded">
          <thead className="">
            <tr className="bg-indigo-700 text-white rounded">
              <th scope="col" className="px-6 py-3 text-start text-xs font-medium uppercase">Zone Name</th>
              <th scope="col" className="px-6 py-3 text-start text-xs font-medium  uppercase">Property Types</th>
              <th scope="col" className="px-6 py-3 text-start text-xs font-medium  uppercase">Price Range</th>
              <th scope="col" className="px-6 py-3 text-end text-xs font-medium uppercase"></th>
              {/* <th scope="col" className="px-6 py-3 text-end text-xs font-medium uppercase"></th> */}

            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">

            {
                zones.map(zone=>{

                    return(

                        <tr key={zone.zoneId} className="hover:bg-gray-100">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">{zone.zoneName}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{zone.propertyTypes}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{zone.priceRange.min===zone.priceRange.max?`${zone.priceRange.min}`: `${zone.priceRange.min} - ${zone.priceRange.max}`}</td>
              <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                <button onClick={deleteZoneById(zone.zoneId)} type="button" className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-red-600 hover:text-red-800 focus:outline-none focus:text-red-800 disabled:opacity-50 disabled:pointer-events-none">Delete</button>
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


export default Table;