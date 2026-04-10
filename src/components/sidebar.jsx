import { PiCalendarDotBold } from "react-icons/pi";
import { FaRegCalendarAlt, FaFolder, FaArchive } from "react-icons/fa";
import { HiTrash } from "react-icons/hi";
import {useNavigate} from "react-router-dom"

const Sidebar = () => {
    const navigate= useNavigate();
    const pathname = window.location.pathname;
    return ( 
        <>
            <div className="relative w-3/14 h-screen bg-primary/10 p-5">
                <h2 className="text-primary font-bold text-xl">My Workspace</h2>
                <p className="text-sm">The Focused Curator</p>

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
                                    className={`flex justify-start py-2 px-2 items-center space-x-4 
                                    ${pathname === item.pathname ? "bg-white text-primary" : "text-neutral"}`}>
                                    {item.icon}
                                    <p className="text-sm font-semibold">{item.name}</p>

                                </div>
                        ))
                    }
                     
                </div>

                <div className="absolute bottom-0 p-2 w-2/3 bg-primary rounded-md font-bold text-white">+ Create New Task</div>
            </div>
        </>
     );
}
 
export default Sidebar;