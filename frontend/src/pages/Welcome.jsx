import React from "react";
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <div className="text-center">
      <h1>
        Welcome to <span className="text-primary">Contact Keeper</span>
      </h1>
      <p>Where you can save all your favorite contacts 🤩</p>
      <img
        className="welcome-img"
        src="https://res.cloudinary.com/dtp45ukcw/image/upload/v1623523872/index_jomkq2.jpg"
        alt=""
      />

      <div className="m-1">
        <Link to="/register" className="btn btn-primary">
          Get Started Now
        </Link>
      </div>
      <div>
        <h4 className="d-inline">Already a member? </h4>{" "}
        <Link to="/login">Sign In</Link>
      </div>
    </div>
  );
};

export default Welcome;
