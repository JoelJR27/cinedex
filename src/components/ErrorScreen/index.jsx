function ErrorScreen({ message }) {
  return (
    <div className="flex flex-col items-center justify-center h-64 px-4">
      <h2 className="text-red-600 font-bold text-2xl mb-4">Oops! Something went wrong</h2>
      <p className="text-center text-black mb-6">{message}</p>
    </div>
  );
}

export default ErrorScreen;
