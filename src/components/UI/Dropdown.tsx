import React, { useState } from 'react';

interface IDropdown {
  children: React.ReactNode;
}
interface DropdownTogglerProps {
  children: React.ReactNode;
}

interface DropdownItemProps {
  children: React.ReactNode;
  onClick?: () => void;
}

interface DropdownMenuProps {
  children: React.ReactNode;
}

const Dropdown: React.FC<IDropdown> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const items = React.Children.toArray(children);

  return (
    <div className="relative inline-block text-left">
      <div onClick={toggleDropdown} className="cursor-pointer">
        {items[0]}
      </div>
      {isOpen && (
        <div className="absolute right-0 z-10 mt-2 w-48 bg-white rounded-md shadow-md">
          <div className="py-1" role="menu">
            {items.slice(1)}
          </div>
        </div>
      )}
    </div>
  );
};

const DropdownToggler: React.FC<DropdownTogglerProps> = ({ children }) => {
  return <>{children}</>;
};

const DropdownMenu: React.FC<DropdownMenuProps> = ({ children }) => {
  return <div>{children}</div>;
};

const DropdownItem: React.FC<DropdownItemProps> = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="block w-full text-left px-4 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-text-500 focus:outline-none focus:bg-gray-100 focus:text-gray-500"
      role="menuitem"
    >
      {children}
    </button>
  );
};

export { Dropdown, DropdownItem, DropdownMenu, DropdownToggler };
