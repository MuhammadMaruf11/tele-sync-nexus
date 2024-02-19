import React from "react";
import Layout from "../../Layout/Layout";
import UserLayout from "../UserLayout/UserLayout";
import HeroArea from "../../../components/HeroArea/HeroArea";

const UserPlan = () => {
  const h1Title = "User Plan";
  const heroDescription = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia veritatis fugiat ab, nisi aspernatur aliquid dolor. Labore impedit mollitia officiis error, possimus porro, praesentium provident temporibus nemo adipisci at ad.'
  return (
    <Layout>
      <HeroArea heroTitle={h1Title} heroDescription={heroDescription} />
      <UserLayout></UserLayout>
    </Layout>
  );
};

export default UserPlan;
