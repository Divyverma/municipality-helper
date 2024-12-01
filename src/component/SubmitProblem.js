// import React from 'react'

const SubmitProblem = () => {
  return (
    <div class=" p-4 md:p-8 bg-base-100 w-full md:h-[86vh] rounded-lg shadow">
      <h5 class="bg-base-300 rounded-t-lg p-4 text-base text-xl font-bold">
        Submit Your Application
      </h5>
      <div class="w-full p-4">
        <form class="needs-validation peer grid gap-y-4" novalidate>
          {/* <!-- Account Details --> */}
          <div class="w-full">
            <h6 class="text-lg font-semibold">1. Personal Detail</h6>
            <hr class="mb-4 mt-2" />
          </div>
          <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
            <label class="form-control">
              <div class="label">
                <span class="label-text">First Name</span>
              </div>
              <input type="text" placeholder="John" class="input" required />
              <span class="error-message">Please enter your name.</span>
              <span class="success-message">Looks good!</span>
            </label>
            <label class="form-control">
              <div class="label">
                <span class="label-text">Last Name</span>
              </div>
              <input type="text" placeholder="Doe" class="input" required />
              <span class="error-message">Please enter your last name.</span>
              <span class="success-message">Looks good!</span>
            </label>
          </div>
          
          {/* <!-- Personal Info --> */}
          <div class="w-full">
            <h6 class="text-lg font-semibold">2. Issue Details</h6>
            <hr class="mb-4 mt-2" />
          </div>
          <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
            <label class="form-control">
              <div class="label">
                <span class="label-text">Upload Photo</span>
              </div>
              <input type="file" class="input" multiple required />
              <span class="error-message">Please select the file</span>
              <span class="success-message">Looks good!</span>
            </label>
            <label class="form-control">
              <div class="label">
                <span class="label-text">Issue Title</span>
              </div>
              <input
                type="text"
                class="input"
                placeholder="Issue Tittle"
                id="jsPickr"
                required
              />
              <span class="error-message">Please Enter Title</span>
              <span class="success-message">Looks good!</span>
            </label>
            <label class="form-control">
              <div class="label">
                <span class="label-text">Select Location</span>
              </div>
              <input
                type="text"
                class="input"
                placeholder="Issue Location"
                id="jsPickr"
                required
              />
              <span class="error-message">Please select your Location</span>
              <span class="success-message">Looks good!</span>
            </label>
          </div>
          
          <div class="w-full">
            <label class="form-control">
              <div class="label">
                <span class="label-text">Description</span>
              </div>
              <textarea
                class="textarea min-h-20 resize-none"
                placeholder="Hello!!!"
                required=""
              ></textarea>
              <span class="error-message">Please write few words</span>
              <span class="success-message">Looks good!</span>
            </label>
          </div>
          <div class="mt-6">
            <button type="submit" name="submitButton" class="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SubmitProblem;
