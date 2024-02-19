import Layout from "../Layout/Layout";
import Banner from "../../components/Banner/Banner";
import { Link } from "react-router-dom";
import ServicesComp from "../../components/ServicesComp/ServicesComp";
import CTA from "../../components/CTA/CTA";
import AboutComp from "../../components/AboutComp/AboutComp";

const Home = () => {


  return (
    <Layout>
      <Banner />
      <AboutComp />
      <ServicesComp />
      <CTA />
    </Layout>
  );
};

export default Home;
