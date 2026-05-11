import { PiCalendarDotBold } from "react-icons/pi";
import { FaRegCalendarAlt, FaFolder, FaArchive } from "react-icons/fa";
import { HiTrash } from "react-icons/hi";
import {useNavigate} from "react-router-dom"

const Sidebar = ({menu}) => {
    const navigate= useNavigate();
    const pathname = window.location.pathname;
    return ( 
        <>
            <div
                onClick={(e) => e.stopPropagation()}
                className={`fixed top-0 left-0 h-screen z-50 w-64 bg-primary lg:bg-primary/10 p-5 lg:block lg:static lg:translate-x-0 transform transition-transform duration-300
                ${menu ? "translate-x-0" : "-translate-x-full"}`}>
                <h2 className="text-white lg:text-primary font-bold text-xl">My Workspace</h2>
                <p className="text-sm text-white/90 lg:text-neutral">The Focused Curator</p>

                <div className="space-y-4 mt-10">
                    {
                        [{
                            pathname: "/",
                            name: "Today",
                            icon: <PiCalendarDotBold className="text-xl" />
                        },
                        {
                            pathname: "/upcoming",
                            name: "Upcoming",
                            icon: <FaRegCalendarAlt className="text-xl" />
                        },
                        {
                            pathname: "/projects",
                            name: "Projects",
                            icon: <FaFolder className="text-xl" />
                        },
                        {
                            pathname: "/archives",
                            name: "Archive",
                            icon: <FaArchive className="text-xl" />
                        },
                        {
                            pathname: "/trash",
                            name: "Trash",
                            icon: <HiTrash className="text-xl" />
                        }
                        ].map((item,index)=> (
                                <div
                                    onClick={()=>{
                                        navigate(item.pathname);
                                    }}
                                    className={`flex justify-start cursor-pointer py-2 px-2 items-center space-x-4 
                                    ${pathname === item.pathname ? "bg-white text-primary" : "lg:text-neutral text-white"}`}>
                                    {item.icon}
                                    <p className="text-sm font-semibold">{item.name}</p>

                                </div>
                        ))
                    }
                     
                </div>
                    
                <div className="absolute bottom-3 py-2 px-1 lg:w-2/3 bg-primary border border-white rounded-md font-bold text-white">+ Create New Task</div>
            </div>
            
        </>
     );
}
 
export default Sidebar;