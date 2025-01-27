/* eslint-disable @next/next/no-img-element */

const aboutImage='/about2.png';

const AboutSection = () => (
    <section id="about" className="p-8">
      <div className="mx-auto flex flex-col items-center lg:flex lg:flex-row lg:items-center  lg:w-full">
        <div className="w-full flex flex-col mt-[36px] lg:mt-[2px] md:flex-col lg:w-1/2 mb-8 lg:mb-0 lg:pr-8 lg:pt-8">
          <h2 className="text-center  lg:text-left text-3xl font-bold mb-4">About Us</h2>
          <p className="text-justify sm:text-[19px] lg:text-left mb-4 md:text-xl md:text-center">
            We provide the best web services in the town at the best possible prices. Our team of experts is dedicated to delivering high-quality solutions that meet your needs and exceed your expectations. With a focus on innovation and customer satisfaction, we are your trusted partner for all your web service needs.
          </p>
          <p className="text-justify sm:text-[19px] lg:text-left md:text-xl md:text-center">
            Contact us today to learn more about how we can help your business succeed online.
          </p>
        </div>
        <div className="w-[98%] md:w-[84%] lg:w-1/2">
          <img src={aboutImage} alt="About Us" className="w-full md:w-[84%] md:relative md:left-[30px] lg:relative lg:left-[7px] lg:w-[89%] h-auto rounded-lg shadow-lg" />
        </div>
      </div>
    </section>
  );
  
  export default AboutSection;
  
  