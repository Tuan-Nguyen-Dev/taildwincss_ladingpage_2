import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { megaMenuItems } from "@/dumydata/megaMenuItem";
import { MegaMenuItems } from "@/types/menuTypes";
import { ChevronDown, Menu } from "lucide-react";
import { Link } from "react-router";
import { Button } from "./ui/button";
import { useState } from "react";

const MenuMobile = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const toggleDropdown = (menu: string) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };
  return (
    <div className="block md:hidden">
      <Sheet>
        <SheetTrigger>
          <Menu />
        </SheetTrigger>
        <SheetContent>
          <div className="space-y-2 mt-3">
            {Object.entries(megaMenuItems).map(
              ([key, value]: [string, MegaMenuItems[keyof MegaMenuItems]]) => (
                <div key={key} className="relative">
                  <Button
                    onClick={() => toggleDropdown(key)}
                    variant={"link"}
                    className="w-full flex justify-between items-center text-lg text-gray-800 px-4 py-2 "
                  >
                    {value.title}
                    <ChevronDown
                      className={`h-5 w-5 transition-transform ${
                        activeDropdown === key ? "rotate-180" : ""
                      }`}
                    />
                  </Button>

                  {activeDropdown === key && (
                    <div className="mt-2 shadow-lg max-h-80 overflow-y-auto">
                      {key === "platform" ? (
                        <div className="space-y-4">
                          {value.sections?.map((section, idx) => (
                            <div key={idx}>
                              <h3 className="text-sm font-semibold text-gray-600 mb-2">
                                {section.title}
                              </h3>
                              {section.items.map((item, idx) => (
                                <Link
                                  key={idx}
                                  to={`/${item.name.toLowerCase()}`}
                                  className="block p-2 rounded-md hover:bg-gray-100"
                                >
                                  <p className="text-sm text-gray-800">
                                    {item.name}
                                    {item.isNew && (
                                      <span className="text-blue-500 px-2">
                                        NEW
                                      </span>
                                    )}
                                  </p>
                                  <p className="text-xs text-gray-500">
                                    {item.desc}
                                  </p>
                                </Link>
                              ))}
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="grid grid-cols-1 gap-3">
                          {value.items?.map((item, id) => (
                            <Link
                              key={item.name}
                              to={`/${item.name.toLowerCase()}`}
                              className="block p-2 rounded-md hover:bg-gray-100"
                            >
                              <div key={id}>
                                <p className="text-sm font-medium text-gray-800">
                                  {item.name}
                                </p>
                                <p className="text-xs text-gray-500">
                                  {item.desc}
                                </p>
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
          </div>

          <Link
            to="/enterprise"
            className="block text-lg text-gray-800 px-3 py-2 rounded-md hover:bg-gray-700"
          >
            Enterprise
          </Link>
          <Link
            to="/pricing"
            className="block text-lg text-gray-800 px-3 py-2 rounded-md hover:bg-gray-700"
          >
            Pricing
          </Link>
          <Link
            to="/login"
            className="bloc text-lg text-gray-800 px-3 py-2 rounded-md hover:bg-gray-700"
          >
            Log in
          </Link>
          <Link
            to="/contact-sales"
            className="block text-lg text-gray-800 px-3 py-2 rounded-md hover:bg-gray-700"
          >
            Contact sales
          </Link>
          <Link to="/get-started" className="block">
            <Button className="bg-blue-600 hover:bg-blue-700 w-full">
              Get started free
            </Button>
          </Link>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MenuMobile;
