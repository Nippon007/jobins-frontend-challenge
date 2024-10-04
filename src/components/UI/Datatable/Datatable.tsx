import React, { useState } from 'react';
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
  getFilteredRowModel,
  getPaginationRowModel,
} from '@tanstack/react-table';

import SelectField from '../Select';
import { RxCaretLeft, RxCaretRight } from 'react-icons/rx';
import SearchFilter from './SearchFilter';
import { MdOutlineError } from 'react-icons/md';

interface ReactTableProps<T extends object> {
  data: T[];
  columns: ColumnDef<T>[] | any;
  loading?: boolean;
  wrapperClassName?: string;
  pagination?: boolean;
  isError?: boolean;
}

const Pagination = (props: any) => {
  const paginationGroups: any = [];
  const paginationGroupLimit = 5;
  const currentPage = props.getState().pagination.pageIndex;

  for (let i = 0; i < props.getPageCount(); i++) {
    // Start a new group if needed
    if (i % paginationGroupLimit === 0 && i > 0) {
      paginationGroups.push([<span key={`ellipsis-${i}`}>...</span>]);
    }

    // Create button for the current page
    const button = (
      <button
        className={`pagination-button ${currentPage === i ? 'active' : ''}`}
        key={i}
        onClick={() => props.setPageIndex(i)}
      >
        {i + 1}
      </button>
    );

    // Add the button to the latest group
    if (paginationGroups.length === 0) {
      paginationGroups.push([button]);
    } else {
      paginationGroups[paginationGroups.length - 1].push(button);
    }
  }

  if (
    paginationGroups.length > 0 &&
    paginationGroups[paginationGroups.length - 1].length > paginationGroupLimit
  ) {
    paginationGroups[paginationGroups.length - 1].unshift(
      <span key="last-ellipsis">...</span>
    );
  }

  const getCurrentPaginationGroup = () => {
    return paginationGroups.find((group: any) =>
      group.some((button: any) => button.key === String(currentPage))
    );
  };

  const paginationOptions = [
    {
      label: '5',
      value: '5',
    },
    {
      label: '10',
      value: '10',
    },
    {
      label: '20',
      value: '20',
    },
    {
      label: '30',
      value: '30',
    },
    {
      label: '40',
      value: '40',
    },
    {
      label: '50',
      value: '50',
    },
  ];

  return (
    <div className="flex flex-wrap items-center justify-between bg-white rounded-b-lg py-2 px-6 text-gray-500 flex gap-2 text-sm">
      <div className="flex gap-2 items-center">
        Showing
        <SelectField
          options={paginationOptions}
          menuPlacement="top"
          defaultValue={props.getState().pagination.pageSize}
          onChange={(val) => {
            if (val) {
              props.setPageSize(Number(val.value));
            }
          }}
          placeholder={'5'}
          customStyles={{
            border: '1px solid #e5e7eb',
            padding: '0 0.25rem',
            fontSize: '0.875rem',
          }}
        />
        of {props.getRowCount()}
      </div>

      <div className="flex items-center justify-center space-x-1">
        <button
          className="pagination-button"
          onClick={() => props.previousPage()}
          disabled={!props.getCanPreviousPage()}
        >
          <RxCaretLeft />
        </button>

        {getCurrentPaginationGroup()?.map((button: any) => button)}

        <button
          className="pagination-button"
          onClick={() => props.nextPage()}
          disabled={!props.getCanNextPage()}
        >
          <RxCaretRight />
        </button>
      </div>
    </div>
  );
};

const Datatable = <T extends object>(props: ReactTableProps<T>) => {
  const {
    data,
    columns,
    wrapperClassName,
    pagination,
    isError = false,
  } = props;

  const [search, setSearch] = useState('');

  const [currentPage, setCurrentPage] = useState({
    pageIndex: 0,
    pageSize: 5,
  });

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    state: {
      globalFilter: search,
      pagination: currentPage,
    },
    onGlobalFilterChange: setSearch,
    onPaginationChange: setCurrentPage,
  });

  const statusOptions = [
    {
      label: 'All',
      value: 'all',
    },
    {
      label: 'Completed',
      value: 'completed',
    },
    {
      label: 'Pending',
      value: 'pending',
    },
  ];

  return (
    <>
      {isError ? (
        <div
          className={`bg-white p-4 flex flex-col justify-center items-center h-full ${wrapperClassName}`}
        >
          <h1 className="text-lg flex items-center justify-center">
            <MdOutlineError className="text-danger mr-2" />
            Error fetching data !!!
          </h1>
        </div>
      ) : (
        <>
          <div className={`bg-gray-100  pt-3 pb-3 ${wrapperClassName}`}>
            <div className="grid grid-cols-12 grid-flow-col gap-4">
              <div className="col-span-2">
                <SelectField
                  options={statusOptions}
                  showLabelInInput
                  label={'Status'}
                  placeholder={'Status : All'}
                />
              </div>
              <div className="col-span-3">
                <SearchFilter search={search} setSearch={setSearch} />
              </div>
              <div className="col-span-2 col-start-11">
                <SelectField options={[]} placeholder="Filter by date range" />
              </div>
            </div>
          </div>
          <div
            className={`grow bg-white ${pagination ? 'rounded-t-lg' : 'rounded-lg'} ${wrapperClassName}`}
          >
            <div className="h-full w-full relative overflow-auto">
              <table className={`xl:absolute top-0 left-0 w-full text-dark `}>
                <thead>
                  {table.getHeaderGroups().map((headerGroup) => (
                    <tr
                      key={headerGroup.id}
                      className="shadow-[0_1px_0px_0px_#e5e7eb] sticky top-0 bg-white"
                    >
                      {headerGroup.headers.map((header) => (
                        <th
                          className="px-6 py-3 text-left text-xs font-normal text-gray-400 uppercase	"
                          key={header.id}
                        >
                          {flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                        </th>
                      ))}
                    </tr>
                  ))}
                </thead>
                <tbody>
                  {table.getRowModel().rows.map((row) => {
                    return (
                      <tr key={row.id} className="border-b">
                        {row.getVisibleCells().map((cell) => (
                          <td
                            key={`${row.id}_${cell.column.id}`}
                            className="px-6 text-sm py-4 whitespace-nowrap"
                          >
                            {flexRender(
                              cell.column.columnDef.cell,
                              cell.getContext()
                            )}
                          </td>
                        ))}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
          {pagination && <Pagination {...table} />}
        </>
      )}
    </>
  );
};

export default Datatable;
