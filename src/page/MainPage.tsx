//import React from "react";
import Header from "../components/Header.tsx";
import Footer from "../components/Footer.tsx";
import mainImage from "../common/images/main.png";

function MainPage() {
  return (
    <div className="w-screen h-screen bg-black">
      <div className="flex">
        <Header />
      </div>
      <div>
        <img src={mainImage} />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default MainPage;
