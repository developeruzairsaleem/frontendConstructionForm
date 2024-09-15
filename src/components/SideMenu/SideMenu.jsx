import {Link, useLocation } from "react-router-dom"

const SideMenu = ()=>{


    const location = useLocation();


    return(


        <div className=" border-r-2 border-gray-100 h-screen">
            <h1 className="text-3xl p-4 mb-5 font-semibold ">Booking</h1>
            <div className="flex flex-col text-md font-semibold">
                
                    <Link to='/admin/zone'>
                        <div className={`p-4  ${location.pathname==='/admin/zone'?'bg-indigo-700 text-white hover:text-white':'text-gray-400 hover:text-black'}`}>
                                Zone Management
                        </div>
                    </Link>     
                
                    <Link to='/admin/user'>
                        <div className={`p-4  ${location.pathname==='/admin/user'?'bg-indigo-700 text-white hover:text-white':'text-gray-400 hover:text-black'}`}>
                                User Management
                        </div>
                    </Link>    
                
                    <Link to='/admin/plan'>
                        <div className={`p-4  ${location.pathname==='/admin/plan'?'bg-indigo-700 text-white hover:text-white':'text-gray-400 hover:text-black'}`}>
                                Plan Management
                        </div>
                    </Link>     
            </div>
        </div>
    )
}
export default SideMenu;