// Homepage.js
import React from 'react';
import Layout from '../layout';
import './index.css'; // Import the CSS file
import VincciImage from '../../component/image/Vincci.png'; // Use a different name if necessary
// import { IoMdInformationCircleOutline } from "react-icons/io";
import { AiOutlineLinkedin } from "react-icons/ai";

const Homepage = ({ navigateTo }) => {
    return (
        <Layout>
            <div className="full-width"> {/* Apply the full-width class */}
                <div className="content-container"> {/* Apply the content-container class */}
                    <div className="text-container"> {/* Apply the text-container class */}
                        <p className="name">Hey, I am</p>
                        <h1 className="name focus">Vincci Chye</h1>
                        <p className="title">Front End Developers</p>
                        <AiOutlineLinkedin className="contact-icon"  />

                        {/* <button onClick={() => navigateTo('/about')} className="about-button">About Me <IoMdInformationCircleOutline /></button> */}
                    </div>

                    {/* Right side with smaller and circular photo */}
                    <div className="image-container"> {/* Apply the image-container class */}
                        {/* Add your photo here */}
                        <img
                            src={VincciImage}
                            alt="Vincci"
                            className='image'
                        />
                    </div>

                </div>
            </div>
        </Layout>
    );
};

export default Homepage;
