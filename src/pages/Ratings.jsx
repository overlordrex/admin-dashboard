import React from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const Ratings = () => {
  const rows = [
    {
      id: '12345A',
      date: 'May 4,2022. 12:45pm',
      listing: '#AB123C6H',
      rating: '3.3',
    },
    {
      id: '12345B',
      date: 'May 4,2022. 12:45pm',
      listing: '#AB123C6H',
      rating: '4.3',
    },
    {
      id: '12345C',
      date: 'May 4,2022. 12:45pm',
      listing: '#AB123C6H',
      rating: '5.0',
    },
    {
      id: '12345D',
      date: 'May 4,2022. 12:45pm',
      listing: '#AB123C6H',
      rating: '3.8',
    },
    {
      id: '12345E',
      date: 'May 4,2022. 12:45pm',
      listing: '#AB123C6H',
      rating: '4.7',
    },

    {
      id: '12345F',
      date: 'May 4,2022. 12:45pm',
      listing: '#AB123C6H',
      rating: '2.3',
    },
    {
      id: '12345G',
      date: 'May 4,2022. 12:45pm',
      listing: '#AB123C6H',
      rating: '4.3',
    },
    {
      id: '12345H',
      date: 'May 4,2022. 12:45pm',
      listing: '#AB123C6H',
      rating: '3.3',
    },
  ];
  return (
    <div>
      <div className=" bg-purple-200 min-h-screen">
        <Navbar />
        <Sidebar />
        <div className=" ml-[250px] p-8">
          <div className=" capitalize text-xl font-bold">Rating</div>

          <div className=" my-6 bg-white p-4 rounded-lg mb-8 grid grid-cols-3 gap-5">
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

          <TableContainer component={Paper} className="table">
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell className="font-bold th">User ID</TableCell>
                  <TableCell className="font-bold th">Listing Date</TableCell>
                  <TableCell className="font-bold th">Listing ID</TableCell>
                  <TableCell className="font-bold th">Rating</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow key={row.id}>
                    <TableCell className="tableCell">{row.id}</TableCell>
                    <TableCell className="tableCell">{row.date}</TableCell>
                    <TableCell className="tableCell">{row.listing}</TableCell>
                    <TableCell className="tableCell">{row.rating}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </div>
  );
};

export default Ratings;
