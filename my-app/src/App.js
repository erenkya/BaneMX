import React from "react";
import Navbar from "./component/navbar/navbar";
import Merch from "./component/merch/Merch";
import OldMerchPage from "./component/oldMerches/oldMerchPage";
import Testimonial from "./component/testimonials/testimonial.js";
import Footer from "./component/footer/footer";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Merch />
      <OldMerchPage />
      <Testimonial />
      <Footer />
    </React.Fragment>
  );
}

export default App;
