import React from 'react';
import { FaChartPie, FaRegMoneyBillAlt, FaCog } from 'react-icons/fa';
import { IoPeopleSharp } from 'react-icons/io5';
import { RiChatCheckFill } from 'react-icons/ri';
import { MdFreeCancellation } from 'react-icons/md';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className=" min-h-screen w-[250px] bg-[#212123] fixed left-0 top-[60px] z-20 text-[#948ea5]">
      <ul className=" my-10 px-8 py-2 ">
        <Link to={'/'}>
          <li className=" flex items-center mt-5">
            <FaChartPie />
            <span className=" ml-5">Overview</span>
          </li>
        </Link>

        <Link to={'/users'}>
          <li className=" flex items-center mt-5">
            <IoPeopleSharp />
            <span className=" ml-5">Users</span>
          </li>
        </Link>

        <Link to={'/payments'}>
          <li className=" flex items-center mt-5">
            <FaRegMoneyBillAlt />
            <span className=" ml-5">Payments</span>
          </li>
        </Link>

        <Link to={'/ratings'}>
          <li className=" flex items-center mt-5">
            <RiChatCheckFill />
            <span className=" ml-5">Rating</span>
          </li>
        </Link>
      </ul>

      <div className=" w-full h-[1px] bg-slate-600"></div>

      <ul className=" my-3 px-8 py-2 ">
        <Link to={'/cancellations'}>
          <li className=" flex items-center mt-5">
            <MdFreeCancellation />
            <span className=" ml-5">Cancellations</span>
          </li>
        </Link>
        <Link to={'/setting'}>
          <li className=" flex items-center mt-5">
            <FaCog />
            <span className=" ml-5">Setting</span>
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default Sidebar;
