import React from 'react';
import { Cpu, Code, Cog } from 'lucide-react';

const About = () => {
  const highlights = [
    { icon: Cpu, title: 'Embedded Systems', desc: 'STM32, ESP32, Arduino, sensor interfacing, communication protocols.' },
    { icon: Cog, title: 'Real-time Control', desc: 'Firmware for quadcopter stability, timing, interrupts, and performance.' },
    { icon: Code, title: 'Front-end Dev', desc: 'React, Tailwind, responsive UI with a focus on performance and accessibility.' },
  ];

  return (
    <section id="about" className="relative w-full bg-slate-950 text-white">
      <div className="container mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-3xl md:text-4xl font-bold">About Me</h2>
        <p className="mt-4 max-w-3xl text-slate-300">
          Im pursuing B.Tech in ECE (AI & ML) at Gautam Buddha University (2024	2028). An embedded systems
          enthusiast experienced in microcontroller programming and real-time development. I build embedded
          solutions with STM32, ESP32, and Arduino, implementing sensor interfaces and communication protocols.
          Currently developing quadcopter flight controller firmware with a focus on stability control and
          real-time performance, while learning ROS fundamentals for robotics.
        </p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {highlights.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <Icon className="h-6 w-6 text-cyan-300" />
              <h3 className="mt-3 text-xl font-semibold">{title}</h3>
              <p className="mt-2 text-slate-300">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
