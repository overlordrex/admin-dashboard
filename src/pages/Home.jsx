import React from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import LinearProgress from '@mui/material/LinearProgress';

import { IoBedOutline } from 'react-icons/io5';
import { TbBath, TbResize } from 'react-icons/tb';

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
} from 'recharts';

const data = [
  {
    name: 'Jan',
    Total: 100,
  },
  {
    name: 'Feb',
    Total: 200,
  },
  {
    name: 'Mar',
    Total: 300,
  },
  {
    name: 'Apr',
    Total: 400,
  },
  {
    name: 'May',
    Total: 500,
  },
  {
    name: 'Jun',
    Total: 100,
  },
  {
    name: 'Jul',
    Total: 200,
  },
  {
    name: 'Aug',
    Total: 300,
  },
  {
    name: 'Sep',
    Total: 400,
  },
  {
    name: 'Oct',
    Total: 500,
  },
  {
    name: 'Nov',
    Total: 100,
  },
  {
    name: 'Dec',
    Total: 200,
  },
];

const data2 = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const Home = () => {
  return (
    <div className=" bg-purple-200 min-h-screen ">
      <Navbar />
      <Sidebar />

      <div className=" lg:ml-[250px] p-4 lg:p-8 ">
        <div className=" capitalize text-xl font-bold">overview</div>

        <div className=" grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 sm:gap-3 gap-5 my-4">
          <div className=" flex justify-between bg-white p-4 rounded-md">
            <div>
              <p className=" text-gray-400 capitalize text-sm">
                properties for sale
              </p>
              <h2 className="text-2xl text-black font-bold">684</h2>
            </div>
            <div className=" w-[50px] h-[50px]">
              <CircularProgressbar
                styles={{ root: {}, path: { stroke: '#6D6CB8' } }}
                value={80}
                strokeWidth={20}
              />
            </div>
          </div>
          <div className=" flex justify-between bg-white p-4 rounded-md">
            <div>
              <p className=" text-gray-400 capitalize text-sm">
                properties for Rent
              </p>
              <h2 className="text-2xl text-black font-bold">546</h2>
            </div>
            <div className=" w-[50px] h-[50px]">
              <CircularProgressbar
                styles={{ root: {}, path: { stroke: 'orange' } }}
                value={80}
                strokeWidth={20}
              />
            </div>
          </div>
          <div className=" flex justify-between bg-white p-4 rounded-md">
            <div>
              <p className=" text-gray-400 capitalize text-sm">Top Guest</p>
              <h2 className="text-2xl text-black font-bold">5732</h2>
            </div>
            <div className=" w-[50px] h-[50px]">
              <CircularProgressbar
                styles={{ root: {}, path: { stroke: 'green' } }}
                value={80}
                strokeWidth={20}
              />
            </div>
          </div>
          <div className=" flex justify-between bg-white p-4 rounded-md">
            <div>
              <p className=" text-gray-400 capitalize text-sm">Top listers</p>
              <h2 className="text-2xl text-black font-bold">90</h2>
            </div>
            <div className=" w-[50px] h-[50px]">
              <CircularProgressbar
                styles={{ root: {}, path: { stroke: 'red' } }}
                value={80}
                strokeWidth={20}
              />
            </div>
          </div>
        </div>

        <div className=" grid sm:grid-cols-1 sm:gap-5  lg:grid-cols-2 gap-10 my-8">
          <div className="bg-white min-w-[350px] p-2 lg:p-4 rounded-md">
            <div className=" flex justify-between items-center">
              <p className=" capitalize text-sm font-bold">Total Revenue</p>
              <p className=" capitalize text-sm font-bold">NGN 200,000</p>
            </div>

            <div className=" mt-4">
              <ResponsiveContainer width="100%" aspect={2 / 1}>
                <AreaChart
                  width={500}
                  height={400}
                  data={data}
                  margin={{
                    top: 10,
                    right: 30,
                    left: 0,
                    bottom: 0,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Area
                    type="monotone"
                    dataKey="Total"
                    stackId="1"
                    stroke="#8884d8"
                    fill="#8884d8"
                  />
                  <Area
                    type="monotone"
                    dataKey="Total"
                    stackId="1"
                    stroke="#82ca9d"
                    fill="#82ca9d"
                  />
                  <AreaChart
                    type="monotone"
                    dataKey="Total"
                    stackId="1"
                    stroke="#ffc658"
                    fill="#ffc658"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="bg-white  min-w-[350px]   p-2 lg:p-4 rounded-md">
            <p className=" capitalize text-sm font-bold">Users Insight</p>

            <div className=" mt-4">
              <ResponsiveContainer width="100%" aspect={2 / 1}>
                <BarChart
                  width={500}
                  height={300}
                  data={data2}
                  margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  {/* <Legend /> */}
                  <Bar dataKey="pv" stackId="a" fill="#8884d8" />
                  {/* <Bar dataKey="uv" stackId="a" fill="#999" /> */}
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        <div className=" flex-col md:flex-row flex lg:justify-between gap-6">
          <div className=" bg-white w-full lg:w-[25%] h-[300px] p-4  rounded-md ">
            <p className=" capitalize text-sm font-bold">users location</p>

            <div className=" mt-4">
              <div className=" flex justify-between items-center mb-2">
                <p className=" capitalize text-sm font-bold">Abuja</p>
                <p className=" capitalize text-sm font-semibold text-gray-400">
                  200 users
                </p>
              </div>
              <LinearProgress variant="determinate" value={60} />
            </div>
            <div className=" mt-4">
              <div className=" flex justify-between items-center mb-2">
                <p className=" capitalize text-sm font-bold">Abuja</p>
                <p className=" capitalize text-sm font-semibold text-gray-400">
                  200 users
                </p>
              </div>
              <LinearProgress variant="determinate" value={60} />
            </div>
            <div className=" mt-4">
              <div className=" flex justify-between items-center mb-2">
                <p className=" capitalize text-sm font-bold">Abuja</p>
                <p className=" capitalize text-sm font-semibold text-gray-400">
                  200 users
                </p>
              </div>
              <LinearProgress variant="determinate" value={60} />
            </div>
            <div className=" mt-4">
              <div className=" flex justify-between items-center mb-2">
                <p className=" capitalize text-sm font-bold">Abuja</p>
                <p className=" capitalize text-sm font-semibold text-gray-400">
                  200 users
                </p>
              </div>
              <LinearProgress variant="determinate" value={60} />
            </div>
            <div className=" mt-4">
              <div className=" flex justify-between items-center mb-2">
                <p className=" capitalize text-sm font-bold">Abuja</p>
                <p className=" capitalize text-sm font-semibold text-gray-400">
                  200 users
                </p>
              </div>
              <LinearProgress variant="determinate" value={60} />
            </div>
          </div>

          <div className="bg-white w-full lg:w-[70%] p-4  rounded-md ">
            <div className=" flex justify-between items-center">
              <p className=" capitalize text-sm font-bold">properties listed</p>
              <div className="flex gap-4">
                <p className=" capitalize text-sm font-bold">for rent</p>
                <p className=" capitalize text-sm font-bold">for sale</p>
              </div>
            </div>

            <div className=" grid grid-cols-1 lg:grid-cols-3 gap-5 mt-8">
              <div>
                <img
                  src="https://lines-hub.com/wp-content/uploads/2019/10/courtesy-of-Nina-Maya-Interiors-Vaucluse-Residence_Linesmag_1-1170x780.jpg"
                  alt=""
                  className=" rounded-t-md"
                />

                <div className="flex justify-between items-center mt-3">
                  <div>
                    <p className=" font-bold">NGN 200,000/month</p>
                    <p className=" capitalize text-xs font-thin text-gray-500">
                      ada george. port harcourt
                    </p>
                  </div>
                  <div className=" capitalize text-sm font-semibold">
                    #1234AF
                  </div>
                </div>

                <div className="flex gap-4 mt-3">
                  <div className="flex items-center">
                    <IoBedOutline />
                    <span className=" text-xs ml-2 font-semibold">4</span>
                  </div>

                  <div className="flex items-center">
                    <TbBath className="" />
                    <span className=" text-xs ml-2 font-semibold">4</span>
                  </div>

                  <div className="flex items-center">
                    <TbResize className="" />
                    <span className=" text-xs ml-2 font-semibold">
                      3000sqft
                    </span>
                  </div>
                </div>

                <div className=" w-full h-[1px] mt-3 bg-slate-300"></div>

                <div className=" flex items-center justify-between mt-4">
                  <div className=" flex items-center">
                    <img
                      src="https://lines-hub.com/wp-content/uploads/2019/10/courtesy-of-Nina-Maya-Interiors-Vaucluse-Residence_Linesmag_1-1170x780.jpg"
                      alt=""
                      className=" h-[30px] w-[30px] rounded-full"
                    />

                    <p className=" capitalize ml-2 text-sm font-bold">
                      Vitamin Sea
                    </p>
                  </div>

                  <p className=" capitalize ml-2 text-purple-500 text-sm font-bold">
                    for rent
                  </p>
                </div>
              </div>

              <div>
                <img
                  src="https://lines-hub.com/wp-content/uploads/2019/10/courtesy-of-Nina-Maya-Interiors-Vaucluse-Residence_Linesmag_1-1170x780.jpg"
                  alt=""
                  className=" rounded-t-md"
                />

                <div className="flex justify-between items-center mt-3">
                  <div>
                    <p className=" font-bold">NGN 200,000/month</p>
                    <p className=" capitalize text-xs font-thin text-gray-500">
                      ada george. port harcourt
                    </p>
                  </div>
                  <div className=" capitalize text-sm font-semibold">
                    #1234AF
                  </div>
                </div>

                <div className="flex gap-4 mt-3">
                  <div className="flex items-center">
                    <IoBedOutline />
                    <span className=" text-xs ml-2 font-semibold">4</span>
                  </div>

                  <div className="flex items-center">
                    <TbBath className="" />
                    <span className=" text-xs ml-2 font-semibold">4</span>
                  </div>

                  <div className="flex items-center">
                    <TbResize className="" />
                    <span className=" text-xs ml-2 font-semibold">
                      3000sqft
                    </span>
                  </div>
                </div>

                <div className=" w-full h-[1px] mt-3 bg-slate-300"></div>

                <div className=" flex items-center justify-between mt-4">
                  <div className=" flex items-center">
                    <img
                      src="https://lines-hub.com/wp-content/uploads/2019/10/courtesy-of-Nina-Maya-Interiors-Vaucluse-Residence_Linesmag_1-1170x780.jpg"
                      alt=""
                      className=" h-[30px] w-[30px] rounded-full"
                    />

                    <p className=" capitalize ml-2 text-sm font-bold">
                      Vitamin Sea
                    </p>
                  </div>

                  <p className=" capitalize ml-2 text-purple-500 text-sm font-bold">
                    for rent
                  </p>
                </div>
              </div>

              <div>
                <img
                  src="https://lines-hub.com/wp-content/uploads/2019/10/courtesy-of-Nina-Maya-Interiors-Vaucluse-Residence_Linesmag_1-1170x780.jpg"
                  alt=""
                  className=" rounded-t-md"
                />

                <div className="flex justify-between items-center mt-3">
                  <div>
                    <p className=" font-bold">NGN 200,000/month</p>
                    <p className=" capitalize text-xs font-thin text-gray-500">
                      ada george. port harcourt
                    </p>
                  </div>
                  <div className=" capitalize text-sm font-semibold">
                    #1234AF
                  </div>
                </div>

                <div className="flex gap-4 mt-3">
                  <div className="flex items-center">
                    <IoBedOutline />
                    <span className=" text-xs ml-2 font-semibold">4</span>
                  </div>

                  <div className="flex items-center">
                    <TbBath className="" />
                    <span className=" text-xs ml-2 font-semibold">4</span>
                  </div>

                  <div className="flex items-center">
                    <TbResize className="" />
                    <span className=" text-xs ml-2 font-semibold">
                      3000sqft
                    </span>
                  </div>
                </div>

                <div className=" w-full h-[1px] mt-3 bg-slate-300"></div>

                <div className=" flex items-center justify-between mt-4">
                  <div className=" flex items-center">
                    <img
                      src="https://lines-hub.com/wp-content/uploads/2019/10/courtesy-of-Nina-Maya-Interiors-Vaucluse-Residence_Linesmag_1-1170x780.jpg"
                      alt=""
                      className=" h-[30px] w-[30px] rounded-full object-cover"
                    />

                    <p className=" capitalize ml-2 text-sm font-bold">
                      Vitamin Sea
                    </p>
                  </div>

                  <p className=" capitalize ml-2 text-purple-500 text-sm font-bold">
                    for rent
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
