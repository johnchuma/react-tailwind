import { HiMiniCalendar, HiMiniClock} from "react-icons/hi2";
import { PiWarningFill } from "react-icons/pi";
import { RiAddCircleFill } from "react-icons/ri";
import { RxDotFilled } from "react-icons/rx";

const OverviewPage = () => {
  return (
    <>
        <div className="flex lg:gap-15">
          <div className="block lg:w-8/12 px-5 lg:px-10">
            <h4 className="text-primary/80 font-bold text-sm lg:text-lg">CURATION</h4> 
            <h2 className="lg:text-xl text-sm font-semibold">Active Priorities</h2>
          </div>

          <div className=" flex lg:w-4/12 m-4 gap-2 lg:gap-5">
            <div className="bg-neutral/30 rounded-full px-2 py-1 text-center inline font-semibold text-primary text-[10px] lg:text-sm">5 Pending</div>
            <div className="bg-secondary/40 rounded-full px-2 py-1 text-center font-semibold text-[10px] lg:text-sm">12 Completed</div>
          </div>
        </div>

        <div className="lg:p-5">

          <div className="flex bg-white space-x-5 m-5 px-5 py-2 rounded-md">
            <input type="checkbox" className="scale-200" />
            <div className="">
              <p className="font-semibold">Design System Review: Axiom Indigo</p>
              <div className="flex space-x-2">
                <HiMiniCalendar />
                <h4 className="text-sm">Due 2:00PM</h4>
                <div className="flex justify-center items-center bg-tertiary/20 rounded-full py-1 px-1">
                  <RxDotFilled /> 
                  <p className="text-[8px] font-bold">IN PROGRESS</p></div>
                </div>
              </div>
          </div>

          <div className="flex bg-white space-x-5 m-5 px-5 py-2 rounded-md">
            <input type="checkbox" className="scale-200" />
            <div className="">
              <p className="font-semibold">Stakeholder Meeting - Q4 Roadmap</p>
              <div className="flex space-x-2">
                <HiMiniClock />
                <h4 className="text-sm">Tomorrow, 10:00 AM</h4>
                <div className="bg-neutral/20 text-[8px] font-bold rounded-full py-1 px-1">MANAGEMENT</div>
              </div>
            </div>
          </div>

          <div className="flex bg-white space-x-5 m-5 px-5 py-2 rounded-md">
            <input type="checkbox" className="scale-200" />
            <div className="">
              <p className="line-through font-semibold">Refactor CSS Utility Classes</p>
              <div className="flex space-x-2">
                <div className="flex space-x-2 bg-secondary/30 rounded-full text-[8px] py-1 px-1 font-bold">COMPLETED</div>
                <h4 className="italic text-sm">Finished 2h ago</h4>
              </div>
            </div>
          </div>

          <div className="flex bg-white space-x-5 m-5 px-5 py-2 rounded-md">
            <input type="checkbox" className="scale-200" />
            <div className="">
              <p className="font-semibold">Prepare Weekly Sprint Report</p>
              <div className="flex space-x-2 text-red-700 font-bold">
                <PiWarningFill className="" />
                <h4 className="text-sm">Overdue 1 day</h4>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-end items-end pt-5"><RiAddCircleFill className="text-primary text-5xl" /></div>
    </>
  );
};

export default OverviewPage;
