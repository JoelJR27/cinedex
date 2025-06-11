const Loading = () => {
  return (
    <div className="flex justify-center items-center h-screen self-center justify-self-center">
      <div className="w-4 h-4 bg-primary-color rounded-full animate-bounce [animation-delay:-0.3s] mx-1"></div>
      <div className="w-4 h-4 bg-primary-color rounded-full animate-bounce [animation-delay:-0.15s] mx-1"></div>
      <div className="w-4 h-4 bg-primary-color rounded-full animate-bounce mx-1"></div>
    </div>
  );
};

export default Loading;
