import React, { useState } from 'react';
import Image from 'next/image';

interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  color: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "NeuroPulse",
    description: "Brain-computer interface for enhanced cognitive abilities.",
    imageUrl: "/images/neuropulse.jpg",
    color: "from-purple-400 to-indigo-600",
  },
  {
    id: 2,
    title: "EcoSphere",
    description: "Self-sustaining biodomes for extreme environments.",
    imageUrl: "/images/ecosphere.jpg",
    color: "from-green-400 to-teal-600",
  },
  {
    id: 3,
    title: "QuantumNet",
    description: "Unhackable quantum communication network.",
    imageUrl: "/images/quantumnet.jpg",
    color: "from-blue-400 to-cyan-600",
  },
  {
    id: 4,
    title: "SolarSail",
    description: "Interplanetary travel using light-propelled nanocrafts.",
    imageUrl: "/images/solarsail.jpg",
    color: "from-yellow-400 to-orange-600",
  },
  {
    id: 5,
    title: "BioForge",
    description: "3D-printed organs using patient's own stem cells.",
    imageUrl: "/images/bioforge.jpg",
    color: "from-red-400 to-pink-600",
  },
];

const LatestProjects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<number>(1);

  return (
    <section className="py-20 bg-gray-900 overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-6xl font-extrabold text-center mb-16 text-white">
          Futuristic Endeavors
        </h2>
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="relative w-80 h-80">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className={`absolute inset-0 transition-all duration-500 ease-in-out transform 
                    ${selectedProject === project.id ? 'scale-100 opacity-100 z-10' : 'scale-90 opacity-0 z-0'}
                    ${project.id % 2 === 0 ? 'rotate-3' : '-rotate-3'}
                  `}
                >
                  <div className={`w-full h-full rounded-2xl shadow-2xl overflow-hidden bg-gradient-to-br ${project.color}`}>
                    <Image
                      src={project.imageUrl}
                      alt={project.title}
                      layout="fill"
                      objectFit="cover"
                      className="mix-blend-overlay"
                    />
                    <div className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-black/70 to-transparent">
                      <h3 className="text-3xl font-bold text-white mb-2">{project.title}</h3>
                      <p className="text-sm text-gray-200">{project.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <div className="grid grid-cols-2 gap-4">
              {projects.map((project) => (
                <button
                  key={project.id}
                  className={`p-4 rounded-xl text-left transition-all duration-300 ${
                    selectedProject === project.id
                      ? `bg-gradient-to-r ${project.color} text-white shadow-lg`
                      : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                  }`}
                  onClick={() => setSelectedProject(project.id)}
                >
                  <h4 className="text-lg font-semibold mb-1">{project.title}</h4>
                  <p className="text-xs">{project.description}</p>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestProjects;