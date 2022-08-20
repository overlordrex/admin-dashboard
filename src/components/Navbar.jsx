import React from 'react';
import { IoNotifications } from 'react-icons/io5';
import { BsChatDotsFill } from 'react-icons/bs';
import { RiSearchLine } from 'react-icons/ri';

const Navbar = () => {
  return (
    <div className=" h-[60px] w-full bg-white sticky top-0 z-40 flex items-center px-8 justify-between">
      <div className=" flex items-center gap-8">
        <div className=" mx-12">
          <img
            src="https://pbs.twimg.com/media/Faj7Dj-WYAEe8vr?format=jpg&name=small"
            alt=""
            className=" h-[35px]"
          />
        </div>
        <div className=" ml-16 w-[400px] ">
          <div className=" border flex gap-2 bg-purple-200 rounded-md p-1 border-gray-200 w-full">
            <RiSearchLine fontSize={25} color="gray" />
            <input
              type="text"
              className=" w-full placeholder:text-sm  bg-transparent outline-none"
              placeholder="Search Property, Customer etc"
            />
          </div>
        </div>
      </div>
      <div className=" flex items-center gap-6">
        <div className=" relative">
          <IoNotifications fontSize={18} color="#5446fd" />
          <div className=" w-[8px] h-[8px] rounded-full bg-red-600 absolute top-0 right-0"></div>
        </div>
        <BsChatDotsFill fontSize={18} color="#5446fd" />
        <div className=" flex items-center  gap-2">
          <img
            src="https://i.guim.co.uk/img/media/282ad68589d12c94a9439aad73181466d75c54eb/0_150_3600_2160/master/3600.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=c8e2be5dd59936e726bdeb8e5acf1b13"
            alt=""
            className=" w-[35px] h-[35px] rounded-full object-cover"
          />
          <div>
            <p className=" font-medium capitalize">ike john doe</p>
            <p className=" text-gray-500 text-xs">Admin</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
