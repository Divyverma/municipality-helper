import React, { useEffect, useState } from "react";
import Trackbar from "./TrackBar";
import { FaLocationDot } from "react-icons/fa6";
import { useParams } from "react-router";
import axios from 'axios'

const Detail = () => {

  const [detail, setDetail] = useState([]);
  const {id} = useParams();

  useEffect(()=>{
    const getDetail=async()=>{
      try{
        var result = await axios.get(`http://localhost:5000/problem/${id}`);
        // result = await result.json()
        setDetail(result.data.result)
      }catch(error){
        console.log(error.message)
      }
      // setDetail(result.result);
      // console.log(result)
    }


    getDetail();
  }, [id])


  return (
    <div className="md:h-[86vh] h-[100vh] w-full md:p-6 p-2 md:flex border">
      <div className="md:w-[30%] md:h-auto flex items-center justify-center " >
        <img className="w-[100%]" src="https://live.staticflickr.com/2325/2129108973_650474f5db_b.jpg" alt="img" />
      </div>

      <div className="md:ml-5 md:p-8 p-4 border  md:border-l md:h-[100%] h-[70%]">
        <div className=" md:flex h-full w-full flex flex-col items-center ">
          <div className=" md:pb-20  mb-5 md:mb-0">
            <h1 className="text-3xl font-bold my-5">{detail.title}</h1>
            <p className="md:text-xl text-justify pr-5">
            {detail.description}
            </p>
            <button className="mt-5 btn btn-primary md:font-bold md:text-xl" >
              <FaLocationDot/>
              {detail.location}
            </button>
          </div>

          <div className="w-full md:mt-8 flex flex-col justify-around items-center">
            <h1 className="md:text-3xl sm:text-2xl font-bold mb-5">Issue Status</h1>
            <Trackbar />
          </div>
        </div>
      </div>
      <div className="border w-[20%] ml-4 p-4">
        <h2 className="md:text-2xl sm:text-2xl font-bold" >Submitted by:</h2>

        <div>
          <h1>Name:</h1>
          <h1>Name:</h1>

        </div>
      </div>
    </div>
  );
};

export default Detail;
