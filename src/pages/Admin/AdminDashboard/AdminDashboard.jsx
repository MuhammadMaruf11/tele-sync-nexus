import React from "react";
import AdminLayout from "../AdminLayout/AdminLayout";
// import { Link } from "react-router-dom";
import TemporaryImg from "/img/bg/coming-soon.webp";

const AdminDashboard = () => {
  return (
    <AdminLayout>
      {" "}
      <div className="w-100">
        <div className="content-header">
          <h2>Dashboard</h2>
          <h6 className="text-theme mb-0">Dashboard</h6>
        </div>

        <div className="content-body">
          <div className="dashboard-img">
            <img loading="lazy" src={TemporaryImg} alt="" />
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminDashboard;
