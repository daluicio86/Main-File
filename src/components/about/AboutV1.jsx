
"use client"
import React from "react";
import AboutV1Content from "./AboutV1Content";
import ReactPlayer from "react-player";

const AboutV1 = ({ aboutClass }) => {
  return (
    <>
      <div
        className={`about-area animate__animated animate__slideInUp ${aboutClass} mt-50`}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="about-thumb animate__animated animate__slideInUp">
                <div>
                  <ReactPlayer
                    url="https://www.youtube.com/embed/6pk8e99hTqA?si=yQk9ELfne5CdvpAG?autoplay=1&cc_load_policy=1"
                    height="300px"
                    width="100%"
                    controls
                    playing={false}
                  />
                </div>
                {/*   <div className="about-shape">
                                    <Image src={aboutShape} alt="image" />
                                </div>*/}
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <AboutV1Content />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutV1;
