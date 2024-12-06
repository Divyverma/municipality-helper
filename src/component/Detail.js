import React from "react";
import Carousel from "./Crousel";
import Trackbar from "./TrackBar";

const Detail = () => {
  return (
    <div className="h-[86vh] md:p-8 p-4  ">
      <Carousel />

      <div className="py-5 md:flex mt-10 border-t">
        <div className=" md:border-r w-[85%]">
          <h1 className="text-3xl font-bold">Issue Title</h1>
          <p className="text-xl">
            description sdfsdfsfm sdf fd asdf sdf sdf dfs sdf sdf sdf sdf sdf
            sdf sdfsdf sdf sdf description sdfsdfsfm sdf fd asdf sdf sdf dfs sdf
            sdf sdf sdf sdf sdf sdfsdf sdf sdf
          </p>
        </div>

        <div className="sm:mt-10 md:w-[50%] mt-5 flex justify-around item-center">
            <Trackbar/>
        </div>
      </div>
    </div>
  );
};

export default Detail;
