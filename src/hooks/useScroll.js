import { useEffect, useState } from "react";
export default function useScroll() {
  const [isScrolled, setIsScrolled] = useState(false);
  const backToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 300 ? setIsScrolled(true) : setIsScrolled(false);
    });
  });
  return {
    isScrolled,
    backToTop,
  };
}
