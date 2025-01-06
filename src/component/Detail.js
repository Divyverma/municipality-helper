import React from "react";
import Trackbar from "./TrackBar";
import { FaLocationDot } from "react-icons/fa6";

const Detail = () => {
  return (
    <div className="md:h-[86vh] h-[100vh] w-full md:p-6 p-2 md:flex border">
      <div className="md:w-[30%] md:h-auto flex items-center justify-center " >
        <img className="w-[100%]" src="https://live.staticflickr.com/2325/2129108973_650474f5db_b.jpg" alt="img" />
      </div>

      <div className="md:ml-5 md:p-8 p-4 w-[100%] md:border-l md:nh-[100%] h-[70%]">
        <div className=" md:flex h-full w-full flex flex-col items-center ">
          <div className=" md:pb-20  mb-5 md:mb-0">
            <h1 className="text-3xl font-bold my-5">Issue Title</h1>
            <p className="md:text-xl text-justify pr-5">
              In a lot of problems, you may be asked to reverse the links between a set of nodes of a linked list. Often, the constraint is that you need to do this in-place, i.e., using the existing node objects and without using extra memory. This is where the above mentioned pattern is useful.
            </p>
            <button className="mt-5 btn btn-primary md:font-bold md:text-xl" >
              <FaLocationDot/>
              location
            </button>
          </div>

          <div className="w-full md:mt-8 flex flex-col justify-around items-center">
            <h1 className="md:text-3xl sm:text-2xl font-bold mb-5">Issue Status</h1>
            <Trackbar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
