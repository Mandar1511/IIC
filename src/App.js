import React from "react";
import MediaCard from "./Faculty_list";
import MediaCard_students from "./Student_list";
import Contactus from "./contactus";
import MediaCard_Former_Members from "./formermemberlist";
import Followus from "./Followus";
import Footer from "./Footer";
import Header from "./Header";
function App() {
  return (
    <>
    <Header/>
    <div className="allmembers">
      <div className="faculties">
    <h1 className="title">Faculty Members</h1>
    <MediaCard/>
   </div>
   <div className="students">
    <h1 className="title">Student Members</h1>
    <MediaCard_students/>
    </div>
    <div className="former">
    <h1 className="title">Former Members</h1>
    <MediaCard_Former_Members/>
    </div>
    <div className="contact">
    <h1 className="title">Contact Us</h1>
    <Contactus/>
    </div>
    <div className="follow">
      <h1 className="title">Follow Us</h1>
      <Followus/>
    </div>
    <Footer/>
    </div>
    </>
  );
}
export default App;