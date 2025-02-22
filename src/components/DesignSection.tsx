/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link } from "react-router";
import { Button } from "./ui/button";
import { tabsData } from "@/dumydata/tabData";
import React, { useEffect, useRef, useState } from "react";
import { BsPlayFill, BsPauseFill } from "react-icons/bs";
import { HiArrowRight } from "react-icons/hi";
const DesignSection = () => {
  const [activeTab, setActiveTab] = useState("tab1");
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const progressInterval = useRef<any>(null);

  const PROGRESS_DURATION = 10000; // 10 seconds for each tab
  const UPDATE_INTERVAL = 100; // Update progress every 100ms

  useEffect(() => {
    startProgressTimer();
    return () => clearInterval(progressInterval.current);
  }, [activeTab]);

  const startProgressTimer = () => {
    setProgress(0);
    clearInterval(progressInterval.current);

    progressInterval.current = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          // Move to next tab
          const currentIndex = tabsData.findIndex(
            (tab) => tab.id === activeTab
          );
          const nextIndex = (currentIndex + 1) % tabsData.length;
          setActiveTab(tabsData[nextIndex].id);
          return 0;
        }
        return prev + (UPDATE_INTERVAL / PROGRESS_DURATION) * 100;
      });
    }, UPDATE_INTERVAL);
  };

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
    setIsPlaying(true);
    setProgress(0);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
    const video = document.querySelector(
      `video[data-tab="${activeTab}"]`
    ) as HTMLVideoElement;
    if (video) {
      if (isPlaying) {
        video.pause();
        clearInterval(progressInterval.current);
      } else {
        video.play();
        startProgressTimer();
      }
    }
  };
  return (
    <div className="bg-black text-white">
      <div className="container mx-auto md:py-16 px-4 py-8">
        <div className="max-w-[50rem] lg:mb-24 mb-16">
          <h2 className="text-6xl md:text-7xl font-bold text-white mb-8">
            Launch pixel-perfect sites
          </h2>
        </div>

        {/* content gird */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* content */}
          <div className="flex flex-col justify-between gap-16">
            {/* subheading */}
            <p className="text-2xl text-gray-200">
              Rethink the web dev cycle with CodeTutor. Give your design and
              marketing teams the power to launch sophisticated sites quickly —
              so your dev team can focus on more complex work, not pixel-perfect
              revisions.
            </p>
            <Link to={"/"}>
              <Button className="px-10 py-6 text-white bg-blue-500 hover:bg-blue-400 hover:cursor-pointer">
                Get Started — it's free
              </Button>
            </Link>
            <div className="space-y-4">
              {tabsData.map((tab) => (
                <div
                  key={tab.id}
                  className="relative pl-4 cursor-pointer"
                  onClick={() => handleTabClick(tab.id)}
                >
                  {/* Progress bar */}
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gray-800">
                    {activeTab === tab.id && (
                      <div
                        className="absolute top-0 left-0 w-full bg-blue-600 transition-all duration-100"
                        style={{ height: `${progress}%` }}
                      />
                    )}
                  </div>

                  <h3 className="text-xl font-semibold text-white mb-2">
                    {tab.title}
                  </h3>
                  <p
                    className={`text-gray-400 transition-all duration-300 ${
                      activeTab === tab.id
                        ? "h-auto opacity-100"
                        : "h-0 opacity-0 overflow-hidden"
                    }`}
                  >
                    {tab.subtitle}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* video */}
          <div className="relative">
            <div className="max-w-[640px] mx-auto">
              {tabsData.map((tab) => (
                <div
                  key={tab.id}
                  className={`transition-opacity duration-500 ${
                    activeTab === tab.id ? "opacity-100" : "opacity-0 hidden"
                  }`}
                >
                  <video
                    data-tab={tab.id}
                    src={tab.video}
                    poster={tab.poster}
                    className="w-full rounded-lg"
                    autoPlay
                    muted
                    playsInline
                    loop
                  />
                  <div className="flex items-center justify-between mt-4">
                    <Link
                      to={tab.cta.link}
                      className="inline-flex items-center text-white hover:text-gray-300 transition-colors"
                    >
                      {tab.cta.text}
                      <HiArrowRight className="ml-2" />
                    </Link>
                    <button
                      onClick={togglePlayPause}
                      className="p-2 text-white hover:text-gray-300"
                    >
                      {isPlaying ? (
                        <BsPauseFill size={24} />
                      ) : (
                        <BsPlayFill size={24} />
                      )}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesignSection;
