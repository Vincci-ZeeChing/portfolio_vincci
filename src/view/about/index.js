import React from 'react';
import Layout from "../layout";
import './about.css'; // Import the CSS file

const About = () => {
    return (
        <Layout>
            <div className="about-container">
                <h2 className="about-title">About Me</h2>
                <div className="about-columns">
                    <div className="about-column">
                        <div className="about-card">
                            <p className="about-text">Hello! I'm Vincci Chye Zee Ching, a dedicated and passionate front-end developer based in the vibrant city of Kuala Lumpur. With over one year of experience in the industry, I have honed my skills in creating visually stunning and user-centric web interfaces.</p>
                        </div>
                        <div className="about-card">
                            <p className="about-text">Currently, I am working as a front-end developer and help desk specialist, where I assist clients in setting up conversion tracking in ads and Google Analytics 4 (GA4). This role has given me the opportunity to blend my technical knowledge with client interaction, ensuring that their needs are met with precision and efficiency.</p>
                        </div>
                        <div className="about-card">
                            <p className="about-text">Beyond coding, I am a strong advocate for continuous learning and professional development. I regularly participate in online courses, workshops, and coding challenges to sharpen my skills and stay updated with the latest industry trends. I also enjoy contributing to open-source projects and engaging with the developer community through forums and social media.</p>
                        </div>
                    </div>
                    <div className="about-column">
                        <div className="about-card">
                            <p className="about-text">My journey in web development began during my university days, where I was captivated by the endless possibilities of coding and design. I decided to pursue a career in front-end development to combine my love for creativity with my technical skills. Over time, I have developed a keen eye for detail and a deep understanding of the principles of user experience and design.</p>
                        </div>
                        <div className="about-card">
                            <p className="about-text">One of my core beliefs is that clean and efficient code is the foundation of any successful web project. I am committed to writing code that is not only functional but also easy to maintain and scale. My toolkit includes HTML, CSS, JavaScript, React, and Angular, among others, and I am always eager to learn new technologies and frameworks to stay ahead in this ever-evolving field.</p>
                        </div>
                        <div className="about-card">
                            <p className="about-text">When I'm not immersed in code, you can find me exploring new places, indulging in photography, or playing video games. I believe that a balanced life is crucial for creativity and productivity, and I strive to bring this balance into my work as well.</p>
                        </div>
                        <div className="about-card">
                            <p className="about-text">I am always excited about new opportunities and collaborations that allow me to leverage my skills and creativity to bring ideas to life. Let's connect and create something amazing together!</p>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default About;
