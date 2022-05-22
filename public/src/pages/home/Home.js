import { useEffect } from "react";
import "./home.css";
import { Postbox, Timelinebox } from "../../components";
import {
  Creatorbox,
  Friendsuggestion,
  Navbar,
  Sidebar,
} from "../../containers";

const Home = () => {
  useEffect(async () => {
    try {
      const response = await fetch("/api/get", {
        credentials: "include",
      });
    } catch (er) {
      console.log(er);
    }
    // console.log("response", response);
    // const get = await response.json();
    // console.log(new Date());
  });

  return (
    <div className="home-container">
      <Navbar />
      <div className="home-wrapper">
        <div className="home-left">
          <Sidebar />
        </div>
        <div className="home-middle">
          <p className="home-middle-text">HOME FEED</p>
          <Postbox />
          <Timelinebox />
          <Timelinebox />
        </div>
        <div className="home-right">
          <div className="home-right-contents">
            <Creatorbox />
            <Friendsuggestion />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
