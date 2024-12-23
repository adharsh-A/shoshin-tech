import React from 'react';
import WaveProgress from "@/components/WaveProgress";
import { Ellipsis, Pin } from "lucide-react";
import StatCard from "@/components/StatCard";
import MetricCard from "@/components/MetricCard";
import AnnouncementItem from "@/components/AnnouncementItem";


const Main = () => {
  const dashboardData = {
    stats: [
      { bgColor: "bg-orange-400/30", title: "Available Position", value: "24", subtext: "4 Urgently Hiring" },
      { bgColor: "bg-blue-400/30", title: "Job Open", value: "10", subtext: "4 Active Hiring" },
      { bgColor: "bg-fuchsia-400/30", title: "New Employees", value: "24", subtext: "4 Department" }
    ],
    metrics: {
      chartData: [
        { value: 10 }, { value: 15 }, { value: 20 }, { value: 18 }, { value: 22 }
      ]
    },
    announcements: [
      { text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", time: "5 minutes ago" },
      { text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", time: "5 minutes ago" },
      { text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", time: "5 minutes ago" }
    ],
    schedules: {
      priority: [
        { text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", time: "5 minutes ago" },
        { text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", time: "5 minutes ago" },
        { text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", time: "5 minutes ago" }
      ],
      other: [
        { text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", time: "5 minutes ago" },
        { text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", time: "5 minutes ago" }
      ]
    }
  };

  return (
    <div>
      <main className="lg:p-8 p-2 mt-2 lg:mt-0 w-full h-full">
        <h3 className="tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-blue-900 to-fuchsia-900">
          Dashboard
        </h3>
        <div className="h-full flex lg:flex-row flex-col gap-2">
          <div className="lg:w-1/2 w-full h-full p-1 flex flex-col gap-2">
            <div className="flex flex-col  lg:flex-row gap-2 justify-between items-center">
              {dashboardData.stats.map((stat, index) => (
                <StatCard key={index} {...stat} />
              ))}
            </div>
            
            <div className="flex flex-col lg:flex-row gap-2">
              {[1, 2].map((_, index) => (
                <MetricCard
                  key={index}
                  title="Total Employees"
                  value="216"
                  subtexts={["120 men", "96 women"]}
                  chartData={dashboardData.metrics.chartData}
                />
              ))}
            </div>

            <div className="w-full rounded-md p-4 flex flex-col justify-start items-center border border-gray-800/20 shadow-md">
              <div className="flex justify-between items-center gap-2 w-full">
                <p className="text-xl font-semibold tracking-widest self-start">Announcement</p>
                <select className="cursor-pointer border border-gray-300 rounded-md px-4 py-1 text-sm">
                  <option value="today">Today</option>
                  <option value="yesterday">Yesterday</option>
                  <option value="2daysago">2 Days Ago</option>
                </select>
              </div>
              <div className="flex flex-col gap-2 w-full mt-4">
                {dashboardData.announcements.map((announcement, index) => (
                  <AnnouncementItem key={index} {...announcement} />
                ))}
              </div>
              <div className="w-full mt-4 border-t border-gray-800/50 flex justify-center items-center text-orange-500 text-sm py-2 cursor-pointer">
                See All Announcement
              </div>
            </div>
          </div>

          <div className="relative w-full lg:w-1/2 p-2 flex  flex-col gap-4 rounded-sm">
            <div className="card lg:w-[427px] lg:h-[258px]  bg-indigo-950 shadow-md rounded-lg px-6 py-4 relative">
              <div className="absolute top-0 left-0 right-0 px-6 py-4 border-b border-gray-100/50 bg-white/10">
                <p className="text-white text-lg font-semibold">Recent Activity</p>
              </div>
              <div className="mt-[2.5rem] px-1 py-6 flex flex-col gap-4 mb-[3.5rem]  text-white">
                <p className="text-sm font-medium">10:40 AM, Fri 10 Sept 2021</p>
                <p className="text-md font-semibold">You Posted a New Job</p>
                <p className="text-sm leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, quo.
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
              <div className="absolute bottom-0 left-0 right-0 px-6 py-4 border-t border-gray-100/50 bg-white/10">
                <div className="flex justify-between items-center">
                  <p className="text-white text-lg font-semibold tracking-normal">Today you makes 12 Activity</p>
                  <button className="cursor-pointer bg-rose-600 hover:bg-rose-500 text-white font-bold py-2 px-4 border border-orange-700 rounded">
                    See All Activity
                  </button>
                </div>
              </div>
            </div>

            <div className="w-full rounded-md p-4 flex flex-col justify-start items-center border border-gray-800/20 shadow-md">
              <div className="flex justify-between items-center gap-2 w-full">
                <p className="text-xl font-semibold tracking-widest self-start">Upcoming Schedule</p>
                <select className="cursor-pointer border border-gray-300 rounded-md px-4 py-1 text-sm">
                  <option value="today">Today</option>
                  <option value="yesterday">Yesterday</option>
                  <option value="2daysago">2 Days Ago</option>
                </select>
              </div>
              <div className="flex flex-col gap-2 w-full mt-4 lg:h-[200px] h-[300px] overflow-y-scroll">
                <div>
                  <h6 className="text-sm text-gray-900/80">Priority</h6>
                </div>
                {dashboardData.schedules.priority.map((schedule, index) => (
                  <AnnouncementItem key={index} {...schedule} hasPinOption={false} />
                ))}
                <div>
                  <h6 className="text-sm text-gray-900/80">Other</h6>
                </div>
                {dashboardData.schedules.other.map((schedule, index) => (
                  <AnnouncementItem key={index} {...schedule} hasPinOption={false} />
                ))}
              </div>
              <div className="w-full mt-4 border-t border-gray-800/50 flex justify-center items-center text-orange-500 text-sm py-2 cursor-pointer">
                Create a new schedule
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Main;