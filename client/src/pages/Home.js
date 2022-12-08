import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import "../styles/Home.css";

import VideoAd from '../assets/videos/most-recent-ad.mp4'

function Home() {
  const [state, handleSubmit] = useForm("mgeqjglb");
  return (
    <>
      <h2 className="home-header">Welcome to Beverage Express!</h2>
      <p className="home-description">
        We are proud to be Carlisle's family-run, locally-owned beer
        distributor. We boast the best slection of domestic, craft, and import
        beer in the area at some of the best prices.
      </p>
      <div className="home-content">
      <div className="email-listserv">
        <h3 className="listserv-header">Sign Up for Our Newsletter</h3>
        <p className="listserv-description">
          We are very active on social media, but if being social isn't your
          thing, sign up to join our email listserv. We will be sending out our
          ads, publicity, product features, and information about special
          events. You will receive about one to two emails a month (so it won't
          take up too much space in your inbox).
        </p>
        <form className="listserv-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input id="name" type="text" name="name" />
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
          <button type="submit" disabled={state.submitting}>
            Submit
          </button>
        </form>
      </div>
      <div className="recent-ad">
        <video src={VideoAd} controls="controls" autoPlay={true} type="video/mp4" />
      </div>
      </div>
    </>
  );
}

export default Home;
