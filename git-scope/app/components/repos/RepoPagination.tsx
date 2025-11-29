"use client";
import React, { useState, useEffect } from "react";
import { useStore } from "@/app/lib/store";

const RepoPagination = () => {
  const setPage = useStore((s) => s.setPage);
  const userInfo = useStore((state) => state.userInfo);
  const perPage = useStore((state) => state.perPage);

  const totalPages = Math.ceil((userInfo?.public_repos ?? 0) / perPage);
  const maxVisible = 3;

  const [currentPage, setCurrentPage] = useState(1);

  // Sync store with pagination clicks
  const updatePage = (p: number) => {
    setCurrentPage(p);
    setPage(p);
  };

  // Generate stable pages
  const getVisiblePages = () => {
    const pages = [];

    // Always add PAGE 1
    pages.push(1);

    // Decide left side numbers
    let left = Math.max(2, currentPage - 1);
    let right = Math.min(totalPages - 1, currentPage + 1);

    // If near start, show first few pages normally
    if (currentPage <= maxVisible) {
      left = 2;
      right = Math.min(totalPages - 1, maxVisible);
    }

    // If near end, show last few pages
    if (currentPage >= totalPages - maxVisible + 1) {
      left = Math.max(2, totalPages - maxVisible);
      right = totalPages - 1;
    }

    // Add left gap
    if (left > 2) {
      pages.push("...");
    }

    // Add middle pages
    for (let i = left; i <= right; i++) {
      pages.push(i);
    }

    // Add right gap
    if (right < totalPages - 1) {
      pages.push("...");
    }

    // Always add LAST page
    if (totalPages > 1) {
      pages.push(totalPages);
    }

    return pages;
  };

  const visiblePages = getVisiblePages();

  const goPrev = () => {
    if (currentPage > 1) updatePage(currentPage - 1);
  };

  const goNext = () => {
    if (currentPage < totalPages) updatePage(currentPage + 1);
  };

  return (
    <div className="flex items-center justify-between">
      <h1 className="text-xl">Showing results…</h1>

      <nav className="flex items-center gap-x-1" aria-label="Pagination">
        {/* PREVIOUS */}
        <button
          title="PREVIOUS_Button"
          onClick={goPrev}
          disabled={currentPage === 1}
          className="min-h-9.5 min-w-9.5 py-2 px-3 rounded-lg"
        >
          &lt;
        </button>

        {/* MAIN PAGINATION */}
        <div className="flex items-center gap-x-1">
          {visiblePages.map((item, index) => (
            <button
              key={index}
              onClick={() => item !== "..." && updatePage(item)}
              disabled={item === "..."}
              className={`min-h-9.5 min-w-9.5 py-2 px-3 rounded-lg
                ${
                  item === currentPage
                    ? "bg-blue-500 text-white"
                    : "text-gray-400 hover:bg-gray-300"
                }
              `}
            >
              {item}
            </button>
          ))}
        </div>

        {/* NEXT */}
        <button
          title="NEXT_Button"
          onClick={goNext}
          disabled={currentPage === totalPages}
          className="min-h-9.5 min-w-9.5 py-2 px-3 rounded-lg"
        >
          &gt;
        </button>
      </nav>
    </div>
  );
};

export default RepoPagination;
