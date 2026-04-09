import { PiCalendarDotBold } from "react-icons/pi";
import { FaRegCalendarAlt, FaFolder, FaArchive } from "react-icons/fa";
import { HiTrash } from "react-icons/hi";

const Sidebar = () => {
    return ( 
        <>
            <div className="relative w-3/14 h-screen bg-primary/10 p-5">
                <h2 className="text-primary font-bold text-xl">My Workspace</h2>
                <p className="text-sm">The Focused Curator</p>

                <div className="flex justify-start items-center pt-5">
                    <PiCalendarDotBold />
                    <h3>Today</h3>
                </div>

                <div className="flex justify-start items-center pt-5">
                    <FaRegCalendarAlt />
                    <h3>Upcoming</h3>
                </div>

                <div className="flex justify-start items-center pt-5">
                    <FaFolder />
                    <h3>Projects</h3>
                </div>

                <div className="flex justify-start items-center pt-5">
                    <FaArchive />
                    <h3>Archive</h3>
                </div>

                <div className="flex justify-start items-center pt-5">
                    <HiTrash />
                    <h3>Trash</h3>
                </div>

                <div className="absolute bottom-0 p-2 w-2/3 bg-primary rounded-md font-bold text-white">+ Create New Task</div>
            </div>
        </>
     );
}
 
export default Sidebar;