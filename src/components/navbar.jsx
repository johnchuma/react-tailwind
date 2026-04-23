import { LuSearch } from "react-icons/lu";
import { FaBell } from "react-icons/fa";
import { RiSettings4Fill, RiMenuLine } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";

const Navbar = ({menu, setMenu}) => {
    return ( 
        <>
            <div className={`flex items-center pb-3 space-x-5 lg:w-full bg-white shadow-md fixed`}>
                <RiMenuLine 
                    onClick={() => setMenu(prev => !prev)}
                    className="text-2xl mx-3 cursor-pointer lg:hidden"
                />
                <div className="block lg:w-5/11 lg:px-4">
                    <h1 className="font-bold text-xl lg:text-2xl">Today</h1>
                    <p className="text-xs lg:text-sm">Thursday, April 09 </p>
                </div>
                <div className="flex justify-center items-center space-x-4 lg:pr-15 w-6/11">
                    <div className="relative w-2/6">
                        <LuSearch className= "absolute left-3 top-2 text-gray-400" />
                        <input
                        type="text"
                        placeholder="Search Tasks..."
                        className="w-full px-10 py-1 border border-gray-300 rounded-md bg-neutral/30"
                        />
                    </div>
                    <div className="flex lg:w-4/6 gap-5 lg:gap-10">
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