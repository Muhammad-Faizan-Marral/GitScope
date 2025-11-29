"use client";
import React from "react";
import RepoPagination from "./RepoPagination";
import { useStore } from "@/app/lib/store";
import { useEffect } from "react";

const RepoTable = () => {
const repos = useStore((state) => state.repos);
  const username = useStore((state) => state.username);
  const page = useStore((state) => state.page);
  const perPage = useStore((state) => state.perPage);
  const setRepos = useStore((s) => s.setRepos);
  const setLoading = useStore((s) => s.setLoading);

  useEffect(() => {
    if (!username) return;

    const fetchRepos = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          `/api/github/repo/repos?username=${encodeURIComponent(
            username
          )}&page=${page}&per_page=${perPage}`
        );

        const data = await res.json();
        setRepos(data.repos || []);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, [page]);
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
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {repos.map((item, index) => {
                    console.log(item);
                    return (
                      <tr key={index} className="hover:bg-gray-600">
                        <td className="p-2 sm:p-2.5 py-4 sm:py-7 whitespace-nowrap text-xs sm:text-sm lg:text-lg font-medium text-black">
                          {item.name}
                        </td>
                        <td className="p-2 sm:p-2.5 py-4 sm:py-7 text-xs sm:text-sm lg:text-lg text-gray-400 max-w-xs">
                          <span className="line-clamp-2 sm:line-clamp-1">
                            {item.description}
                          </span>
                        </td>
                        <td className="p-2 sm:p-3.5 py-4 sm:py-7 whitespace-nowrap text-xs sm:text-sm lg:text-lg text-gray-800 sm:pl-8 lg:pl-20">
                          <span className="bg-gray-900 text-white px-2 sm:px-2.5 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm">
                            {item.language}
                          </span>
                        </td>
                      </tr>
                    );
                  })}
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
