import SwiperWrapper from "./SwiperWrapper";
import NavigationButton from "../NavigationButton";
import useSwiper from "../../hooks/useSwiper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
export default function Swiper({ children, listSize }) {
  const { translate, nextSlide, prevSlide } = useSwiper(listSize);
  return (
    <div className="overflow-hidden my-7 w-[250px] mx-auto">
      <SwiperWrapper translate={translate}>{children}</SwiperWrapper>
      <div className="w-full flex justify-around mt-3">
        <NavigationButton action={prevSlide}>
          {<FontAwesomeIcon icon={faArrowLeft} />}
        </NavigationButton>
        <NavigationButton action={nextSlide}>
          {<FontAwesomeIcon icon={faArrowRight} />}
        </NavigationButton>
      </div>
    </div>
  );
}
