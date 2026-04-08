import React, { useState } from "react";
import HomeLayout from "../../Layouts/HomeLayout/HomeLayout";
import Hero from "./homedata/Hero";
import Carddata from "./homedata/Carddata";
import Faq from "./homedata/Faq";

const HomePage = () => {
  return (
    <HomeLayout>
      <Hero />
      <Carddata />
      <Faq/>
    </HomeLayout>
  );
};

export default HomePage;
