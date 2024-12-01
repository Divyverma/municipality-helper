import React from "react";
import {Link} from 'react-router-dom';


const ProblemCard = () => {
  return (
    <>
      <div class="card sm:max-w-sm m-2">
        <figure>
          <img
            src="https://cdn.flyonui.com/fy-assets/components/card/image-9.png"
            alt="Watch"
          />
        </figure>
        <div class="card-body">
          <h5 class="card-title mb-2.5">Issue title</h5>
          <p class="mb-4">
            issue description...Stay connected, motivated, and healthy with the latest Apple Watch.
          </p>
          <div class="card-actions">
            <button class="btn btn-primary">
              <Link to="/detail">View Detail</Link>
            </button>
            <button class="btn btn-secondary btn-soft">Location</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProblemCard;
