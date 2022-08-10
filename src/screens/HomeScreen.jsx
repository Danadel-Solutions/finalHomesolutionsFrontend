import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listProperties } from "../actions/propertyActions";

import Banner from "../components/Banner";
import FeaturedCompanies from "../components/FeaturedCompanies";
import FeaturedProjects from "../components/FeaturedProjects";
import LatestListed from "../components/LatestListed";
import FromBlog from "../components/FromBlog";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet";

const HomeScreen = () => {
  const dispatch = useDispatch();
  const propertyList = useSelector((state) => state.propertyList) || [];
  useEffect(() => {
    dispatch(listProperties());
  }, []);
  return (
    <div className="home">
      <Helmet>
        <title>HomeSolutions - Home</title>
        <meta charSet="utf-8" />
        <meta name="description" content="Login page" />
      </Helmet>
      <Banner />
      <FeaturedCompanies />
      {/* <FeaturedProjects propertyList={propertyList} /> */}
      <LatestListed propertyList={propertyList} />
      {/* <FromBlog /> */}
      <Footer />
    </div>
  );
};

export default HomeScreen;
