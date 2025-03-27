import React from "react";
import Navbar from "../components/Navbar";
import SideNav from "../components/SideNav";
import ClassHistory from "../components/ClassHistory";

//
function ClassHistoryPage() {
  return (
    <div>
      <Navbar />
      <div className="flex">
        <SideNav />
        <ClassHistory />
      </div>
    </div>
  );
}

ClassHistory.propTypes = {};
export default ClassHistoryPage;
