import React from "react";
import '../styles/trackBar.css'

const Trackbar = () => {
  return (
    <>
      <div class="tracking-container resp">
        <div class="step active">
          <div class="circle">1</div>
          <p class="label">Issue Submitted</p>
        </div>
        <div class="step active">
          <div class="circle">2</div>
          <p class="label">Resolving</p>
        </div>
        <div class="step">
          <div class="circle">3</div>
          <p class="label">Resolved</p>
        </div>
      </div>
    </>
  );
};

export default Trackbar;
