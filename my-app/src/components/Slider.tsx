import  { useRef, useState, useEffect } from "react";

const images = [
  "https://www.milotec.net/fotky72500/slider/Obr-1.png",
  "https://www.milotec.net/fotky72500/slider/Obr-2.png",
  "https://www.milotec.net/fotky72500/slider/Obr-3.png",
  "https://www.milotec.net/fotky72500/slider/Obr-4.png",
  "https://www.milotec.net/fotky72500/slider/Obr-5.png",
  "https://www.milotec.net/fotky72500/slider/Obr-6.png",
];

const Slider = () => {
  const [current, setCurrent] = useState(0);
  const intervalRef = useRef<number | null>(null);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  useEffect(() => {
    intervalRef.current = setInterval(nextSlide, 3000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <div className="relative w-full max-w-full mx-auto overflow-hidden rounded-xl shadow-lg">
      <img
        src={images[current]}
        alt={`Slide ${current + 1}`}
        className="w-full object-cover transition-opacity duration-500 ease-in-out"
      />
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrent(index);
              if (intervalRef.current) clearInterval(intervalRef.current);
            }}
            className={`w-3 h-3 rounded-full ${
              index === current ? "bg-white" : "bg-white/50"
            } transition-colors duration-300`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Slider;
