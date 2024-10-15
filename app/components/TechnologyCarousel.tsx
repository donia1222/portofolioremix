import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

const technologies = [
  {
    name: 'Next.js',
    icon: '/icons/dotnet.svg',
  },
  {
    name: 'Astro',
    icon: '/icons/astro.svg',
  },
  {
    name: 'Remix',
    icon: '/icons/remix.svg',
  },
  {
    name: 'Node.js',
    icon: '/icons/nodedotjs.svg',
  },
  {
    name: 'React Native',
    icon: '/icons/react.svg',
  },
  {
    name: 'Joomla',
    icon: '/icons/joomla.svg',
  },
  {
    name: 'Openai',
    icon: '/icons/openai.svg',
  },
];

export default function TechnologyCarousel() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Este efecto solo se ejecuta en el cliente
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <div className="w-full py-12 bg-gray-900 pb-0 pt-60">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={10}
        slidesPerView={3}
        autoplay={{ delay: 3000 }}
        loop
        breakpoints={{
          640: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 4,
          },
          1024: {
            slidesPerView: 6,
          },
        }}
        className="max-w-4xl mx-auto"
      >
        {technologies.map((tech) => (
          <SwiperSlide key={tech.name}>
            <div className="flex flex-col items-center group">
              <img
                src={tech.icon}
                alt={tech.name}
                className="h-16 w-16 filter brightness-0 invert group-hover:filter-none transition duration-300"
              />
              <div className="opacity-0 group-hover:opacity-100 transition duration-300 text-white mt-2">
                {tech.name}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
