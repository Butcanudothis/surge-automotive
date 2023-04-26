import React from "react";
import Navbar from "./Navbar";

// create a data structure that holds the data for each checkpoint
const checkpoints = [
  {
    id: 1,
    date: "October 2023",
    description:
      "Purchase of RX8 car and initial research on electric conversion begins.",
    link: "https://www.google.com",
  },
  {
    id: 2,
    date: "December 2023",
    description:
      "Removal of gasoline engine and installation of electric motor, battery pack, and controller begins.",
    link: "https://www.google.com",
  },
  {
    id: 3,
    date: "March 2024",
    description: "Electric conversion completed and initial testing begins.",
    link: "https://www.google.com",
  },
  {
    id: 4,
    date: "June 2024",
    description:
      "Suspension and braking upgrades installed to accommodate the weight distribution of the new electric components.",
    link: "https://www.google.com",
  },
  {
    id: 5,
    date: "September 2024",
    description:
      "Final testing and tuning of the electric conversion begins. The car is now ready to be driven on the road.",
    link: "https://www.google.com",
  },
  {
    id: 6,
    date: "December 2024",
    description:
      "The car is now ready to be driven on the road. The car is now ready to be driven on the road.",
    link: "https://www.google.com",
  },
  {
    id: 7,
    date: "March 2025",
    description: "Safety inspections and emissions testing completed.",
    link: "https://www.google.com",
  },
  {
    id: 8,
    date: "June 2025",
    description: "Final touches and cosmetic upgrades completed.",
    link: "https://www.google.com",
  },
  {
    id: 9,
    date: "September 2025",
    description:
      "RX8 electric conversion project completed and ready for the road!",
    link: "https://www.google.com",
  },
];

// create a function that returns the JSX for each checkpoint
const Checkpoint = ({ date, description, link }) => {
  return (
    <div className="checkpoint">
      <a href={link}>
        <div className="hover:animate-[pulse_1.5s_ease-in-out]">
          <h2 className="mb-[0.5em] text-black">{date}</h2>
          <p>{description}</p>
        </div>
      </a>
    </div>
  );
};

const DevelopmentTimeline = () => {
  return (
    <>
      <div
        className=" bg-[url('./assets/Mazda-RX-7-blackandsilver-small.webp')] lg:bg-[url('./assets/Mazda-RX-7-blackandsilver-large.webp')]
        bg-cover text-white m-0 before:content-[''] before:absolute before:w-full before:h-full before:z-[0] before:left-0 before:top-0;
    bg-black  ; "
      >
        <Navbar textColor="text-white" />
        <div className="timeline animate-in slide-in-from-bottom-full duration-1000">
          <h1 className="text-[3em] m-[0.3em] text-center">Development</h1>
          {/* map over the checkpoints array and return the JSX for each checkpoint */}
          {checkpoints.map((checkpoint) => (
            <Checkpoint
              key={checkpoint.id}
              date={checkpoint.date}
              description={checkpoint.description}
              link={checkpoint.link}
            />
          ))}
        </div>
        {/* add a blank checkpoint with border so that the timeline ends */}
        <div className="max-w-[34em] relative py-[2em] w-full px-0 border-[none] before:w-[3px] before:h-[4em] before:top-[-2em] before:-translate-x-2/4 before:left-2/4;
      transform: none;;
  }">



          </div>
      </div>
    </>
  );
};

export default DevelopmentTimeline;
