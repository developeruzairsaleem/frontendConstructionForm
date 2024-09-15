import { useEffect, useState } from "react";
import CreateZone from "../CreateZone/CreateZone";
import { FaPlus } from "react-icons/fa";
import Table from "../Table/Table";
import { deleteZoneById, getAllZones } from "../../api/internal";
import { ScaleLoader } from "react-spinners";


const ZoneManagement = () => {
  const [open, setOpen] = useState(false);

  const [availableZones, setAvailableZones] = useState([]);
  const [gettingZones, setGettingZones] = useState(false);
  const [deleting, setDeleting] = useState(false);

  const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };
  

    const handleDelete=(zoneId)=>async()=>{
       let response;
        try {

            setDeleting(true)
           response =  await deleteZoneById(zoneId)
            setAvailableZones(response?.data?.data||[])


        } catch (error) {
            console.log(error)
        }
        finally{
            setDeleting(false)
        }
    }


    useEffect(
        ()=>{
        (async()=>{
        try{
            setGettingZones(true)
            const zones = await getAllZones()
            setAvailableZones(zones?.data?.data||[])
            setGettingZones(false)
            console.log(zones)
        }
        catch(err){
            console.log(err)
            setAvailableZones([])
            setGettingZones(false)
        }
    })()

    },[])

  return (
    <div>
        <div className={`bg-opacity-70 bg-gray-300 absolute top-0 left-0 z-50 flex items-center justify-center w-screen h-screen ${deleting?'':'hidden'}`}>
          <ScaleLoader
        color={'rgb(67 56 202)'}
        loading={true}
        cssOverride={override}
        size={200}
        aria-label="Loading Spinner"
        data-testid="loader"
      />



          </div>
        <div  className="my-3 mx-1.5 flex justify-between items-center mb-8">
        <h1 className=" font-bold text-gray-500 text-2xl">Zone Management</h1>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="flex w-full justify-center items-center gap-2 py-2 px-4 text-lg rounded-md bg-indigo-700  font-semibold text-white shadow-sm hover:bg-indigo-800 sm:ml-3 sm:w-auto"
        >
        Create <FaPlus />
          </button>
        </div>
      <div className="">
      <Table zones={availableZones} deleteZoneById={handleDelete} loading={gettingZones} />
      </div>

      <CreateZone handleAvailableZones={(data)=>{
        console.log(data,'handling')
        setAvailableZones(data?.data?.data||[]);
      }} open={open} setOpen={setOpen} />
    </div>
  );
};

export default ZoneManagement;
