import React from 'react';

const About = () => {
  return (
    <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-16 px-4 min-h-screen flex items-center justify-center">
      <div className="bg-gray-950 bg-opacity-70 backdrop-blur-md shadow-2xl rounded-2xl p-10 max-w-3xl text-left">
        <h2 className="text-4xl font-bold mb-6 text-blue-400">About Me</h2>
        <p className="text-lg leading-relaxed text-gray-200">
          I’m a second-year Artificial Intelligence student at <span className="font-semibold text-white">Vrije Universiteit Amsterdam</span> with a strong passion for programming,
          problem-solving, and teamwork. I enjoy working on projects involving machine learning, knowledge graphs, and intelligent systems.
          <br /><br />
          I’m always eager to learn, take on new challenges, and grow both technically and professionally.
        </p>
      </div>
    </section>
  );
};

export default About;
