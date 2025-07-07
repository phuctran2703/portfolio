import Image from "next/image";
import { useState } from "react";

const images = ["/me/1.jpg", "/me/2.png", "/me/4.jpg"];

export default function ImageStack() {
  const [currentImages, setcurrentImages] = useState(images);

  const handleNextImage = () => {
    const newImages = [...currentImages];
    const firstImage = newImages.shift();
    if (firstImage !== undefined) {
      newImages.push(firstImage);
    }
    setcurrentImages(newImages);
  };

  return (
    <div
      className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 cursor-pointer mx-auto"
      onClick={handleNextImage}
    >
      {currentImages.map((src, index) => (
        <Image
          key={src}
          src={src}
          alt={`Photo${index + 1}`}
          fill
          className={`absolute object-cover rounded-xl transition-transform duration-500
            ${
              index === 0
                ? "z-30"
                : index === 1
                ? "z-20 scale-[0.98] translate-x-2 rotate-[3deg]"
                : "z-10 scale-[0.96] translate-x-4 rotate-[6deg] opacity-80"
            }`}
        />
      ))}
    </div>
  );
}
