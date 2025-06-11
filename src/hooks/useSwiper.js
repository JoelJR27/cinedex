import { useState } from "react";
export default function useSwiper(swiperLength) {
  const [currentImage, setCurrentImage] = useState(0);
  const [translate, setTranslate] = useState("0px");

  const nextSlide = () => {
    setCurrentImage((prev) => {
      const next = (prev + 1) % swiperLength;
      setTranslate(`${-next * 260}px`);
      return next;
    });
  };

  const prevSlide = () => {
    setCurrentImage((prev) => {
      const next = (prev - 1 + swiperLength) % swiperLength;
      setTranslate(`${-next * 260}px`);
      return next;
    });
  };

  return {
    translate,
    nextSlide,
    prevSlide,
  };
}
