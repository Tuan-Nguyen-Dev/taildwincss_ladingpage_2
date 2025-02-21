/* eslint-disable @typescript-eslint/no-explicit-any */
import { megaMenuItems } from "@/dumydata/megaMenuItem";
import { Button } from "./ui/button";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";
import { MegaMenuItems } from "@/types/menuTypes";

const MenuDesktop = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const toggleDropdown = (menu: string) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  return (
    <div className="hidden md:flex items-center space-x-4">
      {Object.entries(megaMenuItems).map(
        ([key, value]: [string, MegaMenuItems[keyof MegaMenuItems]]) => (
          <div key={key} className="relative">
            <Button
              onClick={() => toggleDropdown(key)}
              variant={"outline"}
              className="text-white bg-black hover:text-gray-300 hover:bg-black px-3 py-2 rounded-md text-sm font-medium flex items-center no-underline border-none"
            >
              {value.title}
              <ChevronDown
                className={`h-5 w-5 transition-transform ${
                  activeDropdown === key ? "transform rotate-180" : ""
                }`}
              />
            </Button>
            {/* Drop down menu */}

            {activeDropdown === key && (
              <div className="absolute left-0 -translate-x-1/5 mt-2 bg-white text-black shadow-lg rounded-md py-2  w-screen max-w-xl">
                {key === "platform" ? (
                  <div className="grid md:grid-cols-3 gap-12 grid-cols-1 p-3">
                    {value.sections &&
                      value.sections.map((item, idx) => (
                        <div key={idx} className="px-4">
                          <h3 className="text-xs font-semibold text-gray-500 mb-2">
                            {item.title}
                          </h3>
                          <hr className="hidden md:block bg-teal-500" />
                          {item.items.map((item, idx) => (
                            <Link
                              to={`/${item.name.toLowerCase()}`}
                              className="px-4 py-3"
                            >
                              <div key={idx} className="">
                                <p className="text-sm font-medium text-gray-800">
                                  {item.name}
                                  {item.isNew && (
                                    <span className="text-blue-400 px-3">
                                      NEW
                                    </span>
                                  )}
                                </p>
                                <p className="text-sm text-gray-500">
                                  {item.desc}
                                </p>
                              </div>
                            </Link>
                          ))}
                        </div>
                      ))}
                  </div>
                ) : (
                  <div className="space-y-2 md:grid lg:grid-cols-2">
                    {value.items?.map((item, id) => (
                      <Link
                        key={item.name}
                        to={`/${item.name.toLowerCase()}`}
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        <div key={id}>
                          <p className="text-sm font-medium text-gray-800">
                            {item.name}
                          </p>
                          <p className="text-sm text-gray-500">{item.desc}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        )
      )}
      <Link to="/enterprise" className="hover:text-gray-300">
        Enterprise
      </Link>
      <Link to="/pricing" className="hover:text-gray-300">
        Pricing
      </Link>
    </div>
  );
};

export default MenuDesktop;
