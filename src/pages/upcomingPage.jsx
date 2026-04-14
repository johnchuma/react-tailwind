import { PiDotsThreeOutlineFill } from "react-icons/pi";
import { HiClock, HiOutlineUsers } from "react-icons/hi2";

const UpcomingPage = () => {
  return (
    <>
      <div className ="space-y-5">
        <div className="flex justify-between items-center">
          <div className="">
            <h1 className="text-3xl font-bold">Upcoming</h1>
            <p className="text-sm text-neutral">Curating your focus for the week ahead.</p>
          </div>
          <div className="bg-blue-200">Calender part</div>
        </div>

        <div className="flex items-center gap-2">
          <span className="font-bold text-lg">Tomorrow</span>
          <hr className="w-[80%] text-neutral/40 font-bold"></hr>
          <span className="text-neutral/40 text-sm font-bold">March 13</span>
        </div>

        <div className="flex justify-between gap-5">
          <div className="bg-white rounded-md border-l-red-800 border-l-5 p-2 space-y-2">
            <div className="flex justify-between">
              <p className="text-sm bg-red-300 rounded-full px-2 font-bold text-red-900">URGENT</p>
              <PiDotsThreeOutlineFill className="text-neutral/40" />
            </div>
            <h2 className="font-bold">Quarterly Strategy Alignment</h2>
            <p className="text-neutral/90 text-sm">Review key performance indicators and adjust growth targets for the final semester.</p>
            <div className="flex justify-between">
              <div className="flex gap-4">
                <HiOutlineUsers className="w-6 h-6 text-primary" />
              </div>
              <div className="flex justify-center items-center text-neutral/90 text-sm">
                <HiClock />
                <p className="">10:30 AM</p>
              </div>
            </div>
          </div>

          <div className="bg-primary/10 p-2 space-y-2 rounded-md">
            <div className="flex justify-between">
              <p className="text-sm bg-green-300 rounded-full px-2 font-bold">INTERNAL</p>
              <PiDotsThreeOutlineFill className="text-neutral/40" />
            </div>
            <h2 className="font-bold">Design System Audit</h2>
            <p className="text-neutral/90 text-sm">Ensure all shared components align with the Axiom Indigo specifications.</p>
            <div className="flex justify-between">
              <div className="bg-white/60 px-2 rounded-full">Project: UI refresh</div>
              <div>
                <></>
                <p>2 Docs</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="font-bold text-lg">This Weekend</span>
          <hr className="w-[75%] text-neutral/40 font-bold"></hr>
          <span className="text-neutral/40 text-sm font-bold">March 16-17</span>
        </div>

        <div>
          <div>
            <div></div>
            <h2>Personal Portfolio Revision</h2>
            <p>helo dcjcdcbhd</p>
            <div>
              <div>profiles</div>
              <div>ratingd</div>
            </div>
          </div>
        </div>

        <div>
          <div>
            <div></div>
            <h2>Rest & Restore</h2>
            <p>helo dcjcdcbhd</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="font-bold text-lg">Next Week</span>
          <hr className="w-[75%] text-neutral/40 font-bold"></hr>
          <span className="text-neutral/40 text-sm font-bold">From March 18</span>
        </div>
        <div>
          <div>
            <div></div>
            <h2>Client Onboarding Hellos Corp</h2>
            <p>helo dcjcdcbhd</p>
            <div>
              <div>like</div>
              <div>dislike</div>
            </div>
          </div>
        
          <div>
            <div></div>
            <h2>Product Launch Prep</h2>
            <p>helo dcjcdcbhd</p>
            <div>
              <div>like</div>
              <div>dislike</div>
            </div>
          </div>
        </div>

      </div>
    </>
  )
};

export default UpcomingPage;
