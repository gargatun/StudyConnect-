import React from "react";
import EditProfile from "../components/EditProfile";
import Navbar from "../components/Navbar";
import SideNav from "../components/SideNav";
import Footer from "../components/Footer";

function EditProfilePage() {
  return (
    <div>
      <Navbar />
      <div className="flex">
        <SideNav />
        <EditProfile />
      </div>
      <Footer />
    </div>
  );
}

EditProfilePage.propTypes = {};

export default EditProfilePage;
