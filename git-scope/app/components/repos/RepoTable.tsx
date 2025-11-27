import React from "react";
import RepoPagination from "./RepoPagination";

const RepoTable = () => {
  return (
    <div className="mt-6">
      <div className="flex flex-col w-full px-2 sm:px-4">
        <div className="-m-1.5 overflow-x-auto">
          <div className="p-1.5 min-w-full inline-block align-middle">
            <div className="overflow-hidden">
              <table className="min-w-full divide-y divide-gray-400">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      className="p-2 sm:p-2.5 text-start text-xs sm:text-sm lg:text-base font-medium text-gray-400"
                    >
                      NAME
                    </th>
                    <th
                      scope="col"
                      className="p-2 sm:p-2.5 text-start text-xs sm:text-sm lg:text-base font-medium text-gray-400"
                    >
                      DESCRIPTION
                    </th>
                    <th
                      scope="col"
                      className="p-2 sm:p-2.5 sm:pl-8 lg:pl-20 text-start text-xs sm:text-sm lg:text-base font-medium text-gray-400"
                    >
                      LANGUAGE
                    </th>
                    <th
                      scope="col"
                      className="p-2 sm:p-2.5 text-end text-xs sm:text-sm lg:text-base font-medium text-gray-400"
                    >
                      STARS
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-gray-900">
                    <td className="p-2 sm:p-2.5 py-4 sm:py-7 whitespace-nowrap text-xs sm:text-sm lg:text-lg font-medium text-black">
                      React Dashboard
                    </td>
                    <td className="p-2 sm:p-2.5 py-4 sm:py-7 text-xs sm:text-sm lg:text-lg text-gray-400 max-w-xs">
                      <span className="line-clamp-2 sm:line-clamp-1">
                        A modern dashboard built with React and TypeScript
                      </span>
                    </td>
                    <td className="p-2 sm:p-3.5 py-4 sm:py-7 whitespace-nowrap text-xs sm:text-sm lg:text-lg text-gray-800 sm:pl-8 lg:pl-20">
                      <span className="bg-gray-900 text-white px-2 sm:px-2.5 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm">
                        Javascript
                      </span>
                    </td>
                    <td className="p-2 sm:p-2.5 py-4 sm:py-7 whitespace-nowrap text-end text-xs sm:text-sm lg:text-base font-medium text-gray-800">
                      300
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-900">
                    <td className="p-2 sm:p-2.5 py-4 sm:py-7 whitespace-nowrap text-xs sm:text-sm lg:text-lg font-medium text-black">
                      Vue Components
                    </td>
                    <td className="p-2 sm:p-2.5 py-4 sm:py-7 text-xs sm:text-sm lg:text-lg text-gray-400 max-w-xs">
                      <span className="line-clamp-2 sm:line-clamp-1">
                        Reusable component library for Vue.js applications
                      </span>
                    </td>
                    <td className="p-2 sm:p-3.5 py-4 sm:py-7 whitespace-nowrap text-xs sm:text-sm lg:text-lg text-gray-800 sm:pl-8 lg:pl-20">
                      <span className="bg-gray-900 text-white px-2 sm:px-2.5 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm">
                        Javascript
                      </span>
                    </td>
                    <td className="p-2 sm:p-2.5 py-4 sm:py-7 whitespace-nowrap text-end text-xs sm:text-sm lg:text-base font-medium text-gray-800">
                      450
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-900">
                    <td className="p-2 sm:p-2.5 py-4 sm:py-7 whitespace-nowrap text-xs sm:text-sm lg:text-lg font-medium text-black">
                      Python API
                    </td>
                    <td className="p-2 sm:p-2.5 py-4 sm:py-7 text-xs sm:text-sm lg:text-lg text-gray-400 max-w-xs">
                      <span className="line-clamp-2 sm:line-clamp-1">
                        RESTful API framework with authentication support
                      </span>
                    </td>
                    <td className="p-2 sm:p-3.5 py-4 sm:py-7 whitespace-nowrap text-xs sm:text-sm lg:text-lg text-gray-800 sm:pl-8 lg:pl-20">
                      <span className="bg-gray-900 text-white px-2 sm:px-2.5 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm">
                        Python
                      </span>
                    </td>
                    <td className="p-2 sm:p-2.5 py-4 sm:py-7 whitespace-nowrap text-end text-xs sm:text-sm lg:text-base font-medium text-gray-800">
                      620
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <RepoPagination />
    </div>
  );
};

export default RepoTable;