import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebookF, FaApple } from 'react-icons/fa';

const Register = () => {
  return (
    <div className=" bg-purple-200 min-h-screen flex justify-center items-center">
      <div className="  bg-white p-3 rounded-md">
        <div className="flex justify-center items-center my-3">
          <img
            src="https://pbs.twimg.com/media/Faj7Dj-WYAEe8vr?format=jpg&name=small"
            alt=""
            className=" h-[35px]"
          />
        </div>
        <div className="text-center capitalize font-bold ">sign up</div>
        <div className="text-center text-sm font-semibold">
          input your details here
        </div>

        <div className=" mt-4"></div>
        <Box
          component="form"
          sx={{
            '& .MuiTextField-root': { m: 1, width: '30ch' },
          }}
          noValidate
          autoComplete="off"
        >
          <div>
            <TextField
              required
              id="outlined-required"
              label="Name"
              // defaultValue="John Doe"
              size="small"
            />
          </div>
          <div>
            <TextField
              required
              id="outlined-required"
              label="Your Email"
              // defaultValue="dash@gmail.com"
              size="small"
            />
          </div>
          <div>
            <TextField
              required
              id="outlined-required"
              label="Password"
              // defaultValue="123456"
              size="small"
            />
          </div>
          <div className=" w-[97%] flex mt-3">
            <button className=" bg-purple-700 text-white p-2 w-full rounded-md">
              Sign Up
            </button>
          </div>
        </Box>

        <div className="text-center mt-3 capitalize text-xs font-semibold">
          already have an account?
          <Link to={'/login'}>
            <b className=" text-purple-700 ml-1">Sign In</b>
          </Link>
        </div>

        <div className=" flex items-center mt-6">
          <div className=" w-[100px] bg-gray-200 h-[1px]"></div>
          <div className="text-center mx-2 capitalize text-xs  font-semibold">
            or sign in with
          </div>
          <div className=" w-[100px] bg-gray-200 h-[1px]"></div>
        </div>

        <div className=" my-6 flex justify-around">
          <div className=" w-[40px] h-[40px] flex items-center rounded-md justify-center shadow-xl">
            <FcGoogle />
          </div>
          <div className=" w-[40px] h-[40px] flex items-center rounded-md justify-center shadow-xl">
            <FaApple />
          </div>
          <div className=" w-[40px] h-[40px] flex items-center rounded-md justify-center shadow-xl">
            <FaFacebookF color="blue" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
