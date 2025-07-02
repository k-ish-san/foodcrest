const HeroSection = () => {
  return (
    <section className="relative h-[600px] w-full bg-white overflow-hidden">
      {/* Background Image */}
      <img
        src="/src/assets/img/hero.jpg" // ensure correct path
        alt="Food Display"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay (optional dark layer for contrast) */}
      <div className="absolute inset-0 bg-black/10"></div>

      {/* Text Content - left, vertically centered */}
      <div className="relative z-10 w-2/3 h-full px-6 lg:mx-10 md:px-16  flex items-center">
        <div className="max-w-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-zinc-400 leading-tight mb-4">
            Elevate Your Inner Foodie <br /> with Every Bite.
          </h1>
          <p className="text-slate-300 mb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis et qui, maxime
            assumenda repellat corrupti <br /> officia dolorem delectus labore
            deleniti?
          </p>
        
            
            <button className="border border-orange-500 text-orange-500 px-6 py-2 md:mx-20 rounded-full font-medium hover:bg-orange-500 hover:text-white transition">
              Order Now
            </button>
        
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
