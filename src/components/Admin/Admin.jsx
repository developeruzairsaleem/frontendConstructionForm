import SideMenu from "../SideMenu/SideMenu";
// import Dashboard from "../Dashboard/Dashboard";
import { Outlet } from "react-router-dom";
const Admin =()=>{

    return(
        <div className="flex h-screen">
            <div className="w-64 hidden sm:block lg:w-72">
                <SideMenu/>
            </div>

            <div className="grow">
                <Outlet/>         
            </div>
        </div>
    )
}


export default Admin;