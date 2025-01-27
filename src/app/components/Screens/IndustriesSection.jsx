/* eslint-disable @next/next/no-img-element */

const Card1='/Industry1.png';
const Card2='/Industry2.png';
const Card3='/Industry3.png';
const Card4='/Industry7.png';
const Card5='/Industry5.png';
const Card6='/Industry6.png';



const industries = [
  { name: "ERP", description: "Short description of Health Care", image: Card1 },
  { name: "Manufacturing", description: "Short description of Manufacturing", image: Card2 },
  { name: "Banking & Finance", description: "Short description of Banking & Finance", image: Card3 },
  { name: "Government", description: "Short description of Government", image:Card4  },
  { name: "Retail & E-Commerce", description: "Short description of Retail & E-Commerce", image: Card5 },
  { name: "Insurance", description: "Short description of Insurance", image:Card6 },
];

const IndustriesSection = () => (
  <section id="industries">
    <div className="container mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-4xl font-bold heading">Industries</h2>
      </div>
      <div className="flex flex-wrap justify-center gap-8">
        {industries.map((industry, index) => (
          <div key={index} className="group perspective w-72 h-48">
            <div className="relative preserve-3d group-hover:rotate-y-180 w-full h-full duration-1000">
              <div className="absolute backface-hidden w-full h-full flex justify-center items-center bg-white shadow-xl p-4 border rounded-lg">
                <img src={industry.image} alt={industry.name} className="w-full h-full object-cover" />
              </div>
              <div className="flex flex-col gap-2 absolute rotate-y-180 backface-hidden w-full h-full bg-industry shadow-lg p-4 border rounded-lg  justify-center items-center">
                <h3 className='text-xl font-bold'>{industry.name}</h3>
                <p className="text-center">{industry.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default IndustriesSection;
