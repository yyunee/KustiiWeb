//import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

function NoticePage() {
  return (
    <div className="">
      <Header />
      <div className="bg-black h-[150px] w-screen">image</div>
      <div className="flex">
        <div>메뉴바</div>
        <div className="text-[32px] ">주요소식</div>
        <div className="flex">
          <div>categorize</div>
          <div>search</div>
          <div>button</div>
        </div>
      </div>
      <div>
        s
        <Footer />
      </div>
    </div>
  );
}

export default NoticePage;
