import React from "react";
import Header from "./header/Header";
import Exchanger from "./exchanger/Exchanger";
import Tabs from "./tabs/Tabs";
import CourseTable from "../../common/course-table/CourseTable";
function Home() {
  return (
    <>
      <div class="row">
        <Header />
        <Exchanger />
        <Tabs />
        <CourseTable />
      </div>
    </>
  );
}
export default Home;
