const Spinner = () => {
  return (
    <div className="flex justify-center items-center py-20">
      <div className="relative w-16 h-16">
        {/* Base of the suitcase */}
        <div className="absolute w-12 h-8 bg-[var(--primary)] rounded-lg top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>

        {/* Handle of the suitcase */}
        <div className="absolute w-8 h-2 bg-[var(--accent)] rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -mt-6"></div>

        {/* Spin animation */}
        <div className="absolute w-full h-full border-t-2 border-[var(--primary)] rounded-full animate-spin"></div>
      </div>
    </div>
  );
};

export default Spinner;