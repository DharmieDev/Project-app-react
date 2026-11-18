import Filters from "../components/filters";
import AddTask from "../components/addTask";
import SearchBar from "../components/searchBar";

const today = new Date(Date.now()).toLocaleDateString("en-GB", {
  weekday: "long",
  day: "numeric",
  month: "long",
});

function Tasks() {
  return (
    <div className="max-w-160 mx-auto pt-10 px-5 pb-18">
      <h1 className="text-[#e8edf7]! text-7xl font-extrabold font-bricolage! leading-[0.95] tracking-[-0.03em]">
        Tasks
      </h1>
      <p className="text-gray-400! mt-2.5 text-base font-light">{today}</p>
      <AddTask />
      <SearchBar />
      <Filters />
    </div>
  );
}

export default Tasks;
