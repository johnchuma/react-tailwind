import { HiMiniCalendar } from "react-icons/hi2";
import { HiMiniClock } from "react-icons/hi2";
import { PiWarningThin } from "react-icons/pi";
import { RiAddCircleFill } from "react-icons/ri";

const OverviewPage = () => {
  return (
    <>
      <div className="">
        <div className="flex">
          <div className="block w-8/12 p-2">
            <h4 className="text-primary/80 font-bold text-ld">CURATION</h4> 
            <h2 className="text-xl font-semibold">Active Priorities</h2>
          </div>

          <div className=" flex w-4/12 h-10 m-4 gap-3">
            <div className="bg-neutral/30 w-2/4 rounded-full p-2 text-center font-semibold text-sm">5 Pending</div>
            <div className="bg-secondary/40 w-2/4 rounded-full p-2 text-center font-semibold text-sm">12 Completed</div>
          </div>
        </div>

        <div className="bg-gray-300 p-5">

          <div className=" bg-white m-5 p-2">
            <div className="flex">
              <input type="checkbox" />
              <p className="font-semibold">Design System Review: Axiom Indigo</p>
            </div>
            <div className="flex p-2">
              <HiMiniCalendar />
              <h4 className="text-sm">Due 2:00PM</h4>
              <div className="text-sm bg-tertiary/20 rounded-md">IN PROGRESS</div>
            </div>
          </div>

          <div className="grid grid-row-2 bg-red-300 bg-white m-5 p-2">
            <div className="flex bg-yellow-200">
              <input type="checkbox" />
              <p>Stakeholder Meeting - Q4 Roadmap</p>
            </div>
            <div className="flex bg-purple-500">
              <HiMiniClock />
              <h4>Tomorrow, 10:00 AM</h4>
              <div>MANAGEMENT</div>
            </div>
          </div>

          <div className="bg-white m-5 p-2">
            <div className="flex bg-yellow-200">
              <input type="checkbox" />
              <p className="line-through">Refactor CSS Utility Classes</p>
            </div>
            <div className="flex bg-purple-500">
              <div>COMPLETED</div>
              <h4 className="italic">Finished 2h ago</h4>
            </div>
          </div>

          <div className="bg-white m-5 p-2">
            <div className="flex bg-yellow-200">
              <input type="checkbox" />
              <p>Prepare Weekly Sprint Report</p>
            </div>
            <div className="flex bg-purple-500">
              <PiWarningThin />
              <h4>Overdue 1 day</h4>
            </div>
          </div>
        </div>

        <div className="flex justify-end items-end pt-5"><RiAddCircleFill className="text-primary text-5xl" /></div>
      </div>
    </>
  );
};

export default OverviewPage;
