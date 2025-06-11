import { useState } from "react";
export default function usePages() {
  const [page, setPage] = useState(1);
  const previousPage = () => {
    if (page === 1) return;
    setPage(page - 1);
  };
  const nextPage = () => {
    setPage(page + 1);
  };

  return { page, previousPage, nextPage };
}
