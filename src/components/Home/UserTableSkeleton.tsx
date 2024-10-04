import React from 'react';

const UserTableSkeleton = () => {
  return (
    <>
      <div className={`bg-gray-100 pt-3 pb-3`}>
        <div className="grid grid-cols-12 grid-flow-col gap-4">
          <div className="col-span-2">
            <div className="bg-gray-200 h-10 rounded animate-pulse"></div>
          </div>
          <div className="col-span-3">
            <div className="bg-gray-200 h-10 rounded animate-pulse"></div>
          </div>
          <div className="col-span-2 col-start-11">
            <div className="bg-gray-200 h-10 rounded animate-pulse"></div>
          </div>
        </div>
      </div>
      <div className={`grow bg-white 'rounded-t-lg' `}>
        <div className="h-full relative overflow-auto">
          <table className="xl:absolute top-0 left-0 w-full text-dark">
            <thead>
              <tr className="shadow-[0_1px_0px_0px_#e5e7eb] sticky top-0 bg-white">
                {[...Array(5)].map((_, idx) => (
                  <th key={idx} className="px-6 py-3">
                    <div className="bg-gray-200 h-4 w-24 rounded animate-pulse"></div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[...Array(5)].map((_, rowIdx) => (
                <tr key={rowIdx} className="border-b">
                  {[...Array(5)].map((_, colIdx) => (
                    <td key={`${rowIdx}_${colIdx}`} className="px-6 py-4">
                      <div className="bg-gray-200 h-6 w-full rounded animate-pulse"></div>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default UserTableSkeleton;
