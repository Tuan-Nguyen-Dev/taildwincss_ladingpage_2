import { logoCompany } from "@/dumydata/logoCompanyData";

const CompanyLogo = () => {
  return (
    <div className="bg-black overflow-hidden md:py-16 px-8 py-5 text-white relative">
      {/* Logo animation */}
      <div className="flex items-center animate-marquee">
        {[...logoCompany, ...logoCompany].map((logo, index) => (
          <img
            key={index}
            src={logo.src}
            alt={logo.alt}
            width={logo.width}
            height={logo.height}
            className="mx-8 object-cover shrink-0"
            loading="lazy"
          />
        ))}
      </div>
      <div className="absolute inset-y-0 left-0 w-[20%] bg-gradient-to-r from-black to-transparent"></div>
      <div className="absolute inset-y-0 right-0 w-[20%] bg-gradient-to-l from-black to-transparent"></div>
    </div>
  );
};

export default CompanyLogo;
