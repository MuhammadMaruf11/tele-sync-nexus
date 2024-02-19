import React from "react";
import Layout from "../../Layout/Layout";
import UserLayout from "../UserLayout/UserLayout";
import HeroArea from './../../../components/HeroArea/HeroArea';
import dashboard from '/img/policy/dashboard.webp'

const UserDashboard = () => {
  const h1Title = "User Dashboard";
  const textTheme = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero praesentium ex quaerat architecto, nisi deserunt perferendis dolor saepe incidunt itaque, ratione et odio ea dolorum repellat nesciunt nam! Doloremque, eius.";
  return (
    <Layout>
      <HeroArea heroTitle={h1Title}
        heroDescription={textTheme}
        heroImg={dashboard}
      />
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
