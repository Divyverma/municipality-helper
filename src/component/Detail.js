import React from "react";
import Carousel from "./Crousel";

const Detail = () => {
  return (
    <div className="h-[86vh] md:p-8 p-4  ">      
      <Carousel/>

      <div className="py-5">
        <h1 className="text-3xl font-bold" >Issue Title</h1>
        <p className="text-xl" >description sdfsdfsfm  sdf fd asdf sdf sdf dfs sdf sdf sdf sdf sdf sdf sdfsdf sdf sdf description sdfsdfsfm  sdf fd asdf sdf sdf dfs sdf sdf sdf sdf sdf sdf sdfsdf sdf sdf</p>
      </div>
    </div>
  );
};

export default Detail;
