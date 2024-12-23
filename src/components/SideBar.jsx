import React from "react"
import { Atom, CalendarCheck2, Cog, Headset, LayoutDashboard, UserRoundPlus, Users } from "lucide-react"

const SideBar = (props) => {
    const SideContent = [
        {
            name: "Dashboard",
            icon: <LayoutDashboard />,
        },
        {
            name: "Recruitment",
            icon: <UserRoundPlus />,
        },
        {
            name: "Schedule",
            icon: <CalendarCheck2 />,
        },
        {
            name: "Employee",
            icon: <Users />,
        },
        {
            name: "Department",
            icon: <Atom />,
        },

    ]
    const otherContent = [
    {
        name: "Support",
        icon: <Headset />,
    },
    {
        name: "Settings",
        icon: <Cog />,
    }
    ]
  return (
      <div className="block bg-gray-900/10 w-full max-h-full min-h-screen">
          {/* header */}
          <div className="p-12 border-gray-700 flex h-[91px] items-center gap-2 md-4 cursor-pointer">
              <img src="/public/Group 2770.png" alt="" />
              <h2 className="text-3xl -tracking-normal 
               ">Vasitum</h2>
          </div>
          {/* body */}
          <div className="h-full overflow-y-auto p-2 px-8">
              {/* body header */}
              <div className="p-8 text-sm text-gray-800/40 text-left">
                  MAIN MENU
              </div>
              <div className="flex flex-col gap-6">
                  
                {SideContent.map((item, index) => (
                    <div key={index} className="flex items-center gap-4 p-1 hover:text-orange-500 cursor-pointer transition-opacity ">
                        {item.icon}
                        <h2 className="text-base text-inherit hover:text-inherit ">{item.name}</h2>
                    </div>
                ))}
              </div>
              
              {/* other */}
              <div className="p-8 text-sm text-gray-800/40 text-left">
                  MAIN MENU
              </div>
              <div className="flex flex-col gap-6">
                  
                {otherContent.map((item, index) => (
                    <div key={index} className="flex items-center gap-4 p-1 hover:text-orange-500 cursor-pointer">
                        {item.icon}
                        <h2 className="text-base text-inherit hover:text-inherit ">{item.name}</h2>
                    </div>
                ))}
                </div>
          </div>
    </div>
  )
};

export default SideBar;
