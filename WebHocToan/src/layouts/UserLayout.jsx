import { Outlet, useLocation } from "react-router-dom";
import { sidebar } from "../data/data";

export const UserLayout = () => {
    const location = useLocation();
  return (
    <>
      <div className="flex">
        <div className="w-1/6 text-white bg-blue-700 min-h-screen px-3 py-5">
          <div className="text-4xl text-center font-bold mb-3">FUZZYMATH</div>
          {sidebar.map((side) => (
            <div className={`text-xl font-medium my-6 py-4 rounded-2xl pl-5 ${location.pathname.includes(side.link)?`bg-indigo-600 border border-white`:``}`}>{side.content}</div>
          ))}
        </div>
        <div className="w-5/6 p-3">
          <Outlet />
        </div>
      </div>
    </>
  );
};
