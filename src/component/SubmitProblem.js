// import React from 'react'

const SubmitProblem = () => {
  return (
    <div class=" p-4 md:p-8 bg-base-100 w-full rounded-lg shadow">
  <h5 class="bg-base-300 rounded-t-lg p-4 text-base text-xl font-bold">JS Validation</h5>
  <div class="w-full p-4">
    <form class="needs-validation peer grid gap-y-4" novalidate>
      {/* <!-- Account Details --> */}
      <div class="w-full">
        <h6 class="text-lg font-semibold">1. Account Details</h6>
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
      {/* <!-- Email and password --> */}
      <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
        <label class="form-control">
          <div class="label">
            <span class="label-text">Email</span>
          </div>
          <input type="email" class="input" placeholder="john@gmail.com" aria-label="john@gmail.com" required="" />
          <span class="error-message">Please enter a valid email</span>
          <span class="success-message">Looks good!</span>
        </label>
        <label class="form-control">
          <div class="label">
            <span class="label-text">Password</span>
          </div>
          <div class="input-group">
            <input id="password" type="password" class="input" placeholder="Enter password" required />
            <span class="input-group-text">
              <button type="button" data-toggle-password='{ "target": "#password" }' class="block">
                <span class="icon-[tabler--eye] text-base-content/80 password-active:block hidden size-4 flex-shrink-0" ></span>
                <span class="icon-[tabler--eye-off] text-base-content/80 password-active:hidden block size-4 flex-shrink-0" ></span>
              </button>
            </span>
          </div>
          <span class="error-message">Please enter a valid password</span>
          <span class="success-message">Looks good!</span>
        </label>
      </div>
      {/* <!-- Personal Info --> */}
      <div class="w-full">
        <h6 class="text-lg font-semibold">2. Personal Info</h6>
        <hr class="mb-4 mt-2" />
      </div>
      <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
        <label class="form-control">
          <div class="label">
            <span class="label-text">Profile Pic</span>
          </div>
          <input type="file" class="input" required />
          <span class="error-message">Please select the file</span>
          <span class="success-message">Looks good!</span>
        </label>
        <label class="form-control">
          <div class="label">
            <span class="label-text">DOB</span>
          </div>
          <input type="text" class="input" placeholder="YYYY-MM-DD" id="jsPickr" required />
          <span class="error-message">Please select your DOB</span>
          <span class="success-message">Looks good!</span>
        </label>
      </div>
      <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div class="form-control">
          <div class="label">
            <span class="label-text">Pick your Country</span>
          </div>
          <select class="select" id="country" aria-label="Select Country" required>
            <option value="">Select Country</option>
            <option value="usa">USA</option>
            <option value="uk">UK</option>
            <option value="france">France</option>
            <option value="australia">Australia</option>
            <option value="spain">Spain</option>
          </select>
          <span class="error-message">Please select your country</span>
          <span class="success-message">Looks good!</span>
        </div>
        <div>
          <div class="label">
            <span class="label-text">Gender</span>
          </div>
          <label class="form-control flex items-center gap-3">
            <input type="radio" name="radio-0" class="radio radio-primary" required />
            <span class="label cursor-pointer">
              <span class="label-text text-base">Male</span>
            </span>
          </label>
          <label class="form-control flex items-center gap-3">
            <input type="radio" name="radio-0" class="radio radio-primary" required />
            <span class="label cursor-pointer">
              <span class="label-text text-base">Female</span>
            </span>
          </label>
          <span class="error-message">Please select your Gender</span>
          <span class="success-message">Looks good!</span>
        </div>
      </div>
      <div class="w-full">
        <label class="form-control">
          <div class="label">
            <span class="label-text">Bio</span>
          </div>
          <textarea class="textarea min-h-20 resize-none" placeholder="Hello!!!" required=""></textarea>
          <span class="error-message">Please write few words</span>
          <span class="success-message">Looks good!</span>
        </label>
      </div>
      <div class="form-control">
        <label class="flex items-center gap-3">
          <input type="checkbox" class="switch switch-primary" required />
          <span class="label cursor-pointer">
            <span class="label-text text-base">Send me related emails</span>
          </span>
        </label>
        <span class="error-message">Please select your preference</span>
        <span class="success-message">Looks good!</span>
      </div>
      <div class="form-control">
        <label class="flex items-center gap-3">
          <input type="checkbox" class="checkbox checkbox-primary" id="check1" required />
          <span class="label cursor-pointer flex-col items-start">
            <span class="label-text text-base">Agree to our terms and conditions</span>
          </span>
        </label>
        <span class="error-message">Please confirm our T&C</span>
        <span class="success-message">Looks good!</span>
      </div>
      {/* <!-- Submit button --> */}
     <div class="mt-6">
        <button type="submit" name="submitButton" class="btn btn-primary">Submit</button>
      </div>
    </form>
  </div>
</div>
  )
}

export default SubmitProblem
