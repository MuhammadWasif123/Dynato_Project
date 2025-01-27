import { benefits } from "../../../app/data/index";

const BenefitsSection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-2">
        <h2 className="heading text-3xl sm:text-4xl  md:text-5xl lg:text-4xl font-bold mb-8">
          Our Benefits
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8  ">
          {/* Benefit Item 1 */}
          {benefits.map((benefit, index) => (
            <div
              className="bg-toggle-benefit rounded-lg p-6 flex flex-col items-center transition-transform duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg"
              key={index}
            >
              <div className="bg-blue-500 rounded-full p-3 mb-4">
                <svg
                  className="w-12 h-12 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d={benefit.svg}
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">{benefit.mainText}</h3>
              <p className="text-center">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
