import React from "react";

const About = () => {
  return (
    <div>
      <div className="m-1">
        <h1>About</h1>
        <p className="my-1">
          A web app to save and keep track of your contact information about
          your friends, family and colleges.
        </p>
        <p className="my-1">
          Built with the MERN Stack by{" "}
          <a
            href="https://twitter.com/Husn_Hsn"
            rel="noreferrer"
            target="_blank"
          >
            Hussein Hassan
          </a>
        </p>
      </div>
      <p className="bg-dark p">
        <strong>Version: </strong> 1.0.0
      </p>
    </div>
  );
};

export default About;
