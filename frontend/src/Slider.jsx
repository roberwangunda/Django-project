import React from "react";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const fadeImages = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu7P_eeoc435vgeCrLAeK7w6s9h1lJG2RsDw&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVZFzZnjQuWJZPgTp5DT7mRIBWrF2_Fs2G1Q&usqp=CAU",
];

const Slider = () => {
    return (
        <div className="Slider-container">
            <Fade>
                <div className="each-fade">
                    <div className="image-container">
                        <img src={fadeImages[0]}  />
                    </div>
                </div>
                <div className="each-fade">
                    <div className="image-container">
                        <img src={fadeImages[1]} />
                    </div>
                </div>
            </Fade>
        </div>
    );
};

export default Slider;
