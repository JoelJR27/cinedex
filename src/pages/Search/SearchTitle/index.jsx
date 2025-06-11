function SearchTitle({ children, id }) {
  return (
    <h3 id={id} className="text-black font-bold text-center text-xl pt-2 pb-0">{children}</h3>
  );
}

export default SearchTitle;
