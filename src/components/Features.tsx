import { FiLayout, FiUploadCloud, FiBarChart, FiServer } from "react-icons/fi";
const Features = () => {
  const features = [
    {
      icon: <FiLayout className="w-8 h-8" />,
      title: "Design and build",
      description:
        "Designers can take control of HTML, CSS, and JavaScript in a visual canvas — while marketers can work with pre-made, design-approved building blocks.",
      link: "#design-build",
    },
    {
      icon: <FiUploadCloud className="w-8 h-8" />,
      title: "Publish and edit",
      description:
        "Choose how you want to add, edit, and update content at scale with our CMS: visually in our platform or programmatically through our headless APIs.",
      link: "#publish-edit",
    },
    {
      icon: <FiBarChart className="w-8 h-8" />,
      title: "Analyze and optimize",
      description:
        "Transform your site into your most valuable marketing asset with native tools for AI-powered personalization, A/B testing, SEO, localization, and more.",
      link: "#analyze-optimize",
    },
    {
      icon: <FiServer className="w-8 h-8" />,
      title: "Scale and collaborate",
      description:
        "15,000 websites are published every hour. Confidently scale your site with tools for hosting, security, compliance, and publishing — plus connect to your tech stack with integrations and APIs.",
      link: "#scale-collaborate",
    },
  ];
  return (
    <div className="bg-black">
      <div className="container mx-auto md:py-16 px-4 py-8 text-white">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:gap-15 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col text-white border-t border-white/50 pt-8"
            >
              <div className="mb-4 text-white" aria-hidden="true">
                {feature.icon}
              </div>
              <h3 className="text-lg font-medium mb-2">{feature.title}</h3>
              <p className="text-gray-500 mb-4 flex-1">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
