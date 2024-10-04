import React, { useState } from 'react';

interface ITab {
  tabs: {
    title: string;
    content: JSX.Element;
  }[];
  className?: string;
}

const TabComponent = ({ tabs, className }: ITab) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      <div className="flex w-full bg-white sm:px-6 rounded-b-lg">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`py-2 px-4 text-sm  text-center focus:outline-none ${
              activeTab === index
                ? 'text-blue border-solid border-b-2 border-blue'
                : 'text-gray-500 border-solid border-b-2 border-transparent  hover:text-gray-700'
            }`}
            onClick={() => setActiveTab(index)}
          >
            {tab.title}
          </button>
        ))}
      </div>
      <>{tabs[activeTab].content}</>
    </>
  );
};

export default TabComponent;
