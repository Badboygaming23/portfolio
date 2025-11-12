import React from 'react';
import { ArrowLeftIcon } from './icons/ArrowLeftIcon';
import { ArrowRightIcon } from './icons/ArrowRightIcon';

interface PaginationControlsProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const PaginationControls: React.FC<PaginationControlsProps> = ({ currentPage, totalPages, onPageChange }) => {
  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const baseButtonClass = "px-4 py-2 rounded-md transition-colors duration-200 flex items-center space-x-2 text-sm font-medium";
  const activeButtonClass = "bg-indigo-600 hover:bg-indigo-500 text-white active:scale-95 active:brightness-90";
  const disabledButtonClass = "bg-slate-600 text-slate-400 cursor-not-allowed";

  return (
    <div className="flex justify-center items-center space-x-4 mt-12">
      <button
        onClick={handlePrevious}
        disabled={currentPage === 1}
        className={`${baseButtonClass} ${currentPage === 1 ? disabledButtonClass : activeButtonClass}`}
        aria-label="Go to previous page"
      >
        <ArrowLeftIcon className="w-4 h-4" />
        <span>Previous</span>
      </button>
      <span className="text-slate-300 text-sm">
        Page {currentPage} of {totalPages}
      </span>
      <button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        className={`${baseButtonClass} ${currentPage === totalPages ? disabledButtonClass : activeButtonClass}`}
        aria-label="Go to next page"
      >
        <span>Next</span>
        <ArrowRightIcon className="w-4 h-4" />
      </button>
    </div>
  );
};

export default PaginationControls;
