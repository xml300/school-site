import React, { useState } from 'react';
import { MOCK_PROGRAMS } from '../constants';

const AcademicsPage: React.FC = () => {
  return (
    <div className="bg-slate-50 dark:bg-primary-900 pt-20 opacity-0 animate-fadeIn">
      {/* Hero Section */}
      <section className="relative bg-cover bg-center h-[500px]" style={{ backgroundImage: 'url(/PICTURE%20PANORAMS/TEACHING%20STAFF.jpg)' }}>
        <div className="absolute inset-0 bg-primary-900 bg-opacity-60 flex items-center justify-center">
          <div className="text-center text-white px-4 opacity-0 animate-fadeInUp">
            <h1 className="text-5xl font-extrabold font-heading leading-tight">Academic Excellence</h1>
            <p className="mt-4 text-xl max-w-2xl mx-auto">Nurturing Minds, Shaping Futures: A Curriculum Designed for Global Success.</p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* Curriculum Philosophy */}
        <section aria-labelledby="curriculum-philosophy-heading" className="bg-white dark:bg-primary-800 p-8 rounded-lg shadow-lg mb-12 opacity-0 animate-fadeInUp" style={{ animationDelay: '200ms' }}>
            <h2 id="curriculum-philosophy-heading" className="text-3xl font-bold font-heading text-secondary-dark dark:text-secondary-light">Our Curriculum Philosophy</h2>
            <p className="mt-4 text-primary-700 dark:text-slate-300 leading-relaxed">
                Our academic program at King David School is meticulously crafted to align with the Nigerian Educational Research and Development Council (NERDC) curriculum, ensuring our students receive a world-class education rooted in national relevance. We foster a challenging yet supportive environment that encourages intellectual curiosity, critical thinking, and holistic development. Our goal is to equip students with the knowledge, skills, and values necessary to excel in national examinations (WAEC, NECO), pursue higher education, and thrive as responsible global citizens.
            </p>
        </section>

        {/* Key Academic Features */}
        <section className="mb-12 opacity-0 animate-fadeInUp" style={{ animationDelay: '600ms' }} aria-labelledby="key-features-heading">
            <h2 id="key-features-heading" className="text-3xl font-bold font-heading text-center mb-8 text-primary-800 dark:text-white">Key Academic Features</h2>
            <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white dark:bg-primary-800 p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold font-heading text-secondary-dark dark:text-secondary-light mb-2">Outstanding Examination Success</h3>
                    <p className="text-primary-600 dark:text-slate-300">Our students consistently achieve top results in national examinations like WAEC and NECO, a testament to our rigorous academic standards and dedicated teaching staff. We provide comprehensive support, including mock exams, revision classes, and personalized tutoring to ensure every student reaches their full potential.</p>
                </div>
                <div className="bg-white dark:bg-primary-800 p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold font-heading text-secondary-dark dark:text-secondary-light mb-2">Digital Literacy & Innovation</h3>
                    <p className="text-primary-600 dark:text-slate-300">Embracing the future, our curriculum integrates digital literacy, coding, robotics, and artificial intelligence from an early age. We equip students with essential 21st-century skills, fostering innovation and preparing them for a technology-driven world.</p>
                </div>
            </div>
        </section>

        {/* Guidance & Counseling */}
        <section className="mb-12 opacity-0 animate-fadeInUp" style={{ animationDelay: '800ms' }} aria-labelledby="guidance-counseling-heading">
            <h2 id="guidance-counseling-heading" className="text-3xl font-bold font-heading text-center mb-8 text-primary-800 dark:text-white">Guidance & Counseling</h2>
            <div className="bg-white dark:bg-primary-800 p-8 rounded-lg shadow-md text-center">
                <p className="text-primary-600 dark:text-slate-300 leading-relaxed">
                    At King David School, we believe in nurturing every aspect of a student's development. Our dedicated guidance and counseling department provides comprehensive support for academic planning, career development, and personal well-being. From one-on-one counseling sessions to workshops on study skills and university applications, we are committed to helping our students navigate their educational journey and achieve their aspirations.
                </p>
            </div>
        </section>

        {/* Academic Pathways (Cards) */}
        <section className="opacity-0 animate-fadeInUp" style={{ animationDelay: '1000ms' }} aria-labelledby="academic-pathways-heading-cards">
          <h2 id="academic-pathways-heading-cards" className="text-3xl font-bold font-heading text-center mb-8 text-primary-800 dark:text-white">Educational Stages</h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-8">
            {MOCK_PROGRAMS.map((program) => (
              <div key={program.name} className="bg-white dark:bg-primary-800 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between min-h-[350px]">
                <h3 className="text-xl font-bold font-heading text-secondary-dark dark:text-secondary-light mb-3">{program.name}</h3>
                <p className="text-primary-600 dark:text-slate-300 mb-4">{program.description}</p>
                <h4 className="font-bold mt-4 mb-2 text-primary-700 dark:text-slate-200">Key Courses:</h4>
                <ul className="list-disc list-inside space-y-1 text-primary-600 dark:text-slate-300 marker:text-secondary">
                  {program.courses.map(course => <li key={course}>{course}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default AcademicsPage;
