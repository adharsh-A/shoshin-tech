import { Ellipsis, Pin } from "lucide-react";
const AnnouncementItem = ({ text, time, hasPinOption = true }) => (
    <div className="card bg-gray-800/10 shadow-md flex border border-1 border-gray-800/20 justify-between items-center w-full rounded-md p-1 px-2">
      <div className="p-0 m-0">
        <p className="text-xs">{text}</p>
        <p className="text-xs opacity-60">{time}</p>
      </div>
      <div className="flex flex-row gap-4">
        {hasPinOption && <Pin size={16} strokeWidth={1} className="cursor-pointer" />}
        <Ellipsis size={16} strokeWidth={1} className="cursor-pointer" />
      </div>
    </div>
);
  export default AnnouncementItem