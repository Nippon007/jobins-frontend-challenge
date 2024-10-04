import React, { useMemo } from 'react';
import Datatable from '../UI/Datatable/Datatable';
import TabComponent from '../UI/Tab';
import { useUserList } from '../../queries/userQueries';
import UserTableSkeleton from './UserTableSkeleton';

const HomeTab = () => {
  const { data: userData, isLoading: dataLoading, isError } = useUserList();

  const columnsDefs = useMemo(() => {
    return [
      {
        header: 'ID',
        accessorKey: 'id',
      },
      {
        header: 'Customer',
        accessorKey: 'name',
      },
      {
        header: 'Date',
        accessorKey: 'createdAt',
        cell: (info: any) => new Date(info.getValue()).toLocaleString(),
      },
      {
        header: 'Total',
        accessorKey: 'total',
        cell: (info: any) => `$${parseFloat(info.getValue()).toFixed(2)}`,
      },
      {
        header: 'Method',
        accessorKey: 'method',
      },
      {
        header: 'Status',
        accessorKey: 'status',
        cell: ({ row }) => {
          const status = row.original.status;
          const isCompleted = status;
          return (
            <span
              className={`${isCompleted ? 'text-green-500' : 'text-yellow-400'}`}
            >
              {isCompleted ? 'Completed' : 'Pending'}
            </span>
          );
        },
      },
      {
        header: 'Action',
        cell: () => {
          return (
            <span
              className="text-blue cursor-pointer"
              onClick={() => {
              }}
            >
              View Details
            </span>
          );
        },
      },
    ];
  }, []);

  const content = (
    <>
      <Datatable
        data={userData?.data || []}
        columns={columnsDefs}
        pagination={true}
        isError={isError}
      />
    </>
  );

  const tabs = [
    {
      title: 'All Orders',
      content: dataLoading ? <UserTableSkeleton /> : content,
    },
    {
      title: 'Completed',
      content: dataLoading ? <UserTableSkeleton /> : content,
    },
    {
      title: 'Canceled',
      content: dataLoading ? <UserTableSkeleton /> : content,
    },
  ];
  return (
    <>
      <TabComponent tabs={tabs} />
    </>
  );
};

export default HomeTab;
