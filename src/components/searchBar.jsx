import { Search } from "@boxicons/react";

export default function SearchBar() {
  return (
    <div className="mt-5.5 flex relative w-full border-[1.5px] border-[#2a3654] py-2.75 px-10 rounded-xl gap-4 items-center">
        <Search pack="filled" fill="#93a0ba" size="sm" />
        <input
          type="text"
          className="outline-0 grow"
          placeholder="Search tasks"
        />
      </div>
  );
}
