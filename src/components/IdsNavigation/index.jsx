import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useNavigate from "../../hooks/useNavigate";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons/faArrowRight";
export default function IdsNavigation({ page, currentId }) {
  const { id, decreaseId, increaseId } = useNavigate(currentId);
  return (
    <div className="w-1/1 text-primary-color mx-auto flex justify-around py-5">
      <a onClick={decreaseId} href={`/${page}/${id}`}>
        <FontAwesomeIcon
          icon={faArrowLeft}
          className="text-2xl"
        ></FontAwesomeIcon>
      </a>
      <a onClick={increaseId} href={`/${page}/${id}`}>
        <FontAwesomeIcon
          icon={faArrowRight}
          className="text-2xl"
        ></FontAwesomeIcon>
      </a>
    </div>
  );
}
