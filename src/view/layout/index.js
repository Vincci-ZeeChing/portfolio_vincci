import React from 'react';
// import Navbar from "../../component/layout/navbar";
// import Footer from "../../component/layout/footer";

const Layout = ({children}) => {

    return (
        <React.Fragment>
            {/*<Navbar/>*/}
            <main>
                <div style={{ marginTop: "1vh", marginRight: "2vw", marginLeft: "2vw", marginBottom: "3vh", minHeight: "85vh", backgroundColor: 'white', padding: "3vh" }}>
                    {children}
                </div>
            </main>
            {/*<Footer/>*/}
        </React.Fragment>
    );
};

export default Layout;
