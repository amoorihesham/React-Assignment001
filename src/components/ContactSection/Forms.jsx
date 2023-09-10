import React from "react";

const Forms = () => {
  return (
    <form className="w-50 mx-auto">
      <div class="mb-5">
        <input
          type="text"
          class="form-control"
          id="username"
          placeholder="userName"
        />
      </div>
      <div class="mb-5">
        <input
          type="number"
          class="form-control"
          id="age"
          placeholder="userAge"
        />
      </div>
      <div class="mb-5">
        <input
          type="email"
          class="form-control"
          id="email"
          placeholder="userEmail"
        />
      </div>
      <div class="mb-5">
        <input
          type="password"
          class="form-control"
          id="password"
          placeholder="userPassword"
        />
      </div>
      <div class="mb-4">
        <button className="btn btn-success text-white">Send Message</button>
      </div>
    </form>
  );
};

export default Forms;
