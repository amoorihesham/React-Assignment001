import React from "react";

const Forms = () => {
  return (
    <form className="w-75 mx-auto">
      <div className="mb-5">
        <input
          type="text"
          className="form-control"
          id="username"
          placeholder="userName"
        />
      </div>
      <div className="mb-5">
        <input
          type="number"
          className="form-control"
          id="age"
          placeholder="userAge"
        />
      </div>
      <div className="mb-5">
        <input
          type="email"
          className="form-control"
          id="email"
          placeholder="userEmail"
        />
      </div>
      <div className="mb-5">
        <input
          type="password"
          className="form-control"
          id="password"
          placeholder="userPassword"
        />
      </div>
      <div className="mb-4">
        <button className="btn btn-success text-white">Send Message</button>
      </div>
    </form>
  );
};

export default Forms;
