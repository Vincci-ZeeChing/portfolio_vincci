// Homepage.js
import React from 'react';
import Layout from '../layout';
import './index.css'; // Import the CSS file
import VincciImage from '../../component/image/Vincci.JPEG'; // Use a different name if necessary

const Homepage = () => {
    return (
        <Layout>
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '20px', backgroundColor: '#f4f4f4' }}>
                {/* Left side with text */}
                {/*<div>*/}
                {/*    <p className="name">I am</p>*/}
                {/*    <h1 className="name focus">Vincci</h1>*/}
                {/*    <p className="title">Software Engineer</p>*/}
                {/*</div>*/}
                <div>
                    <p className="name" style={{ fontSize: '18px', color: '#333' }}>I am</p>
                    <h1 className="name focus" style={{ fontSize: '36px', color: '#388087', marginBottom: '10px' }}>Vincci</h1>
                    <p className="title" style={{ fontSize: '20px', fontWeight: 'bold', color: '#555' }}>Software Engineer</p>
                </div>

                {/* Right side with smaller and circular photo */}
                <div style={{alignSelf: 'flex-end'}}>
                    {/* Add your photo here */}
                    <img
                        src={VincciImage}
                        alt="Vincci"
                        style={{maxWidth: '500px', borderRadius: '50%', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'}}
                    />
                </div>
            </div>
        </Layout>
    );
};

export default Homepage;

