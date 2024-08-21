import React from "react";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="flex flex-col items-center mx-5 gap-9">
      <h1 className="font-extrabold text-[40px] text-center mt-16">
        <span className="text-[#f56551]">
          Discover Your Next Adventure with AI:
        </span>{" "}
        Personalized Itineraries at Your Fingertips
      </h1>
      <p className="text-xl text-gray-500 text-center">
        Your Personal trip planner and travel curator, creating custom
        itineraries tailored to your interests and budget.
      </p>
      <Link to="/create-trip">
        <Button>Get Started, It's Free</Button>
      </Link>
      <div className="mt-8">
        <img src="/hero.png" alt="Hero Image" className="w-full" />
      </div>
    </div>
  );
};

export default Hero;
