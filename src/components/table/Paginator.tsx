// import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import { useMemo } from "react";

interface ITmpPaginator {
  page: number;
  setPage?: (page: number) => void;
  pageSize: number;
  totalRows?: number;
  currentLength: number;
  loading?: boolean;
}
const LEFT_PAGE = "LEFT";
const RIGHT_PAGE = "RIGHT";
const pageNeighbours = 0;
type PageNumber = "LEFT" | "RIGHT" | number;
const Paginator = ({
  page = 1,
  pageSize = 1,
  setPage,
  loading = false,
  totalRows = 0,
  currentLength,
}: ITmpPaginator) => {
  const pageNumbers = useMemo<PageNumber[]>(() => {
    const totalPages = totalRows ? Math.ceil(totalRows / pageSize) : 0;
    const totalNumbers = pageNeighbours * 2 + 3;
    const totalBlocks = totalNumbers + 2;
    if (totalPages > totalBlocks) {
      const startPage = Math.max(2, page - pageNeighbours);
      const endPage = Math.min(totalPages - 1, page + pageNeighbours);

      let pages: Array<PageNumber> = numberRange(startPage, endPage);

      const hasLeftSpill = startPage > 2;
      const hasRightSpill = totalPages - endPage > 1;
      const spillOffset = totalNumbers - (pages.length + 1);
      switch (true) {
        // handle: (1) ... {5 6} [7] {8 9} (10)
        case hasLeftSpill && !hasRightSpill: {
          const extraPages = numberRange(
            startPage - spillOffset,
            startPage - 1
          );
          pages = [LEFT_PAGE, ...extraPages, ...pages];
          break;
        }

        // handle: (1) {2 3} [4] {5 6} ... (10)
        case !hasLeftSpill && hasRightSpill: {
          const extraPages = numberRange(endPage + 1, endPage + spillOffset);
          pages = [...pages, ...extraPages, RIGHT_PAGE];
          break;
        }

        // handle: (1) ... {4 5} [6] {7 8} ... (10)
        case hasLeftSpill && hasRightSpill:
        default: {
          pages = [LEFT_PAGE, ...pages, RIGHT_PAGE];
          break;
        }
      }

      return [1, ...pages, totalPages];
    }
    return numberRange(1, totalPages);
  }, [page, totalRows, pageSize]);
  const getRemainingPageNums = (index: number) => {
    const lowerBound = Number(pageNumbers[index - 1]);
    const upperBound = Number(pageNumbers[index + 1]);
    return numberRange(lowerBound + 1, upperBound - 1);
  };
  const isActivePage = (p: number) => {
    return page === p;
  };
  const leftArrowDisabled = page === 1 || loading;

  const rightArrowDisabled = page * pageSize >= (totalRows ?? 1) || loading;

  const btnPrevClick = () => setPage?.(page - 1);

  const btnNextClick = () => setPage?.(page + 1);
  return (
    <div className="Paginator">
      <button
        title="Previous"
        onClick={btnPrevClick}
        disabled={leftArrowDisabled}
        className={[
          "inline-flex items-center justify-center prev",
          leftArrowDisabled
            ? "opacity-50 cursor-not-allowed"
            : "cursor-pointer",
        ].join(" ")}
      >
        left
        {/* <ChevronLeftIcon className="h-5 w-5 text-white" /> */}
      </button>

      {pageNumbers.map((pageNum, index) => {
        if (isPageNumber(pageNum)) {
          return (
            <button
              disabled={loading}
              onClick={() => setPage?.(Number(pageNum))}
              key={`table-paginator-item_${index}`}
              className={`item text-xs lg:text-base ${
                isActivePage(pageNum as number) ? "active" : ""
              }`}
            >
              {pageNum}
            </button>
          );
        }
        return (
          <div key={`table-paginator-dropdown_${index}`} className={"dropdown"}>
            <button className={"item text-xs lg:text-base"}>...</button>
            <ul className="dropdown-menu">
              {getRemainingPageNums(index).map(
                (otherPageNum, otherPageIndex) => (
                  <li
                    onClick={() => setPage?.(otherPageNum)}
                    key={`hellip${otherPageIndex}`}
                    className=" text-xs lg:text-base"
                  >
                    {otherPageNum}
                  </li>
                )
              )}
            </ul>
          </div>
        );
      })}

      <button
        title="Next"
        onClick={btnNextClick}
        disabled={rightArrowDisabled}
        className={[
          "inline-flex items-center justify-center next",
          rightArrowDisabled
            ? "opacity-50 cursor-not-allowed"
            : "cursor-pointer",
        ].join(" ")}
      >
        right
        {/* <ChevronRightIcon className="h-5 w-5 text-white" /> */}
      </button>
    </div>
  );
};

const numberRange = (start: number, end: number): number[] => {
  const numbers: number[] = [];
  for (let i = start; i <= end; i++) {
    numbers.push(i);
  }
  return numbers;
};
const isPageNumber = (pageNum: string | number): boolean => {
  const allowed: Array<string | number> = [LEFT_PAGE, RIGHT_PAGE];
  return !allowed.includes(pageNum);
};
export default Paginator;
