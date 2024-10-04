import React, { ReactElement } from 'react';
import { IconType } from 'react-icons';
import {
  TbCirclePlus,
  TbCube,
  TbIndentDecrease,
  TbShoppingCart,
  TbSmartHome,
  TbStar,
} from 'react-icons/tb';

import Logo from '../assets/image/logo.png';
import { Link } from 'react-router-dom';
import { useSidebar } from '../provider/SidebarTogglerProvider';

interface ISideBarItem {
  link: string;
  title: string;
  icon: ReactElement<IconType>;
  active?: boolean;
}

const Sidebar = () => {
  const { isSidebarOpen, toggleSidebar } = useSidebar();

  const mainMenuItems: ISideBarItem[] = [
    {
      link: '',
      title: 'Dashboard',
      icon: <TbSmartHome />,
      active: true,
    },
    {
      link: '',
      title: 'Order Management',
      icon: <TbShoppingCart />,
    },
    {
      link: '',
      title: 'Brand',
      icon: <TbStar />,
    },
  ];

  const productMenuItems: ISideBarItem[] = [
    {
      link: '',
      title: 'Add Products',
      icon: <TbCirclePlus />,
    },
    {
      link: '',
      title: 'Product List',
      icon: <TbCube />,
    },
  ];

  const MenuItem = (menuItem: ISideBarItem) => {
    return (
      <li title={!isSidebarOpen ? menuItem.title : undefined}>
        <Link
          to={menuItem.link}
          className={`flex items-center p-2 rounded-lg  ${menuItem.active ? 'bg-gray-100 text-gray-900' : 'text-gray-500'} `}
        >
          <span className="shrink-0">{menuItem.icon}</span>
          <span className="sidebar-item text-sm ml-2">{menuItem.title}</span>
        </Link>
      </li>
    );
  };

  return (
    <>
      <aside className={`sidebar ${!isSidebarOpen ? 'close' : ''}`}>
        <header className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <img
              src={Logo}
              alt="JoBins Logo"
              className="sidebar-item w-8 h-8"
            />
            <span className="font-bold sidebar-item text-xl">JoBins</span>
          </div>
          <button
            className="toggler text-gray-500"
            aria-label="Toggle Menu"
            onClick={toggleSidebar}
          >
            <TbIndentDecrease />
          </button>
        </header>

        <nav>
          <section aria-labelledby="main-menu" className="mb-6">
            <h2
              id="main-menu"
              className="text-gray-500 text-xs mb-2 uppercase sidebar-item"
            >
              Main Menu
            </h2>
            <ul className="space-y-2">
              {mainMenuItems.map((mainItem, index: number) => (
                <MenuItem {...mainItem} key={index} />
              ))}
            </ul>
          </section>

          <section aria-labelledby="products-menu">
            <h2
              id="products-menu"
              className="text-gray-500 text-xs mb-2 uppercase sidebar-item"
            >
              Products
            </h2>
            <ul className="space-y-2">
              {productMenuItems.map((product, index: number) => (
                <MenuItem {...product} key={index} />
              ))}
            </ul>
          </section>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
