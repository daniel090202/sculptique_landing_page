import { ChevronRight, ChevronsRight } from "lucide-react";

// Types
interface PaginationProps {
  currentPage?: number;
  totalPages?: number;
  onPageChange?: (page: number) => void;
}

const Pagination = ({
  currentPage = 1,
  totalPages = 3,
  onPageChange,
}: PaginationProps) => {
  const handlePageClick = (page: number): void => {
    if (page >= 1 && page <= totalPages && page !== currentPage) {
      onPageChange?.(page);
    }
  };

  const handleNext = (): void => {
    if (currentPage < totalPages) {
      onPageChange?.(currentPage + 1);
    }
  };

  const handleLast = (): void => {
    if (currentPage < totalPages) {
      onPageChange?.(totalPages);
    }
  };

  return (
    <div className="flex items-center gap-2">
      {/* Page Numbers */}
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <button
          key={page}
          onClick={() => handlePageClick(page)}
          className={`
            w-8 h-8 flex items-center justify-center rounded
            transition-colors duration-200 font-semibold font-nunito
            ${
              page === currentPage
                ? "text-[#7b7b7b] text-[24px] font-[1200] cursor-default"
                : "text-[#FA8A8A] hover:text-gray-600 cursor-pointer"
            }
          `}
          disabled={page === currentPage}
        >
          {page}
        </button>
      ))}

      {/* Next Button */}
      <button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        className={`
          w-8 h-8 flex items-center justify-center rounded
          transition-colors duration-200 font-nunito
          ${
            currentPage === totalPages
              ? "text-gray-300 cursor-not-allowed"
              : "text-[#FA8A8A] hover:text-gray-600 cursor-pointer"
          }
        `}
        aria-label="Next page"
      >
        <ChevronRight className="w-4 h-4" />
      </button>

      {/* Last Page Button */}
      <button
        onClick={handleLast}
        disabled={currentPage === totalPages}
        className={`
          w-8 h-8 flex items-center justify-center rounded
          transition-colors duration-200 font-nunito font-[600]
          ${
            currentPage === totalPages
              ? "text-gray-300 cursor-not-allowed"
              : "text-[#FA8A8A] hover:text-gray-600 cursor-pointer"
          }
        `}
        aria-label="Last page"
      >
        <ChevronsRight className="w-4 h-4" />
      </button>
    </div>
  );
};

export default Pagination;
