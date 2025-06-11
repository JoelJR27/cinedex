export default function SwiperWrapper({ children, translate }) {
  return (
    <div
      className="flex w-[250px] gap-x-[10px] transition-all duration-550 ease-in-out md:w-[500px]"
      style={{ transform: `translateX(${translate})` }}
    >
      {children}
    </div>
  );
}
