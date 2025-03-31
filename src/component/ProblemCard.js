import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { FaLocationDot } from "react-icons/fa6";


const ProblemCard = () => {

  const [problems, setProblems] = useState([])

  useEffect(() => {
    getProblem();
  }, [])

  const getProblem = async () => {
    var result = await fetch("http://localhost:5001/problems")
    result = await result.json()
    setProblems(result.result);
    // console.log(result.result.length)
    // console.log(problems)
  }

  return (
    <>
      {
        problems.length > 0 ? problems.map((item, i) =>
          <>
            <div class="card sm:max-w-sm m-2 ">
              <figure>
                <img
                  src="https://cdn.flyonui.com/fy-assets/components/card/image-9.png"
                  alt="Watch"
                />
              </figure>
              <div class="card-body">
                <h5 class="card-title mb-2.5">{item.title}</h5>
                {/* <h5>{item.id}</h5> */}
                <p class="mb-4 h-[50%]">
                  {item.description}
                </p>
                <div class="card-actions">
                  <button class="btn btn-primary">
                    <Link to={`/detail/${item.id}`}>View Detail</Link>
                  </button>
                  <button class="btn btn-secondary btn-soft">
                  <FaLocationDot/>
                  {item.location}
                  </button>
                </div>
              </div>
            </div>

          </>
        ) :
          <>
            <h1>nothing to show</h1>
          </>
      }
    </>
  );
};

export default ProblemCard;
