"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const projects = [
  {
    title: "Smart 5G AIOT Vertical Farming",
    number: "01",
    description: ``,
    skills: ["C", "ATMega2560", "UART", "LiDAR", "TLS", "RPi"],
    images: [
      "/projects/project1-1.jpeg",
      "/projects/project1-2.jpeg",
      "/projects/project1-3.jpg",
      "/projects/project1-4.jpg"
    ]
  },
  {
    title: "FPGA-Based Signal Processor",
    number: "02",
    description: `Designed and implemented a digital signal processing system on FPGA for real-time audio filtering and analysis.`,
    skills: ["FPGA", "Verilog", "DSP", "Hardware Design"],
    images: [
      "/projects/project3-1.jpg",
      "/projects/project3-2.jpg",
      "/projects/project3-3.jpg",
      "/projects/project3-4.jpg"
    ]
  },
    {
    title: "Search And Rescue",
    number: "01",
    description: `Designed a tele-operated robotic vehicle to perform a search and rescue mission in a simulated environment. The robot is equipped with multiple sensors to map out its surroundings. It has to explore and search for different objects and identify their colours and park at a designated zone under a certain time limit with minimal collisions with the obstacles.`,
    skills: ["C", "ATMega2560", "UART", "LiDAR", "TLS", "RPi"],
    images: [
      "/projects/project2-1.jpg",
      "/projects/project2-2.jpg",
      "/projects/project2-3.jpg",
      "/projects/project2-4.jpg"
    ]
  },
  // Add more project objects as needed
];

export default function ProjectSlideshow() {
  return (
    <Swiper
      navigation
      modules={[Navigation]}
      className="w-full max-w-5xl h-[500px] bg-[#222] rounded-xl shadow-xl"
    >
      {projects.map((project, idx) => (
        <SwiperSlide key={idx}>
          <div className="flex flex-col md:flex-row h-full">
            <div className="flex-1 p-8 flex flex-col justify-center text-white">
              <div className="text-6xl font-extrabold mb-4 text-[#bdbdbd]">{project.number}</div>
              <div className="text-3xl font-bold mb-4">{project.title}</div>
              <div className="mb-6 text-lg font-mono text-[#bdbdbd]">{project.description}</div>
              <div className="mt-auto text-green-400 font-mono text-lg">
                {project.skills.map((s, i) => (
                  <span key={i}>{s}{i < project.skills.length - 1 ? ', ' : ''}</span>
                ))}
              </div>
            </div>
            <div className="flex-1 grid grid-cols-2 gap-2 p-8">
              {project.images.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`project ${project.number} - ${i + 1}`}
                  className="object-cover w-full h-32 md:h-40 rounded-lg"
                />
              ))}
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
