
import React from 'react';


import Navbar from "./navbar";
import IntroSection from "./introSection";
import Templates from "./templates";
import Footer from "./footer";
import Head from "next/head";


function HomePage() {
  return (
    <div className="flex flex-col bg-white h-screen w-screen">
        <Head>
          <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet"></link>
          <link rel="shortcut icon" href="/static/techwithe_browser_icon.png" />
        </Head>
        {/* <script type="module" src="https://unpkg.com/ionicons@5.1.2/dist/ionicons/ionicons.esm.js"></script>
        <script noModule="" src="https://unpkg.com/ionicons@5.1.2/dist/ionicons/ionicons.js"></script> */}
        <Navbar/>
        <IntroSection/>
        <Templates/>
        <Footer/>
      
    </div>
  );
}

export default HomePage;
