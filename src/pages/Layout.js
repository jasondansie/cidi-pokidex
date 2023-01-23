import React from "react";
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";
import "./Layout.css";

function Layout()
{
    return(
        <div className="pageContainer">
            <Header />
            <Main />
            <Footer />
        </div>
    );
}

export default Layout;