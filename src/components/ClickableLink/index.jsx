function ClickableLink({ text, link }) {
  return (
    <a
      className="hover:underline text-medium decoration-white cursor-pointer animate-ease-in px-6 py-2 md:text-xl"
      href={link}
    >
      {text}
    </a>
  );
}

export default ClickableLink;
