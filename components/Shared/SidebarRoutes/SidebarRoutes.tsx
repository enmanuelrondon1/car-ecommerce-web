import { dataAdminSidebar, dataGeneralSidebar } from "./Sidebar.data";
import { SidebarItem } from "./SidebarItem";
import { FaUserCircle } from "react-icons/fa";

export const SidebarRoutes = () => {

  return (
    <>
      <div
        className={`fixed bottom-0 top-0 z-20 flex h-screen w-3/4 flex-col justify-between bg-white dark:bg-gray-900 dark:text-white px-8 pb-6 pt-16 text-black transition-all duration-200 md:hidden rounded-r-xl shadow-md -mx-8 `}
      >
        <div>
          <div className="card mb-8">
            <div className="flex items-center justify-start gap-3">
              <FaUserCircle size={50} />
              <div>
                <h1>Hello user</h1>
                <h1 className="text-sm text-slate-500 ">Premiun User</h1>
              </div>
            </div>
          </div>
          <div className="p-2 md:p-6">
            <p className="mb-2 text-slate-500">General</p>
            {dataGeneralSidebar.map((item) => (
              <SidebarItem key={item.label} item={item} />
            ))}
          </div>
          <div className="p-2 md:p-6">
          <hr className="border-t border-gray-300 my-4" />


            <p className="mb-2 text-slate-500">ADMIN</p>
            {dataAdminSidebar.map((item) => (
              <SidebarItem key={item.label} item={item} />
            ))}
          </div>
        </div>

        <div className="text-center justify-center items-center">
          <hr className="border-t border-gray-300 my-4" />
          <h1>
            Made with ❤ by
            <button type="button" className="button   mx-4">
              <span className="fold"></span>

              <div className="points_wrapper">
                <i className="point"></i>
                <i className="point"></i>
                <i className="point"></i>
                <i className="point"></i>
                <i className="point"></i>
                <i className="point"></i>
                <i className="point"></i>
                <i className="point"></i>
                <i className="point"></i>
                <i className="point"></i>
              </div>

              <span className="inner">
                <svg
                  className="icon"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                >
                  <polyline points="13.18 1.37 13.18 9.64 21.45 9.64 10.82 22.63 10.82 14.36 2.55 14.36 13.18 1.37"></polyline>
                </svg>
                <a target="_blank" href="https://github.com/enmanuelrondon1">
                  Enmanuel
                </a>{" "}
              </span>
            </button>
          </h1>
        </div>
      </div>
    </>
  );
};
