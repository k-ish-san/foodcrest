const reviews = [
  {
    name: "Sophia Azura",
    image: "/src/assets/img/pic1.png", 
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. In consectetur error, dolores quae ipsa quos enim corporis magni obcaecati tempore natus eos, libero ducimus nulla neque eaque maxime nam molestias?",
  },
  {
    name: "John Deo",
    image: "/src/assets/img/pic2.png",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. In consectetur error, dolores quae ipsa quos enim corporis magni obcaecati tempore natus eos, libero ducimus nulla neque eaque maxime nam molestias?",
  },
  {
    name: "Victoria Zoe",
    image: "/src/assets/img/pic3.png",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. In consectetur error, dolores quae ipsa quos enim corporis magni obcaecati tempore natus eos, libero ducimus nulla neque eaque maxime nam molestias?",
  },
];

const Reviews = () => {
  return (
    <section className="py-16 px-6 md:px-16 bg-white">
      <h2 className="text-3xl font-bold text-center text-black mb-10">
        Customer's Review
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md text-gray-700 hover:shadow-lg transition"
          >
            <p className="mb-6">{review.text}</p>
            <div className="flex items-center space-x-4">
              <img
                src={review.image}
                alt={review.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <span className="font-semibold text-black">{review.name}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Reviews;
