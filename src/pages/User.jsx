import React from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

import { BsThreeDotsVertical, BsFillTelephoneFill } from 'react-icons/bs';
import { FaStar, FaEnvelope } from 'react-icons/fa';

const User = () => {
  return (
    <div>
      <div className=" bg-purple-200 min-h-screen">
        <Navbar />
        <Sidebar />

        <div className=" lg:ml-[250px] p-4 lg:p-8">
          <div className="flex gap-6 mb-6">
            <p className=" capitalize text-base font-bold">Approved users</p>
            <p className=" capitalize text-base font-bold text-gray-500">
              Unapproved users
            </p>
          </div>

          <div className=" bg-white p-4 rounded-lg mb-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            <div>
              <label
                for="countries"
                className="block mb-2 text-base font-bold capitalize  dark:text-gray-400"
              >
                user types
              </label>
              <select
                id="countries"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option selected="">Listers</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
              </select>
            </div>

            <div>
              <label
                for="countries"
                className="block mb-2 text-base font-bold capitalize  dark:text-gray-400"
              >
                Location
              </label>
              <select
                id="countries"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option selected="">Port Harcourt</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
              </select>
            </div>

            <div>
              <label
                for="countries"
                className="block mb-2 text-base font-bold capitalize  dark:text-gray-400"
              >
                sort by
              </label>
              <select
                id="countries"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option selected="">Recently joined</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
              </select>
            </div>

            <div className=" flex justify-start items-end">
              <button className=" bg-purple-700 text-white w-[70%] rounded-2xl p-3">
                Apply Filter
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ">
            <div className=" bg-white p-4 rounded-xl">
              <div className=" flex items-center justify-between">
                <div className=" flex items-center">
                  <img
                    src="https://lines-hub.com/wp-content/uploads/2019/10/courtesy-of-Nina-Maya-Interiors-Vaucluse-Residence_Linesmag_1-1170x780.jpg"
                    alt=""
                    className=" h-[40px] w-[40px] rounded-full object-cover"
                  />
                  <div>
                    <p className=" capitalize ml-2 text-sm font-bold">
                      Vitamin Sea
                    </p>
                    <div className=" ml-2 flex items-center">
                      <FaStar color="yellow" />
                      <p className=" capitalize text-xs ml-1 font-bold">0.0</p>
                    </div>
                  </div>
                </div>

                <BsThreeDotsVertical />
              </div>

              <div className=" font-bold capitalize text-base mt-3">Lister</div>
              <div className=" font-semibold capitalize text-sm">#1234AF</div>
              <div className="  capitalize text-xs font-semibold text-gray-600">
                Joined, 8 Aug 2022
              </div>

              <div className=" w-full h-[1px] bg-slate-200 my-3"></div>

              <div className="flex gap-4 my-4">
                <div className="w-[30px] h-[30px] rounded-md bg-purple-200 flex justify-center items-center">
                  <BsFillTelephoneFill />
                </div>
                <div className="w-[30px] h-[30px] rounded-md bg-purple-200 flex justify-center items-center">
                  <FaEnvelope />
                </div>
              </div>

              <div className=" w-full h-[1px] bg-slate-200 "></div>

              <div className=" font-bold capitalize text-sm mt-6">status</div>
              <div className=" font-bold capitalize text-base mt-2 text-green-500">
                online
              </div>
            </div>

            <div className=" bg-white p-4 rounded-xl">
              <div className=" flex items-center justify-between">
                <div className=" flex items-center">
                  <img
                    src="https://lines-hub.com/wp-content/uploads/2019/10/courtesy-of-Nina-Maya-Interiors-Vaucluse-Residence_Linesmag_1-1170x780.jpg"
                    alt=""
                    className=" h-[40px] w-[40px] rounded-full object-cover"
                  />
                  <div>
                    <p className=" capitalize ml-2 text-sm font-bold">
                      Vitamin Sea
                    </p>
                    <div className=" ml-2 flex items-center">
                      <FaStar color="yellow" />
                      <p className=" capitalize text-xs ml-1 font-bold">0.0</p>
                    </div>
                  </div>
                </div>

                <BsThreeDotsVertical />
              </div>

              <div className=" font-bold capitalize text-base mt-3">Lister</div>
              <div className=" font-semibold capitalize text-sm">#1234AF</div>
              <div className="  capitalize text-xs font-semibold text-gray-600">
                Joined, 8 Aug 2022
              </div>

              <div className=" w-full h-[1px] bg-slate-200 my-3"></div>

              <div className="flex gap-4 my-4">
                <div className="w-[30px] h-[30px] rounded-md bg-purple-200 flex justify-center items-center">
                  <BsFillTelephoneFill />
                </div>
                <div className="w-[30px] h-[30px] rounded-md bg-purple-200 flex justify-center items-center">
                  <FaEnvelope />
                </div>
              </div>

              <div className=" w-full h-[1px] bg-slate-200 "></div>

              <div className=" font-bold capitalize text-sm mt-6">status</div>
              <div className=" font-bold capitalize text-base mt-2 text-red-500">
                offline
              </div>
            </div>

            <div className=" bg-white p-4 rounded-xl">
              <div className=" flex items-center justify-between">
                <div className=" flex items-center">
                  <img
                    src="https://lines-hub.com/wp-content/uploads/2019/10/courtesy-of-Nina-Maya-Interiors-Vaucluse-Residence_Linesmag_1-1170x780.jpg"
                    alt=""
                    className=" h-[40px] w-[40px] rounded-full object-cover"
                  />
                  <div>
                    <p className=" capitalize ml-2 text-sm font-bold">
                      Vitamin Sea
                    </p>
                    <div className=" ml-2 flex items-center">
                      <FaStar color="yellow" />
                      <p className=" capitalize text-xs ml-1 font-bold">0.0</p>
                    </div>
                  </div>
                </div>

                <BsThreeDotsVertical />
              </div>

              <div className=" font-bold capitalize text-base mt-3">Lister</div>
              <div className=" font-semibold capitalize text-sm">#1234AF</div>
              <div className="  capitalize text-xs font-semibold text-gray-600">
                Joined, 8 Aug 2022
              </div>

              <div className=" w-full h-[1px] bg-slate-200 my-3"></div>

              <div className="flex gap-4 my-4">
                <div className="w-[30px] h-[30px] rounded-md bg-purple-200 flex justify-center items-center">
                  <BsFillTelephoneFill />
                </div>
                <div className="w-[30px] h-[30px] rounded-md bg-purple-200 flex justify-center items-center">
                  <FaEnvelope />
                </div>
              </div>

              <div className=" w-full h-[1px] bg-slate-200 "></div>

              <div className=" font-bold capitalize text-sm mt-6">status</div>
              <div className=" font-bold capitalize text-base mt-2 text-green-500">
                online
              </div>
            </div>

            <div className=" bg-white p-4 rounded-xl">
              <div className=" flex items-center justify-between">
                <div className=" flex items-center">
                  <img
                    src="https://lines-hub.com/wp-content/uploads/2019/10/courtesy-of-Nina-Maya-Interiors-Vaucluse-Residence_Linesmag_1-1170x780.jpg"
                    alt=""
                    className=" h-[40px] w-[40px] rounded-full object-cover"
                  />
                  <div>
                    <p className=" capitalize ml-2 text-sm font-bold">
                      Vitamin Sea
                    </p>
                    <div className=" ml-2 flex items-center">
                      <FaStar color="yellow" />
                      <p className=" capitalize text-xs ml-1 font-bold">0.0</p>
                    </div>
                  </div>
                </div>

                <BsThreeDotsVertical />
              </div>

              <div className=" font-bold capitalize text-base mt-3">Lister</div>
              <div className=" font-semibold capitalize text-sm">#1234AF</div>
              <div className="  capitalize text-xs font-semibold text-gray-600">
                Joined, 8 Aug 2022
              </div>

              <div className=" w-full h-[1px] bg-slate-200 my-3"></div>

              <div className="flex gap-4 my-4">
                <div className="w-[30px] h-[30px] rounded-md bg-purple-200 flex justify-center items-center">
                  <BsFillTelephoneFill />
                </div>
                <div className="w-[30px] h-[30px] rounded-md bg-purple-200 flex justify-center items-center">
                  <FaEnvelope />
                </div>
              </div>

              <div className=" w-full h-[1px] bg-slate-200 "></div>

              <div className=" font-bold capitalize text-sm mt-6">status</div>
              <div className=" font-bold capitalize text-base mt-2 text-red-500">
                offline
              </div>
            </div>

            <div className=" bg-white p-4 rounded-xl">
              <div className=" flex items-center justify-between">
                <div className=" flex items-center">
                  <img
                    src="https://lines-hub.com/wp-content/uploads/2019/10/courtesy-of-Nina-Maya-Interiors-Vaucluse-Residence_Linesmag_1-1170x780.jpg"
                    alt=""
                    className=" h-[40px] w-[40px] rounded-full object-cover"
                  />
                  <div>
                    <p className=" capitalize ml-2 text-sm font-bold">
                      Vitamin Sea
                    </p>
                    <div className=" ml-2 flex items-center">
                      <FaStar color="yellow" />
                      <p className=" capitalize text-xs ml-1 font-bold">0.0</p>
                    </div>
                  </div>
                </div>

                <BsThreeDotsVertical />
              </div>

              <div className=" font-bold capitalize text-base mt-3">Lister</div>
              <div className=" font-semibold capitalize text-sm">#1234AF</div>
              <div className="  capitalize text-xs font-semibold text-gray-600">
                Joined, 8 Aug 2022
              </div>

              <div className=" w-full h-[1px] bg-slate-200 my-3"></div>

              <div className="flex gap-4 my-4">
                <div className="w-[30px] h-[30px] rounded-md bg-purple-200 flex justify-center items-center">
                  <BsFillTelephoneFill />
                </div>
                <div className="w-[30px] h-[30px] rounded-md bg-purple-200 flex justify-center items-center">
                  <FaEnvelope />
                </div>
              </div>

              <div className=" w-full h-[1px] bg-slate-200 "></div>

              <div className=" font-bold capitalize text-sm mt-6">status</div>
              <div className=" font-bold capitalize text-base mt-2 text-green-500">
                online
              </div>
            </div>

            <div className=" bg-white p-4 rounded-xl">
              <div className=" flex items-center justify-between">
                <div className=" flex items-center">
                  <img
                    src="https://lines-hub.com/wp-content/uploads/2019/10/courtesy-of-Nina-Maya-Interiors-Vaucluse-Residence_Linesmag_1-1170x780.jpg"
                    alt=""
                    className=" h-[40px] w-[40px] rounded-full object-cover"
                  />
                  <div>
                    <p className=" capitalize ml-2 text-sm font-bold">
                      Vitamin Sea
                    </p>
                    <div className=" ml-2 flex items-center">
                      <FaStar color="yellow" />
                      <p className=" capitalize text-xs ml-1 font-bold">0.0</p>
                    </div>
                  </div>
                </div>

                <BsThreeDotsVertical />
              </div>

              <div className=" font-bold capitalize text-base mt-3">Lister</div>
              <div className=" font-semibold capitalize text-sm">#1234AF</div>
              <div className="  capitalize text-xs font-semibold text-gray-600">
                Joined, 8 Aug 2022
              </div>

              <div className=" w-full h-[1px] bg-slate-200 my-3"></div>

              <div className="flex gap-4 my-4">
                <div className="w-[30px] h-[30px] rounded-md bg-purple-200 flex justify-center items-center">
                  <BsFillTelephoneFill />
                </div>
                <div className="w-[30px] h-[30px] rounded-md bg-purple-200 flex justify-center items-center">
                  <FaEnvelope />
                </div>
              </div>

              <div className=" w-full h-[1px] bg-slate-200 "></div>

              <div className=" font-bold capitalize text-sm mt-6">status</div>
              <div className=" font-bold capitalize text-base mt-2 text-red-500">
                offline
              </div>
            </div>

            <div className=" bg-white p-4 rounded-xl">
              <div className=" flex items-center justify-between">
                <div className=" flex items-center">
                  <img
                    src="https://lines-hub.com/wp-content/uploads/2019/10/courtesy-of-Nina-Maya-Interiors-Vaucluse-Residence_Linesmag_1-1170x780.jpg"
                    alt=""
                    className=" h-[40px] w-[40px] rounded-full object-cover"
                  />
                  <div>
                    <p className=" capitalize ml-2 text-sm font-bold">
                      Vitamin Sea
                    </p>
                    <div className=" ml-2 flex items-center">
                      <FaStar color="yellow" />
                      <p className=" capitalize text-xs ml-1 font-bold">0.0</p>
                    </div>
                  </div>
                </div>

                <BsThreeDotsVertical />
              </div>

              <div className=" font-bold capitalize text-base mt-3">Lister</div>
              <div className=" font-semibold capitalize text-sm">#1234AF</div>
              <div className="  capitalize text-xs font-semibold text-gray-600">
                Joined, 8 Aug 2022
              </div>

              <div className=" w-full h-[1px] bg-slate-200 my-3"></div>

              <div className="flex gap-4 my-4">
                <div className="w-[30px] h-[30px] rounded-md bg-purple-200 flex justify-center items-center">
                  <BsFillTelephoneFill />
                </div>
                <div className="w-[30px] h-[30px] rounded-md bg-purple-200 flex justify-center items-center">
                  <FaEnvelope />
                </div>
              </div>

              <div className=" w-full h-[1px] bg-slate-200 "></div>

              <div className=" font-bold capitalize text-sm mt-6">status</div>
              <div className=" font-bold capitalize text-base mt-2 text-green-500">
                online
              </div>
            </div>

            <div className=" bg-white p-4 rounded-xl">
              <div className=" flex items-center justify-between">
                <div className=" flex items-center">
                  <img
                    src="https://lines-hub.com/wp-content/uploads/2019/10/courtesy-of-Nina-Maya-Interiors-Vaucluse-Residence_Linesmag_1-1170x780.jpg"
                    alt=""
                    className=" h-[40px] w-[40px] rounded-full object-cover"
                  />
                  <div>
                    <p className=" capitalize ml-2 text-sm font-bold">
                      Vitamin Sea
                    </p>
                    <div className=" ml-2 flex items-center">
                      <FaStar color="yellow" />
                      <p className=" capitalize text-xs ml-1 font-bold">0.0</p>
                    </div>
                  </div>
                </div>

                <BsThreeDotsVertical />
              </div>

              <div className=" font-bold capitalize text-base mt-3">Lister</div>
              <div className=" font-semibold capitalize text-sm">#1234AF</div>
              <div className="  capitalize text-xs font-semibold text-gray-600">
                Joined, 8 Aug 2022
              </div>

              <div className=" w-full h-[1px] bg-slate-200 my-3"></div>

              <div className="flex gap-4 my-4">
                <div className="w-[30px] h-[30px] rounded-md bg-purple-200 flex justify-center items-center">
                  <BsFillTelephoneFill />
                </div>
                <div className="w-[30px] h-[30px] rounded-md bg-purple-200 flex justify-center items-center">
                  <FaEnvelope />
                </div>
              </div>

              <div className=" w-full h-[1px] bg-slate-200 "></div>

              <div className=" font-bold capitalize text-sm mt-6">status</div>
              <div className=" font-bold capitalize text-base mt-2 text-red-500">
                offline
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
