import { TbBell } from 'react-icons/tb';
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggler,
} from './UI/Dropdown';

const Header = () => {
  return (
    <nav className="flex justify-between h-16 items-center py-4">
      <div className="flex items-center">
        <h1 className="text-lg font-semibold">Dashboard</h1>
      </div>

      <div className="flex items-center space-x-4">
        <div className="relative">
          <TbBell size={26} className="w-6 h-6 text-gray-500" />
          <div
            className="absolute top-0 right-0 inline-flex items-center justify-center text-xs font-semibold w-[18px] h-[18px] text-red-100 bg-red-600 rounded-full
          transform translate-x-[25%]  -translate-y-1/2
          "
          >
            4
          </div>
        </div>

        <Dropdown>
          <DropdownToggler>
            <div className="relative w-8 h-8 rounded-full bg-[#7367F0] flex items-center justify-center">
              <span className="absolute bottom-0 right-0 block h-2 w-2 rounded-full ring-2 ring-white bg-green-400"></span>
            </div>
          </DropdownToggler>
          <DropdownMenu>
            <DropdownItem>Profile</DropdownItem>
            <DropdownItem>Account Settings</DropdownItem>
            <DropdownItem>Logout</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
    </nav>
  );
};

export default Header;
