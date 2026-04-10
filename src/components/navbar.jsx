import { LuSearch } from "react-icons/lu";
import { FaBell } from "react-icons/fa";
import { RiSettings4Fill } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";

const Navbar = () => {
    return ( 
        <>
            <div className="flex w-full bg-white/10 shadow-md py-4 fixed ">
                <div className="block w-5/11 px-4">
                    <h1 className="font-bold text-2xl">Today</h1>
                    <p className="text-sm">Thursday, April 09 </p>
                </div>
                <div className="flex justify-center items-center w-6/11">
                    <div className="relative w-2/6">
                        <LuSearch className= "absolute left-3 top-2 text-gray-400" />
                        <input
                        type="text"
                        placeholder="Search Tasks..."
                        className="w-full px-10 py-1 border border-gray-300 rounded-md bg-neutral/30"
                        />
                    </div>
                    <div className="flex w-4/6 gap-10 p-3">
                        <FaBell className="text-2xl"/>
                        <RiSettings4Fill className="text-2xl" />
                        <CgProfile className="text-2xl" />
                    </div>
                </div>

            </div>
        </>
     );
}
 
export default Navbar;