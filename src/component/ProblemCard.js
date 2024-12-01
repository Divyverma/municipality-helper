import React from "react";


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
          <h5 class="card-title mb-2.5">Apple Smart Watch</h5>
          <p class="mb-4">
            Stay connected, motivated, and healthy with the latest Apple Watch.
          </p>
          <div class="card-actions">
            <button class="btn btn-primary">Buy Now</button>
            <button class="btn btn-secondary btn-soft">Add to cart</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProblemCard;
