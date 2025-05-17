"use client";
import ParticleBackground from '@/components/ParticleBackground';
import Link from 'next/link';
import Image from 'next/image';

// Sample project data
const projects = [
  {
    id: 1,
    title: "5G Smart Farm Automation System",
    description: "Built a complete IoT solution using Raspberry Pi, Arduino, and custom PCB designs to automate lighting, climate control, and automation.",
    image: "/projects/p1.jpg",
    tags: ["IoT", "Embedded Systems", "PCB Design", "Python"]
  },
  {
    id: 2,
    title: "FPGA-Based Signal Processor",
    description: "Designed and implemented a digital signal processing system on FPGA for real-time audio filtering and analysis.",
    image: "/projects/pr2.jpg",
    tags: ["FPGA", "Verilog", "DSP", "Hardware Design"]
  },
  {
    id: 3,
    title: "Search And Rescue",
    description: "Developed a tele-operated robotic vehicle for simulated search-and-rescue missions, integrating sensors for environmental mapping, object identification, and collision-free navigation within strict time constraints.",
    image: "/projects/p3.jpg",
    tags: ["C", "ATMega2560", "UART", "Lidar", "TLS", "RPI"]
  }
];

export default function Projects() {
  return (
    <main className="relative min-h-screen">
      <ParticleBackground />
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 pt-24 pb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-10">My Projects</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="bg-black/30 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl transition-transform duration-300 hover:scale-105"
            >
              <div className="relative h-48 w-full">
                <Image 
                  src={project.image} 
                  alt={project.title}
                  fill
                  style={{objectFit: "cover"}}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span 
                      key={index} 
                      className="text-xs bg-red-600/20 text-red-400 px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Link 
                  href={`/projects/${project.id}`} 
                  className="text-red-500 hover:text-red-400 font-medium"
                >
                  View Details →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
// "use client";
// import ProjectSlideshow from "@/components/ProjectSlideshow";

// export default function Projects() {
//   return (
//     <main className="flex flex-col items-center justify-center min-h-screen bg-[#222] py-10">
//       <h1 className="text-4xl md:text-5xl font-bold text-white mb-10">My Projects</h1>
//       <ProjectSlideshow />
//     </main>
//   );
// }
