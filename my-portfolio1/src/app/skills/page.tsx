"use client";
import ParticleBackground from '@/components/ParticleBackground';

// Sample skills data
const skills = [
  {
    category: "Hardware",
    items: [
      { name: "Embedded Systems", proficiency: 75 },
      { name: "PCB Design", proficiency: 60 },
      { name: "FPGA Programming", proficiency: 75 },
      { name: "Microcontrollers", proficiency: 85 },
      { name: "Circuit Design", proficiency: 75 },
    ]
  },
  {
    category: "Software",
    items: [
      { name: "Python", proficiency: 90 },
      { name: "C/C++", proficiency: 85 },
      { name: "JavaScript", proficiency: 85 },
      { name: "React", proficiency: 85 },
      { name: "Next.js", proficiency: 80 },
    ]
  },
  {
    category: "Other",
    items: [
      { name: "Penetration Testing", proficiency: 75 },
      { name: "Cloud Computing", proficiency: 70 },
      { name: "Networking", proficiency: 70 },
      { name: "Operating Systems", proficiency: 70 },
      { name: "3D Modeling", proficiency: 95 },
    ]
  }
];

export default function Skills() {
  return (
    <main className="relative min-h-screen">
      <ParticleBackground />
      
      <div className="relative z-10 max-w-5xl mx-auto px-4 pt-24 pb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-10">My Skills</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skillGroup, groupIndex) => (
            <div 
              key={groupIndex}
              className="bg-black/30 backdrop-blur-sm rounded-2xl p-6 shadow-xl"
            >
              <h2 className="text-2xl font-bold text-red-600 mb-6">{skillGroup.category}</h2>
              <div className="space-y-5">
                {skillGroup.items.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-1">
                      <span className="text-white">{skill.name}</span>
                      <span className="text-gray-400">{skill.proficiency}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div 
                        className="bg-red-600 h-2 rounded-full" 
                        style={{ width: `${skill.proficiency}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
