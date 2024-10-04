import React from 'react';
import Card from '../UI/Card';

const BasicInfo = () => {
  return (
    <Card className="rounded-b-none mt-4">
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12 xl:col-span-4 flex items-center ">
          <div className="w-[72px] h-[72px] bg-lightPurple border-8 border-purple rounded-full"></div>
          <div className="textbox-01 ml-4">
            <h5>Robert Fox</h5>
            <h6>robert@gmail.com</h6>
          </div>
        </div>
        <div className="col-span-12 md:col-span-6 xl:col-span-4 md:border-r xl:border-l md:pr-4 xl:pl-4 pt-5 md:pt-0 pb-5">
          <h6 className="text-gray-500 text-xs mb-3 uppercase">
            Personal Information
          </h6>
          <div className="grid grid-cols-2 gap-2">
            <h6 className="text-dark text-sm">Contact Number</h6>
            <h6 className="text-dark text-sm font-semibold">(201) 555-0124</h6>
            <h6 className="text-dark text-sm">Date of Birth</h6>
            <h6 className="text-dark text-sm font-semibold">1 Jan, 1985</h6>
            <h6 className="text-dark text-sm">Member Since</h6>
            <h6 className="text-dark text-sm font-semibold">3 March, 2023</h6>
          </div>
        </div>

        <div className="col-span-12 md:col-span-6 xl:col-span-4">
          <h6 className="text-gray-500 text-xs mb-2 uppercase">
            Shipping Address
          </h6>
          <p className="text-dark text-sm">
            3517 W. Gray St. Utica, Pennsylvania 57867
          </p>
          <div className="flex items-center justify-between mt-4">
            <div>
              <h1 className="text-dark text-2xl font-bold">150</h1>
              <h6 className="text-sm font-medium text-[#8B909A]">
                Total Order
              </h6>
            </div>
            <div>
              <h1 className="text-dark text-2xl font-bold">140</h1>
              <h6 className="text-sm font-medium text-[#8B909A]">Completed</h6>
            </div>
            <div>
              <h1 className="text-dark text-2xl font-bold">10</h1>
              <h6 className="text-sm font-medium text-[#8B909A]">Canceled</h6>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default BasicInfo;
