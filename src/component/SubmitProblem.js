import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";


const SubmitProblem = () => {

  const navigate = useNavigate();

  useEffect(()=>{
    const post = localStorage.getItem("authToken")

    if(post === "Municipal Authority"){
      navigate("/")
    }
  
  },)
  const [fname, setFname] = useState("")
  const [lname, setLname] = useState("")
  const [title, setTitle] = useState("")
  const [location, setLocation] = useState("")
  const [description, setDescription] = useState("")
  const [img, setImg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/reportproblem", {
        method: "POST",
        body: JSON.stringify({ fname, lname, img, title, location, description }),
        headers: {
          "Content-Type": "application/json"
        }
      })
      const data = await response.json()
      if (data) {
        alert("Problem submitted successfully")
        navigate('/');

        
      } else {
        alert("Error submitting problem")
      }
    } catch (error) {
      console.log(error.message)
    }
  }

  return (
    <div className=" p-4 md:p-8 bg-base-100 w-full md:h-[86vh] rounded-lg shadow">
      <h5 className="bg-base-300 rounded-t-lg p-4 text-base text-xl font-bold">
        Submit Your Application
      </h5>
      <div className="w-full p-4">
        <form className="needs-validation peer grid gap-y-4" novalidate >
          {/* <!-- Account Details --> */}
          <div className="w-full">
            <h6 className="text-lg font-semibold">1. Personal Detail</h6>
            <hr className="mb-4 mt-2" />
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <label className="form-control">
              <div className="label">
                <span className="label-text">First Name</span>
              </div>
              <input value={fname} onChange={(e) => setFname(e.target.value)} type="text" placeholder="John" className="input" required />
              <span className="error-message opacity-100">Please enter your name.</span>
              <span className="success-message">Looks good!</span>
            </label>
            <label className="form-control">
              <div className="label">
                <span className="label-text">Last Name</span>
              </div>
              <input value={lname} onChange={(e) => setLname(e.target.value)} type="text" placeholder="Doe" className="input" required />
              <span className="error-message">Please enter your last name.</span>
              <span className="success-message">Looks good!</span>
            </label>
          </div>

          {/* <!-- Personal Info --> */}
          <div className="w-full">
            <h6 className="text-lg font-semibold">2. Issue Details</h6>
            <hr className="mb-4 mt-2" />
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {/* <label className="form-control">
              <div className="label">
                <span className="label-text">Upload Photo</span>
              </div>
              <input type="file" className="input" multiple required />
              <span className="error-message">Please select the file</span>
              <span className="success-message">Looks good!</span>
            </label> */}


            <label className="form-control">
              <div className="label">
                <span className="label-text">Image</span>
              </div>
              <input
                value={img} onChange={(e) => setImg(e.target.value)}
                type="text"
                className="input"
                placeholder="Issue Tittle"
                id="jsPickr"
                required
              />
            </label>

              <label className="form-control">
                <div className="label">
                  <span className="label-text">Issue Title</span>
                </div>
                <input
                  value={title} onChange={(e) => setTitle(e.target.value)}
                  type="text"
                  className="input"
                  placeholder="Issue Tittle"
                  id="jsPickr"
                  required
                />
                <span className="error-message">Please Enter Title</span>
                <span className="success-message">Looks good!</span>
              </label>
              <label className="form-control">
                <div className="label">
                  <span className="label-text">Select Location</span>
                </div>
                <input
                  value={location} onChange={(e) => setLocation(e.target.value)}
                  type="text"
                  className="input"
                  placeholder="Issue Location"
                  id="jsPickr"
                  required
                />
                <span className="error-message">Please select your Location</span>
                <span className="success-message">Looks good!</span>
              </label>
          </div>

          <div className="w-full">
            <label className="form-control">
              <div className="label">
                <span className="label-text">Description</span>
              </div>
              <textarea
                value={description} onChange={(e) => setDescription(e.target.value)}
                className="textarea min-h-20 resize-none"
                placeholder="Hello!!!"
                required=""
              ></textarea>
              <span className="error-message">Please write few words</span>
              <span className="success-message">Looks good!</span>
            </label>
          </div>
          <div className="mt-6">
            <button type="submit" onClick={handleSubmit} name="submitButton" className="btn btn-primary" >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SubmitProblem;


