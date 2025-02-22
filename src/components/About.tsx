import React from "react";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

const About = () => {
  return (
    <div className="bg-black py-10 md:py-24 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="max-w-md space-y-4">
            <h2 className="text-4xl md:text-8xl font-bold mb-8">
              Try it for <br className="hidden md:block" /> free
            </h2>
            <p className="text-xl mb-8">
              Try CodeTutor for as long as you like with our free Starter plan.
              Purchase a paid Site plan to publish, host, and unlock additional
              features.
            </p>
            <Button
              variant={"ghost"}
              className="bg-blue-500 px-8 py-5 hover:bg-blue-600 transition-colors cursor-pointer"
            >
              Get started - it's free
            </Button>
          </div>
          <div className="max-w-md space-y-12">
            <div>
              <p className="text-xl mb-8">
                Try CodeTutor for as long as you like with our free Starter
                plan. Purchase a paid Site plan to publish, host, and unlock
                additional features.
              </p>
            </div>
            <div>
              <h3 className="text-2xl mb-5">Contact sales</h3>
              <p className="text-sm">
                Interested in CodeTutor Enterprise? Get in touch with our sales
                team to receive a free personalized demo.
              </p>
              <Button
                variant={"link"}
                className="flex items-center text-white hover:underline cursor-pointer px-0"
              >
                Contact sales
                <ArrowRight />
              </Button>
            </div>
            <div>
              <h3 className="text-2xl mb-5">Hire a Certified Partner</h3>
              <p className="text-sm ">
                Extend the power of your team by hiring a Certified CodeTutor
                Partner — we'll match you with the best in the business.
              </p>
              <Button
                variant={"link"}
                className="flex items-center text-white hover:underline cursor-pointer px-0"
              >
                Browse Partners
                <ArrowRight />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
