import React from "react";

const faqData = [
  {
    question: "How do I begin viewing webcams?",
    answer: `To start viewing random people on webcam, simply press on "Allow" and then press on the large "Start" button.`,
  },
  {
    question: "Can I filter the people that I see?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua. Scelerisque eleifend donec pretium vulputate sapien nec sagittis. Proin libero nunc consequat interdum. Condimentum lacinia quis vel eros donec ac. Mauris sit amet massa vitae tortor. Quisque id diam vel quam elementum pulvinar.",
  },
  {
    question: "How do I talk to strangers I meet?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua. Scelerisque eleifend donec pretium vulputate sapien nec sagittis. Proin libero nunc consequat interdum. Condimentum lacinia quis vel eros donec ac. Mauris sit amet massa vitae tortor. Quisque id diam vel quam elementum pulvinar.",
  },
  {
    question:
      " I don't like the person I'm talking to - how do I meet someone new?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua. Scelerisque eleifend donec pretium vulputate sapien nec sagittis. Proin libero nunc consequat interdum. Condimentum lacinia quis vel eros donec ac. Mauris sit amet massa vitae tortor. Quisque id diam vel quam elementum pulvinar.",
  },
  {
    question: "Can I stop seeing webcams without exiting the website?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua. Scelerisque eleifend donec pretium vulputate sapien nec sagittis. Proin libero nunc consequat interdum. Condimentum lacinia quis vel eros donec ac. Mauris sit amet massa vitae tortor. Quisque id diam vel quam elementum pulvinar.",
  },
  {
    question: "What is your realtor sale commission?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua. Scelerisque eleifend donec pretium vulputate sapien nec sagittis. Proin libero nunc consequat interdum. Condimentum lacinia quis vel eros donec ac. Mauris sit amet massa vitae tortor. Quisque id diam vel quam elementum pulvinar.",
  },
];

const FaqDescription = () => {
  return (
      <div className="w-full font-inter max-w-screen-4xl">

        <div className="max-w-[900px] mx-auto w-full">
          <div className="md:mt-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 mt-2 sm:my-2 md:mb-6">
              Frequently asked questions
            </h2>
          </div>
          <p className="text-center text-xl md:text-2xl">Whats happening around the World.</p>

          <div className="container mx-auto px-4 py-5 max-w-[750px] w-full lg:relative bottom-[69px]">

            <div className="divide-y p-4 my-10 divide-gray-100 rounded-xl border-x-[#FF5887] border-y-[#1CA5FC]">
              {faqData.map((faq, index) => (
                <details
                  key={index}
                  className="!border-x-[#FF5887] !border-y-[#1CA5FC] my-4 group p-6 [&_summary::-webkit-details-marker]:hidden rounded-lg !border-2 !border-pink-500 !border-opacity-60 "
                  open
                >
                  <summary className="flex cursor-pointer items-center justify-between gap-1.5">
                    <h2 className="ztext-lg font-medium">{faq.question}</h2>

                    <span className="relative h-5 w-5 shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="absolute inset-0 h-5 w-5 opacity-100 group-open:opacity-0 text-blue-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="absolute inset-0 h-5 w-5 opacity-0 group-open:opacity-100 text-pink-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </span>
                  </summary>

                  <p className="mt-4 leading-relaxed text-white-700">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </div>
  );
};

export default FaqDescription;