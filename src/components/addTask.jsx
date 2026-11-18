import { useState } from "react";


function AddTask() {
const [newItem, setNewItem] = useState("")  
  return (
    <form className=" bg-[#172036]! border outline-1 shadow-[4px_4px_0_rgb(232_237_247)] mt-7 py-1.5 pr-1.5 pl-4 flex rounded-[14px] gap-2">
        <input
          className="py-2.5 grow text-[17px] placeholder:font-light  bg-[#172036]! outline-0"
          type="text"
          placeholder="What needs doing?"
        />
        <button className="px-3 py-3 rounded-lg bg-[#7c8dff]! text-black! font-semibold text-lg cursor-pointer">
          Add Task
        </button>
      </form>
  );
}

export default AddTask;