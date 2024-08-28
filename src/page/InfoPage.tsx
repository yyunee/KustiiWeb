//import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import infoImage from "../common/images/info.png";
function InfoPage() {
  return (
    <div>
      <Header />

      <img src={infoImage} />

      <Footer />
    </div>
  );
}

export default InfoPage;
