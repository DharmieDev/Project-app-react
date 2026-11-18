import { Star } from "@boxicons/react";


function Filters() {
  return (
    <div className="flex gap-2 mt-4">
      <button className="px-3.5 py-1.75 border-[1.5px] border-[#2a3654] rounded-full text-[#93a0ba]! hover:border-[#93a0ba] focus:bg-[#e8edf7] cursor-pointer">All</button>
      <button className="px-3.5 py-1.75 border-[1.5px] border-[#2a3654] rounded-full text-[#93a0ba]! hover:border-[#93a0ba] cursor-pointer">Incomplete</button>
      <button className="px-3.5 py-1.75 border-[1.5px] border-[#2a3654] rounded-full text-[#93a0ba]! hover:border-[#93a0ba] cursor-pointer">Completed</button>
      <button className="px-3.5 py-1.75 flex border-[1.5px] border-[#2a3654] rounded-full gap-2 text-[#93a0ba]! hover:border-[#93a0ba] cursor-pointer">
        <Star pack="filled" fill="gold" />
        Favourite
      </button>
    </div>
  );
}

export default Filters;
