import { ArrowLeft, ArrowRight } from "lucide-react";
import { useState } from "react";
import { BsPauseFill, BsPlayFill } from "react-icons/bs";
import SwiperCore from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Button } from "./ui/button";
const CustomerReview = () => {
  const customerData = [
    {
      id: "techstart",
      logo: "https://cdn.prod.website-files.com/66e88746834b80507cdf7933/66ec7ff7808fef2aeecfff1b_Outliant.svg",
      video:
        "https://dhygzobemt712.cloudfront.net/Web/home/2024-wxp/customers/lattice.mp4",
      poster:
        "https://cdn.prod.website-files.com/66e88746834b80507cdf7933/66ec7faa88e83cdb12efc5b3_lattice-bg.webp",
      stat: "94%",
      statDesc: "job placement rate",
      quote:
        "CodeTutor's platform revolutionized how we train our junior developers. The AI-powered guidance and interactive exercises have significantly accelerated our onboarding process.",
      author: "Sarah Chen — CTO",
      link: "/customers/techstart",
    },
    {
      id: "edutech",
      logo: "https://cdn.prod.website-files.com/66e88746834b80507cdf7933/66ec7ff8ace31b63debbf4d9_Jasper.svg",
      video:
        "https://dhygzobemt712.cloudfront.net/Web/home/2024-wxp/customers/outliant.mp4",
      poster:
        "https://cdn.prod.website-files.com/66e88746834b80507cdf7933/66ec7faad1ba5dcf377b861c_outliant-bg.webp",
      stat: "85%",
      statDesc: "completion rate",
      quote:
        "CodeTutor has transformed our computer science curriculum. Students are more engaged and show better understanding of complex programming concepts thanks to the interactive learning approach.",
      author: "Dr. Michael Torres — Department Head",
      link: "/customers/edutech",
    },
    {
      id: "devacademy",
      logo: "https://cdn.prod.website-files.com/66e88746834b80507cdf7933/66ec7ff8a7ffdf748142d329_Fivetran.svg",
      video:
        "https://dhygzobemt712.cloudfront.net/Web/home/2024-wxp/customers/fivetran.mp4",
      poster:
        "https://cdn.prod.website-files.com/66e88746834b80507cdf7933/66ec7faad1ba5dcf377b861c_outliant-bg.webp",
      stat: "3x",
      statDesc: "faster learning",
      quote:
        "Our students consistently report that CodeTutor's personalized learning paths and AI assistance help them grasp programming concepts three times faster than traditional methods.",
      author: "Rachel Kim — Lead Instructor",
      link: "/customers/devacademy",
    },
  ];

  const [swiper, setSwiper] = useState<SwiperCore | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
    if (swiper) {
      const currentSlide = swiper.activeIndex;
      const video = document.querySelector(
        `video[data-customer="${customerData[currentSlide].id}"]`
      ) as HTMLVideoElement;
      if (video) {
        if (isPlaying) {
          video.pause();
        } else {
          video.play();
        }
      }
    }
  };

  return (
    <div className="md:py-20 bg-gray-100">
      <div className="container mx-auto md:py-16 px-4 py-8">
        <div className="flex items-center justify-between space-y-8">
          <div className="max-w-[34rem]">
            <h2 className="text-2xl md:text-5xl font-bold">
              The best startup companies build on here
            </h2>
          </div>
          <div className="md:flex gap-5 shrink-0">
            <Button
              variant={"ghost"}
              className={`custom-prev hover:bg-gray-200`}
            >
              <ArrowLeft className="w-6 h-6" />
            </Button>
            <Button
              variant={"ghost"}
              className={`custom-next hover:bg-gray-200`}
            >
              <ArrowRight className="w-6 h-6" />
            </Button>
          </div>
        </div>
        {/* video */}
        <div className="rounded-lg">
          <Swiper
            slidesPerView={1}
            spaceBetween={5}
            navigation={{
              nextEl: ".custom-next",
              prevEl: ".custom-prev",
            }}
            scrollbar={{
              hide: false,
              draggable: true,
            }}
            onSwiper={(swiperInstance) => setSwiper(swiperInstance)}
            loop
            modules={[Navigation, Pagination]}
          >
            {customerData.map((customer) => (
              <SwiperSlide key={customer.id}>
                <div
                  key={customer.id}
                  className="w-full flex-shrink-0 relative"
                >
                  <div className="aspect-video overflow-hidden rounded-lg">
                    <video
                      data-customer={customer.id}
                      src={customer.video}
                      poster={customer.poster}
                      className="w-full h-full object-cover"
                      autoPlay
                      muted
                      loop
                      playsInline
                      //   controls // Thêm thuộc tính này
                      onEnded={() => {
                        if (
                          swiper &&
                          swiper.activeIndex < customerData.length - 1
                        ) {
                          swiper.slideNext();
                        }
                      }}
                    />
                    {/* <div className="absolute inset-0 bg-black/40" /> */}

                    {/* Content */}
                    <div className="absolute inset-0 p-8 flex flex-col">
                      <img
                        src={customer.logo}
                        alt=""
                        className="h-12 w-auto mb-auto"
                      />

                      <div className="sm:grid grid-cols-2 hidden items-end gap-8 text-white">
                        <div>
                          <span className="text-6xl font-bold mb-2">
                            {customer.stat}
                          </span>
                          <p className="text-lg">{customer.statDesc}</p>
                        </div>
                        <div>
                          <p className="text-xl mb-4">{customer.quote}</p>
                          <div className="flex items-center justify-between">
                            <span className="text-lg">{customer.author}</span>
                            <button
                              onClick={togglePlayPause}
                              className="p-2 hover:bg-white/20 rounded-full transition-colors"
                            >
                              {isPlaying ? (
                                <BsPauseFill size={24} />
                              ) : (
                                <BsPlayFill size={24} />
                              )}
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default CustomerReview;
