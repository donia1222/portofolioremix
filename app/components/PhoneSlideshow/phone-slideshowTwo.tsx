"use client"

import { useEffect, useState } from "react"

export default function PhoneSlideshow() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  // Array of image URLs - replace with your actual images
  const images = [
    "/dtr.png",
    "/IMG_2488.PNG",
    "/IMG_2485.PNG",
    "/IMG_2486.PNG",
    "/cost.png",
  ]

  useEffect(() => {
    // Set up interval to change image every 2 seconds
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 2000)

    // Clean up interval on component unmount
    return () => clearInterval(interval)
  }, [images.length])

  return (
    <div className="flex items-center justify-center   rounded-[40px] p-2">
      <div className="phone-container relative w-[280px] h-[580px] bg-black rounded-[40px] p-3 shadow-xl">
        {/* Phone bezel */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/3 h-6 bg-black rounded-b-2xl z-10"></div>

        {/* Phone screen */}
        <div className="relative bg-white h-full w-full rounded-[32px] overflow-hidden">
          {/* Images */}
          {images.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                currentImageIndex === index ? "opacity-100" : "opacity-0"
              }`}
            >
              <img
                src={image || "/placeholder.svg"}
                alt={`Slideshow image ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

