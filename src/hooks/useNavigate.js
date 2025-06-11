import { useState } from "react";
export default function useNavigate(parameter) {
  const [id, setId] = useState(Number(parameter));
  const decreaseId = () => {
    setId((prev) => prev - 1);
    if (id <= 1) {
      setId(1);
      return;
    }
  };
  const increaseId = () => {
    setId((prev) => prev + 1);
  };

  return { id, decreaseId, increaseId };
}
