import NavigationButton from "../NavigationButton";

export default function PagesNavigation({ page, nextPage, previousPage }) {
  return (
    <div className="w-full flex justify-around mt-3">
      <NavigationButton action={previousPage}>Previous page</NavigationButton>
      <p>
        Page: <strong>{page}</strong>
      </p>
      <NavigationButton action={nextPage}>Next page</NavigationButton>
    </div>
  );
}
