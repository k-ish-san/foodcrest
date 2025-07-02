const About = () => {
  return (
    <section className="py-16 px-6 md:px-16 bg-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        {/* LEFT: Image */}
        <div>
          <img
            src="/src/assets/img/about.png" // Update this with your actual image path
            alt="Why Choose Us"
            className="w-full h-auto rounded-lg object-cover"
          />
        </div>

        {/* RIGHT: Content */}
        <div>
          <h2 className="text-3xl font-bold text-[#2D3B36] mb-4">
            Why Choose Us?
          </h2>
          <p className="text-gray-700 mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
            architecto quisquam delectus minima perferendis nulla quia nisi
            laborum, exercitationem cum quo accusantium, impedit sed. Dicta, quo
            molestias omnis reprehenderit quae animi? Explicabo quasi accusamus
            laboriosam temporibus delectus, aut a? Quasi?
          </p>
          <p className="text-gray-700 mb-6">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi,
            suscipit reiciendis accusamus recusandae eum aspernatur pariatur
            odit veritatis facere. Magnam!
          </p>
          <button className="border border-orange-500 text-orange-500 px-6 py-2 rounded-full font-medium hover:bg-orange-500 hover:text-white transition">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
