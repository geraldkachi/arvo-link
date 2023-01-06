import clsx from "clsx";
import { useEffect, useState } from "react";
import Paginator from "./Paginator";


const Loader = () => <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-[#3B71F7]"></div>

export interface ITableProps<TRow> {
  id?: string;
  bulkAction?: Array<{
    text: React.ReactNode;
    action: (ids: string[]) => void;
    type?: "info" | "warning" | "danger" | "success";
  }>;
  topSlot?: React.ReactNode;
  data?: TRow[] | undefined;
  // data?: Nullable<TRow[]> | undefined;
  loading?: boolean;
  emptyMessage?: React.ReactNode;
  columns: Array<{
    header: React.ReactNode;
    view: (
      row: TRow,
      index: number
    ) =>
      | React.ReactNode
      | {
          mobile?: React.ReactNode | false;
          desktop: React.ReactNode;
        };
  }>;
  clickRowAction?: (row: TRow, index: number) => void;
  rowActions?: (row: TRow, index: number) => Array<any>;
  hideActionName?: boolean;
  pagination?: {
    setPage?: (page: number) => void;
    page?: number;
    pageSize?: number;
    setPageSize?: (pageSize: number) => void;
    totalRows?: number;
  };
  noDivider?: boolean;
  showCheckbox?: boolean;
  selectedRows?: (selections: string[]) => void;
  clearSelection?: boolean;
  title?: string
  subtitle?: string
}

export function Table<TRow extends {}>({
  id = "",
  columns,
  hideActionName = false,
  noDivider = false,
  showCheckbox = false,
  ...props
}: ITableProps<TRow>) {
  const data = props.data ?? [];
  const [isMobile, setIsMobile] = useState(false);

  const [selection, setSelection] = useState<string[]>([]);

  const toggleRow = (id: string) => {
    setSelection((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id]
    );
  };
  const toggleAll = () =>
    setSelection((current) =>
      current.length === data.length
        ? []
        : data.map((item: any) => (item as TRow & { _id: string })?._id)
    );

  useEffect(() => {
    if (showCheckbox && props.selectedRows) {
      props.selectedRows?.(selection);
    }
  }, [selection]);
  useEffect(() => {
    if (props.clearSelection) {
      setSelection([]);
    }
  }, [props.clearSelection]);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    // <ErrorBoundary>
      <div
        className={clsx([
          "flex flex-col relative overflow-y-hidden w-full h-full bg-white rounded-lg",
        ])}
      >
        <div>
          {/* header */}
          {props.topSlot && <div className="px-3  py-1">{props.topSlot}</div>}
        </div>
        {/* <!-- body --> */}
        <div className="flex-1 overflow-hidden relative">
          {props.loading && (
            <div className="absolute top-0 w-full  z-10 text-center">
              <Loader />
              {/* <Loader type="bar" /> */}
            </div>
          )}
          <div className="h-full w-full overflow-auto  relative ">
            <table className="table table-auto w-full border-collapse text-mid-night-80">
              <thead className=" sticky top-0">
                <tr className="">
                  {props.bulkAction && <th></th>}
                  {showCheckbox && (
                    <th
                      className=" px-6 py-3 whitespace-nowrap
                  bg-pearl-2  first:rounded-tl-lg max-w-sm"
                    >
                      <input
                        type="checkbox"
                        title="status"
                        name="status"
                        value={""}
                        onChange={toggleAll}
                        checked={selection.length === data.length}
                        className="h-[15px] w-[15px]"
                      />
                    </th>
                  )}
                  {columns.map((col) => {
                    const view = data[0] && col.view(data[0], 0);
                    const isAnObject =
                      typeof view !== "string" &&
                      typeof view !== "boolean" &&
                      typeof view !== "number" &&
                      view &&
                      "desktop" in view;
                    if (id) {
                      return null;
                    }
                    if (
                      // isMobile.get &&
                      isMobile &&
                      isAnObject &&
                      view &&
                      view?.mobile === false
                    )
                      return null;
                    return (
                      <th
                        key={`${col.header}-head`}
                        className={`text-mid-night-80 text-[15px] font-normal text-left px-5 py-3 whitespace-nowrap bg-pearl-2  last:rounded-tr-lg max-w-sm ${
                          !showCheckbox && "first:rounded-tl-lg"
                        }`}
                      >
                        <span>{col.header}</span>
                      </th>
                    );
                  })}
                  {props.rowActions &&
                    props.rowActions({} as any, 0).length > 0 && (
                      <th className="text-mid-night-80 text-[15px] font-normal text-right px-6 py-3 whitespace-nowrap bg-pearl-2  first:rounded-tl-lg last:rounded-tr-lg max-w-sm">
                        {hideActionName ? "" : "Action"}
                      </th>
                    )}
                </tr>
              </thead>
              <tbody className="px-4 mt-5 text-mid-night-80/80 ">
                {data.length < 1 && !props.loading && (
                  <tr className=" text-base">
                    <td colSpan={columns.length + 1} className="py-40">
                      <div className="w-full grid place-content-center">
                        {props.emptyMessage ?? (
                          <TableEmpty
                            // {...{title}}
                            // {...{subtitle}}
                          />
                        )}
                      </div>
                    </td>
                  </tr>
                )}
                {data.map((row, rowIndex) => (
                  <tr
                    key={`row-${rowIndex}`}
                    className={clsx(
                      "px-5",
                      "text-sm",
                      noDivider
                        ? ""
                        : "border-b last:border-b-0 border-pearl-3",
                      "bg-white ",
                      props.clickRowAction &&
                        "hover:bg-fara-blue/10 cursor-pointer"
                    )}
                  >
                    {showCheckbox && (
                      <td className="pr-6 py-5  text-right cursor-pointer  justify-center">
                        <input
                          type="checkbox"
                          title="status"
                          name="status"
                          value={""}
                          checked={selection.includes(
                            (row as TRow & { _id: string })?._id
                          )}
                          onChange={() =>
                            toggleRow((row as TRow & { _id: string })?._id)
                          }
                          className="h-[15px] w-[15px] !checked:bg-fara-blue"
                        />
                      </td>
                    )}
                    {columns.map((col, colIndex) => (
                      <TableCol
                        key={`row-${rowIndex} + col-${colIndex}`}
                        {...{
                          col,
                          row,
                          rowIndex,
                          id,
                          isMobile,
                          // isMobile: isMobile.get,
                          clickRowAction: props.clickRowAction,
                        }}
                      />
                    ))}
                    {props.rowActions &&
                      props.rowActions({} as any, 0).length > 0 && (
                        <td className="px-2">
                          <div className="flex justify-end pr-6 pl-5">
                            {/* <Action
                              variant="horizontal"
                              options={props.rowActions(row, rowIndex)}
                            /> */}
                          </div>
                        </td>
                      )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* footer */}
        {props.pagination && (
          <div className="border-t h-14 border-mid-night-40 relative z-0 bg-white">
            {/* pagination */}
            <Pagination
              {...props.pagination}
              currentLength={data.length}
              loading={props.loading}
              withNumber
            />
          </div>
        )}
      </div>
    // </ErrorBoundary>
  );
}

const TableCol = <TRow,>({
  col,
  rowIndex,
  id,
  isMobile,
  row,
  clickRowAction,
}: {
  rowIndex: number;
  id: string;
  isMobile: boolean;
  col: ITableProps<TRow>["columns"][number];
  row: TRow;
  clickRowAction: ITableProps<TRow>["clickRowAction"];
}) => {
  const view = col.view(row, rowIndex);
  const viewIsAnObject =
    typeof view !== "string" &&
    typeof view !== "boolean" &&
    typeof view !== "number" &&
    view &&
    "desktop" in view;
  if (id) {
    return null;
  }
  if (isMobile && viewIsAnObject && view.mobile === false) return null;
  return (
    <td
      className={clsx(
        "px-6 py-5 text-left font-medium max-w-[230px] overflow-x-hidden",
        clickRowAction && "cursor-pointer"
      )}
      onClick={(e) => {
        if (
          !(
            "tagName" in e.target &&
            //@ts-expect-error tagName not defined
            ["A", "BUTTON"].includes(e.target.tagName)
          )
        ) {
          clickRowAction?.(row, rowIndex);
        }
      }}
    >
      {!viewIsAnObject
        ? view
        : isMobile && view.mobile
        ? view.mobile
        : view.desktop}
    </td>
  );
};

const Pagination = ({
  page = 1,
  pageSize = 1,
  totalRows = 0,
  setPage,
  setPageSize,
  currentLength,
  loading,
}: {
  setPage?: (page: number) => void;
  page?: number;
  pageSize?: number;
  setPageSize?: (pageSize: number) => void;
  totalRows?: number;
  currentLength: number;
  loading?: boolean;
  withNumber: boolean;
}) => {
  // const query = useRouteQuery();
  const pageStart = pageSize * (page - 1);

  return (
    <div className="flex items-center justify-between h-full px-7 py-1 text-sm text-gm-blue-main">
      <div className="mr-10">
        <span className="">Items per page</span>
        <select
          className="border border-fara-blue/30 w-12 ml-2 h-8 bg-transparent"
          value={pageSize}
          onChange={(e) => {
            setPageSize?.(+e.target.value);
            // query.setURLQuery({ limit: e.target.value });
          }}
        >
          {[10, 20, 25, 30, 40, 50, 100].map((size) => (
            <option key={size.toString()}>{size}</option>
          ))}
        </select>
      </div>
      {currentLength > 0 && (
        <span className="mr-5">
          {pageStart + 1} - {pageStart + currentLength} of {totalRows} items
        </span>
      )}
      <Paginator
        page={page}
        pageSize={pageSize}
        loading={loading}
        currentLength={currentLength}
        setPage={(p) => {
          setPage?.(p);
          // query.setURLQuery({ page: p.toString() });
        }}
        totalRows={totalRows}
      />
    </div>
  );
};

// {/* <img src={props.image ?? "/icons/table-empty.svg"} /> */}
export const TableEmpty = (props: {
  title?: string;
  subtitle?: string;
  image?: string;
}) => {
  return (
    <div className="max-w-[564px]  text-center flex flex-col items-center ">
      <p className="text-3xl font-extrabold text-mid-night-80 mt-4 text-[#02123B]">
        {props.title}
      </p>
      <p className="text-base text-mid-night-40 mt-2">{props.subtitle}</p>
    </div>
  );
};
