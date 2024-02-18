import React from "react";
import Layout from "../../Layout/Layout";
import UserLayout from "../UserLayout/UserLayout";
import Banner from "../../../components/Banner/Banner";
import HeroArea from './../../../components/HeroArea/HeroArea';

const UserDashboard = () => {
  const h1Title = "User Dashboard";
  const textTheme = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero praesentium ex quaerat architecto, nisi deserunt perferendis dolor saepe incidunt itaque, ratione et odio ea dolorum repellat nesciunt nam! Doloremque, eius.";
  return (
    <Layout>
      <HeroArea heroTitle={h1Title} heroDescription={textTheme} />
      <UserLayout>
        <section>
          <div className="row">
            <div className="col-12">
              <h2>Dashboard</h2>
            </div>
          </div>
        </section>
      </UserLayout>
    </Layout>
  );
};

export default UserDashboard;
