import React from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

import { BsPersonFill, BsFillChatDotsFill, BsPencilFill } from 'react-icons/bs';
import { IoMdNotifications } from 'react-icons/io';
import { FaClipboardList, FaClipboard, FaEnvelope } from 'react-icons/fa';

const Settings = () => {
  return (
    <div>
      <div className=" bg-purple-200 min-h-screen">
        <Navbar />
        <Sidebar />
        <div className=" ml-[250px] p-8">
          <div className=" capitalize text-xl font-bold">setting</div>

          <div className=" flex justify-between gap-6 mt-4">
            <div className=" bg-white w-[200px] p-4 rounded-md">
              <div className=" mt-4 flex items-center text-gray-500">
                <BsPersonFill />
                <p className=" ml-3 capitalize">Profile</p>
              </div>
              <div className=" mt-5 flex items-center text-gray-500">
                <FaClipboardList />
                <p className=" ml-3 capitalize">Privacy policy</p>
              </div>
              <div className=" mt-5 flex items-center text-gray-500">
                <FaClipboard />
                <p className=" ml-3 capitalize">user document</p>
              </div>
              <div className=" mt-5 flex items-center text-gray-500">
                <IoMdNotifications />
                <p className=" ml-3 capitalize">mass notification</p>
              </div>
              <div className=" mt-5 flex items-center text-gray-500">
                <BsFillChatDotsFill />
                <p className=" ml-3 capitalize">sms template</p>
              </div>
              <div className=" mt-5 flex items-center text-gray-500">
                <FaEnvelope />
                <p className=" ml-3 capitalize">Email Template</p>
              </div>
            </div>
            <div className=" bg-white w-[75%] p-4 rounded-md flex flex-col items-center justify-center">
              <div className="flex flex-col items-center justify-center my-6">
                <div className=" relative">
                  <img
                    src="https://lines-hub.com/wp-content/uploads/2019/10/courtesy-of-Nina-Maya-Interiors-Vaucluse-Residence_Linesmag_1-1170x780.jpg"
                    alt=""
                    className=" h-[130px] w-[130px] rounded-full object-cover"
                  />

                  <div className=" w-[40px] h-[40px] rounded-full flex justify-center items-center bg-purple-700 text-white absolute bottom-0 right-0">
                    <BsPencilFill />
                  </div>
                </div>

                <form className="  mt-3 ">
                  <div class="mb-6">
                    <label
                      for="text"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Name
                    </label>
                    <input
                      type="name"
                      id="name"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="John Doe"
                      required=""
                    />
                  </div>
                  <div class="mb-6 w-[500px]">
                    <label
                      for="email"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="john.doe@company.com"
                      required=""
                    />
                  </div>

                  <div className="mt-10  flex justify-center items-center">
                    <button
                      type="submit"
                      class="text-white  bg-purple-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm  sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
