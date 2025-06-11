import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons/faArrowUp";
import useScroll from "../../hooks/useScroll";
function BackToTopButton() {
  const { isScrolled, backToTop } = useScroll();
  return (
    <>
      {isScrolled && (
        <button
          className="sticky left-[75%] bottom-3 rounded-full bg-primary-color w-18 h-18 cursor-pointer xs:left-[80%] sm:left-[85%] md:left-[90%] xl:left-[95%] hover:animate-jump"
          onClick={backToTop}
        >
          <FontAwesomeIcon icon={faArrowUp} color="white" onClick={backToTop} />
        </button>
      )}
    </>
  );
}

export default BackToTopButton;
